# E-Commerce API

A RESTful API for an E-Commerce system built with Node.js, Express.js, MongoDB, and Mongoose.

---

## Features

- Categories CRUD
- Products CRUD
- Users CRUD
- Orders CRUD
- Shopping Cart
- MongoDB Atlas Database
- Mongoose Models
- Error Handling
- REST API

---

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv

---

## Installation

Clone the repository

```bash
git clone <repository-link>
```

Go to the project folder

```bash
cd e-comers-epi
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Run the server

```bash
npm start
```

---

## Database Models

- User
- Product
- Category
- Order
- Cart

---

## API Endpoints

### Categories

| Method | Endpoint |
|---------|----------|
| GET | /categories |
| GET | /categories/:id |
| POST | /categories |
| PUT | /categories/:id |
| DELETE | /categories/:id |

---

### Products

| Method | Endpoint |
|---------|----------|
| GET | /products |
| GET | /products/:id |
| POST | /products |
| PUT | /products/:id |
| DELETE | /products/:id |

---

### Users

| Method | Endpoint |
|---------|----------|
| GET | /users |
| GET | /users/:id |
| POST | /users |
| PUT | /users/:id |
| DELETE | /users/:id |

---

### Orders

| Method | Endpoint |
|---------|----------|
| GET | /orders |
| GET | /orders/:id |
| POST | /orders |
| PUT | /orders/:id |
| DELETE | /orders/:id |

---

### Cart

| Method | Endpoint |
|---------|----------|
| GET | /cart/:userId |
| POST | /cart |
| PUT | /cart/:userId/:productId |
| DELETE | /cart/:userId/:productId |
| DELETE | /cart/:userId |

---

## Seed Database

Run the following command to insert sample data into MongoDB:

```bash
node seed.js
```

The seed file creates:

- Categories
- Products
- Users
- Orders

---

## Project Structure

```
controllers/
database/
middleware/
models/
routes/
app.js
server.js
seed.js
package.json
README.md
```

---

## Author

Developed by jihad Ahmed.