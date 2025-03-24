## Node.js + MongoDB Atlas User API

This project is a simple Express API that connects to MongoDB Atlas to retrieve user data by ID. It only returns users over the age of 21 and gracefully handles invalid ObjectIds.

### Endpoint

`GET /users/:id`

Returns user data in JSON if the user is over 21. Returns 404 if not found or underage.

### Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

### How to Run

1. Clone the repo
2. Create a `.env` with your Atlas connection string:
