package models

import (
	"gorm.io/gorm"
)

type Record struct {
	gorm.Model
	ID  int    `json:"id"`
	URL string `json:"url"`
}
