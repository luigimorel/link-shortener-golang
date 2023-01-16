package routes

import (
	"net/http"
	"os"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/morelmiles/link-shortener/controllers"
)

func Routes() {
	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	originsOk := handlers.AllowedOrigins([]string{os.Getenv("ORIGIN_ALLOWED")})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS", "DELETE"})

	router := mux.NewRouter().StrictSlash(true)

	router.HandleFunc("/", controllers.Home).Methods("GET")

	//Admin routes
	router.HandleFunc("/api/v1/links", controllers.GetAllLinks).Methods("GET")
	router.HandleFunc("/api/v1/link/{id}", controllers.GetLinkById).Methods("GET")
	router.HandleFunc("/api/v1/link/{id}", controllers.UpdateLinkById).Methods("PUT")
	router.HandleFunc("/api/v1/link/{id}", controllers.DeleteLinkById).Methods("DELETE")

	// Public routes
	router.HandleFunc("/api/v1/create", controllers.CreateLink).Methods("POST")
	router.HandleFunc("/api/v1/{short_link}", controllers.RedirectLinks).Methods("GET")

	// Server
	http.ListenAndServe(":8080", handlers.CORS(originsOk, headersOk, methodsOk)(router))
}
