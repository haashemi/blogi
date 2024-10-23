// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.27.0

package postgres

import (
	"github.com/jackc/pgx/v5/pgtype"
)

type Blog struct {
	ID        int64              `json:"id\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0"`
	AuthorID  int64              `json:"authorId\u00a0"`
	Title     string             `json:"title\u00a0\u00a0\u00a0\u00a0\u00a0"`
	Summary   string             `json:"summary\u00a0\u00a0\u00a0"`
	Content   string             `json:"content\u00a0\u00a0\u00a0"`
	CreatedAt pgtype.Timestamptz `json:"createdAt"`
	UpdatedAt pgtype.Timestamptz `json:"updatedAt"`
	RemovedAt pgtype.Timestamptz `json:"removedAt"`
}

type User struct {
	ID        int64              `json:"id"`
	FullName  string             `json:"fullName"`
	Username  string             `json:"username"`
	AboutMe   string             `json:"aboutMe"`
	Password  string             `json:"password"`
	IsAdmin   bool               `json:"isAdmin"`
	IsBanned  bool               `json:"isBanned"`
	CreatedAt pgtype.Timestamptz `json:"createdAt"`
}
