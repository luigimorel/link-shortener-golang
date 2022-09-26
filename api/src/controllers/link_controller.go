package controllers

import (
	"bytes"
	"encoding/json"
	"errors"
	"log"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/morelmiles/link-shortener/src/config"
	"github.com/morelmiles/link-shortener/src/models"
	"github.com/morelmiles/link-shortener/src/utils"
	"gorm.io/gorm"
)

// GetAllLinks Fetches all the stored links
func GetAllLinks(w http.ResponseWriter, r *http.Request) {

	var links []models.Link

	config.DB.Find(&links)
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	json.NewEncoder(w).Encode(&links)
}

// GetLinkById Fetches a single link
func GetLinkById(w http.ResponseWriter, r *http.Request) {
	linkId := mux.Vars(r)["id"]

	if !checkIfLinkExists(linkId) {
		json.NewEncoder(w).Encode("link not found!")
		return
	}

	var link models.Link
	config.DB.First(&link, linkId)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(link)
}

// Helper for checking if the link exits
func checkIfLinkExists(linkId string) bool {
	var link models.Link
	config.DB.First(&link, linkId)

	return link.ID != 0
}

// CreateLink - Creates a new link
func CreateLink(w http.ResponseWriter, r *http.Request) {
	var link models.Link
	var err error

	json.NewDecoder(r.Body).Decode(&link)

	link.RandomString = utils.RandomString(8)

	newLink := config.DB.Create(&link)
	err = newLink.Error

	if err != nil {
		log.Panic(err)
	} else {
		json.NewEncoder(w).Encode(&link)
	}
}

// UpdateLinkById Updates a single link
func UpdateLinkById(w http.ResponseWriter, r *http.Request) {
	linkId := mux.Vars(r)["id"]
	if !checkIfLinkExists(linkId) {
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode("link not found!")
		return
	}

	var link models.Link

	config.DB.First(&link, linkId)
	json.NewDecoder(r.Body).Decode(&link)
	config.DB.Save(&link)
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(link)
}

// DeleteLinkById Deletes a single link
func DeleteLinkById(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	linkId := mux.Vars(r)["id"]
	if !checkIfLinkExists(linkId) {
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode("link not found!")
		return
	}

	var link models.Link
	config.DB.Delete(&link, linkId)
	json.NewEncoder(w).Encode(link)
}

// func FindByShortLink(w http.ResponseWriter, r *http.Request, shortLink string) {
// 	w.Header().Set("Content-Type", "application/json")
// 	linkId := mux.Vars(r)["short_link"]
// 	if !checkIfLinkExists(linkId) {
// 		w.WriteHeader(http.StatusNotFound)
// 		json.NewEncoder(w).Encode("link not found!")
// 		return
// 	}
// 	var link models.Link
// 	config.DB.Where("short_link = ? ", shortLink).First(&link)
// 	json.NewEncoder(w).Encode(link)
// }

func RedirectLinks(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var link models.Link
	exist := config.DB.Where("short_link=?", params["link"]).First(&link)
	if !errors.Is(exist.Error, gorm.ErrRecordNotFound) && exist.Error != nil {
		returnNotFound(w)
	}

	// figure out how to log out a response
	http.Redirect(w, r, link.ShortLink, http.StatusSeeOther)
}

func returnNotFound(writer http.ResponseWriter) {
	writer.Header().Set("Content-Type", "application/json")
	var buffer bytes.Buffer
	buffer.WriteString(`{Response: "Error", Message: "You must provide a valid URL"}`)
	err := json.NewEncoder(writer).Encode(buffer.String())
	if err != nil {
		return
	}
}
