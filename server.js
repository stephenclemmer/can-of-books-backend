'use strict';
console.log('Your Server Is Here!');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

// Route Section

app.get('/', (request, response) => {

  response.send(200).send('This Server is Working');

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
