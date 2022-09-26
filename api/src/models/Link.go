package models

import (
	"gorm.io/gorm"
)

type Link struct {
	gorm.Model
	ID           uint32 `json:"id" gorm:"primaryKey"`
	Redirect     string `json:"redirect" gorm:"not null"`
	ShortLink    string `json:"short_link" gorm:"not null"`
	RandomString string `json:"random_string"`
	LongLink     string `json:"long_link" gorm:"not null"`
}
