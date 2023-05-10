const express = require("express");
const bodyParser = require("body-parser");
var multer = require("multer");

var multer = multer();
const app = express();
app.use(multer.array());

app.use(bodyParser.json());
app.use(express.static("public"));

let books = [];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/books", (req, res) => {
  res.json(books);
});

app.post("/books", (req, res) => {
  console.log(req.body);
  const { title, author, publishedDate } = req.body;

  if (!title || !author) {
    return res
      .status(400)
      .json({ message: "Title and author fields are required" });
  }

  // Validate publishedDate format if provided
  let dateObj;
  if (publishedDate) {
    dateObj = new Date(publishedDate);
    if (isNaN(dateObj.getTime())) {
      return res
        .status(400)
        .json({ message: "Published date must be in ISO 8601 format" });
    }
  }

  const { v4: uuidv4 } = require("uuid");
  const id = uuidv4();
  const newBook = {
    id,
    title,
    author,
    publishedDate,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const index = books.findIndex((book) => book.id === bookId);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(index, 1);

  return res.status(200).json({ message: "Book successfully deleted" });
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
