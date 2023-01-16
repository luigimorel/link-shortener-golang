package main

import (
	"github.com/morelmiles/link-shortener/config"
	"github.com/morelmiles/link-shortener/routes"
)

func main() {
	config.Config()
	routes.Routes()
}
