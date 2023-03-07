# mern-todo-server

This is the server side of the MERN Todo App. It is built using Node.js, Express.js, and MySQL.

## Installation 

1. Clone the repo
2. Run `npm install` to install the dependencies
3. Create a `.env` file in the root directory and add the following environment variables:

```
DB_HOST=localhost
DB_USER=bd_user
DB_PASSWORD=secret
DB_NAME=database_name
DB_PORT=3306
```

4. Run `npm run dev` to start the server

## Usage

If the server is running on port 5000, you can access the endpoints at `http://localhost:5000/api/tasks`

To check database health you can use the following endpoint `http://localhost:5000/api/db`


---

### Docker

Run `docker-compose up` to start the server and database

Run `docker-compose down` to stop the server and database

