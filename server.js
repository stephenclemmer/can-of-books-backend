'use strict';
console.log('Your Server Is Here!');
require('dotenv').config();

const Book = require('./models/book.js');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3002;

const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Mongoose is connected');
});


// Route Section

app.get('/', (request, response) => {
  response.status(200).send('This Server is Working');
});

app.get('/books', getBooks);

async function getBooks(request, response, next) {
  try {
    let results = await Book.find();
    response.status(200).send(results);
  } catch (error) {
    next(error);
  }
}

app.post('/books', postBook);

async function postBook(request, response, next) {
  console.log(request.body);
 /* This code block is creating a new book in the database using data from a POST request and sending a
 response with the newly created book. */
  try {
    const newBook = await Book.create(request.body);
    response.status(201).send(newBook);
  } catch (error) {
    next(error);
  }
}

app.delete('/books/:bookid', deleteBook);

async function deleteBook(request, response, next) {
  const id = request.params.bookid;
  console.log(id);
  try {
    await Book.findByIdAndDelete(id);
    response.status(204).send('success!');
  } catch (error) {
    next(error);
  }
}

app.put('/books/:bookid', putBooks);

async function putBooks(request, response, next) {
  let id = request.params.bookid;

  try {
    let data = request.body;

    const updateBook = await Book.findByIdAndUpdate(id, data, {
      new: true, overwrite: true
    });
    response.status(201).send(updateBook);

  } catch (error) {
    next(error);
  }
}

// Error message section
app.get('*', (request, response) => {
  response.status(500).send('"error": "Something went wrong"');
});

// Catchall (Needs to be at the bottom)
app.use((error, request, response) => {
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
