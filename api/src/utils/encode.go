package utils

import (
	"math/rand"
)

const baseText = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

var runes = []rune(baseText)

func RandomString(size int) string {
	str := make([]rune, size)

	for i := range str {
		str[i] = runes[rand.Intn(len(runes))]
	}
	return string(str)
}
