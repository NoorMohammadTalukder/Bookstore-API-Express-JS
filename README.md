# Bookstore API

This is a simple Node.js and Express.js application for a bookstore API that allows you to add, view and delete books. 

The API uses the following middleware:
- **body-parser** for parsing JSON request bodies.
- **multer** for handling file uploads.
- **express.static** for serving static files.

## Prerequisites
- Node.js and npm installed on your machine.

## How to use
1. Clone the repository to your local machine using `git clone`.
2. Go to root directory named `book-collection`
3. Run `npm install` to install the dependencies.
4. Run `node index.js` to start the server.
5. Navigate to `http://localhost:8000` in your web browser to view the application.

## API Endpoints

### GET /
- Returns the homepage of the application.

### GET /books
- Returns a JSON array of all the books.

### POST /books
- Adds a new book to the collection.
- Request body must include `title` and `author` fields.
- Optional `publishedDate` field must be in ISO 8601 format.
- Returns the new book object with a generated `id` field.

### DELETE /books/:id
- Deletes the book with the specified `id`.
- Returns a success message if the book is successfully deleted.

## Technologies Used
- Node.js
- Express.js
- body-parser
- multer
- uuid

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
