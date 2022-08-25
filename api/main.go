package main

import (
	"database/sql"
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"github.com/morelmiles/link-shortener/src/base62"
	"github.com/morelmiles/link-shortener/src/config"
)

// DB stores the database session imformation. Needs to be initialized once
type DBClient struct {
	db *sql.DB
}

// Model the record struct
type Record struct {
	ID  int    `json:"id"`
	URL string `json:"url"`
}

// TO DO: Separate controllers from models and routes. Give API a structure.

func main() {
	db, err := config.Config()
	if err != nil {
		panic(err)
	}
	dbclient := &DBClient{db: db}
	if err != nil {
		panic(err)
	}

	defer db.Close()
	// Create a new router
	r := mux.NewRouter()
	// Attach an elegant path with handler
	r.HandleFunc("/v1/short/{encoded_string:[a-zA-Z0-9]*}",
		dbclient.GetOriginalURL).Methods("GET")
	r.HandleFunc("/v1/short", dbclient.GenerateShortURL).Methods("POST")
	srv := &http.Server{
		Handler:      r,
		Addr:         "127.0.0.1:8000",
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}
	log.Fatal(srv.ListenAndServe())

}
