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
  try {
    const newBook = await Book.create(request.body);
    response.status(201).send(newBook);
  } catch (error){
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
