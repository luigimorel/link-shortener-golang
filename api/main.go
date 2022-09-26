package main

import (
	"github.com/morelmiles/link-shortener/src/config"
	"github.com/morelmiles/link-shortener/src/routes"
)

func main() {
	config.Config()
	routes.Routes()
}
