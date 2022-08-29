'use strict';
console.log('Your Server Is Here!');

require('dotenv').config();

const Book = require('./models/book.js');

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

const mongoose = require ('mongoose');
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){

  console.log('Mongoose is connected');
});


// Route Section

app.get('/', (request, response) => {

  response.status(200).send('This Server is Working');

});



// Error message section
app.get('*', (request, response) => {
  response.status(500).send('"error": "Something went wrong"');
});

// Catchall (Needs to be at the bottom)
app.use((error, request, response) => {
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
