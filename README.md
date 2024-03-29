# Introduction

A link sharing fullstack application

## User story

1. Store the URL in the database and get the ID of that record inserted.
2. Pass this ID to the client as the API response.
3. Whenever a client loads the shortened URL, it hits our API server.
4. The API server then converts the short URL back to the database ID and fetches the record from the original URL.
5. Finally, the client can use this URL to redirect to the original site.

### Pre-requisites

- Golang 1.4+ installed
- Postgres client (You can either use Docker or install a Postgres client).

### Tools

- Golang
- React.js
- Postgres
- Gorilla Mux
- Docker
- Tailwindcss
- Eslint

### How to run the backend

1 Change directory to `api` folder

```sh
cd api
```

2 Connect to a database

- Install PostgreSQL with docker
  ```
  docker run --name postgres -e POSTGRES_HOST_AUTH_METHOD=trust -v pgdata:/var/lib/postgresql/data -p 5432:5432 -d postgres/postgres:latest
  ```
- Create the database

  ```sh
  docker exec -it postgres psql -U postgres
  postgres=# create database database_name;      # give a name to your local database
   postgres=#
  ```

3 Install the project libraries

```sh
go get
```

4 Copy and replace the .env file

```sh
cp .env.example env
```

5 Start the backend server

```sh
go run main.go
```
