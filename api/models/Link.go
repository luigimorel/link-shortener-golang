package models

import (
	"gorm.io/gorm"
)

type Link struct {
	gorm.Model
	ID       uint32 `json:"id" gorm:"primary_key;auto_increment"`
	ShortUrl string `json:"short_url" gorm:"size:100"`
	LongUrl  string `json:"long_url" gorm:"size:100"`
}
