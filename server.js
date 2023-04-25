/**
 * This is a Node.js server that uses Express and Mongoose to create API routes for a book database,
 * with error handling included.
 * @param request - The request parameter represents the HTTP request that is received by the server
 * from the client. It contains information about the request such as the URL, headers, and body. The
 * server uses this information to process the request and generate a response.
 * @param response - `response` is an object that represents the HTTP response that the server sends
 * back to the client. It contains methods and properties that allow the server to send data back to
 * the client, such as `response.status()` to set the HTTP status code, `response.send()` to send a
 * response body,
 * @param next - `next` is a function that is used to pass control to the next middleware function in
 * the stack. It is typically used to handle errors or to move on to the next function in the chain of
 * middleware functions. If an error occurs in a middleware function, it can call `next` with an
 */

'use strict';
console.log('Your Server Is Here!');

/* `require('dotenv').config();` loads environment variables from a .env file into the process.env
object. This allows sensitive information, such as database credentials, to be stored separately
from the code and not be exposed in the codebase. */
require('dotenv').config();

/* `const Book = require('./models/book.js');` is importing the `Book` model from the `book.js` file
located in the `models` directory. This allows the server to interact with the `Book` collection in
the database using Mongoose methods. */
const Book = require('./models/book.js');

/* `const express = require('express');` is importing the Express framework into the code. Express is a
popular Node.js web application framework that provides a set of features for building web
applications and APIs. It simplifies the process of creating server-side applications by providing a
set of tools and utilities for handling HTTP requests and responses, routing, middleware, and more. */
const express = require('express');

/* `const cors = require('cors');` is importing the `cors` middleware into the code. CORS stands for
Cross-Origin Resource Sharing, which is a security feature implemented by web browsers to prevent
web pages from making requests to a different domain than the one that served the web page. The
`cors` middleware allows the server to specify which domains are allowed to access its resources,
and which HTTP methods are allowed for each resource. This is important for APIs that are accessed
by multiple clients from different domains, as it ensures that only authorized clients can access
the API resources. */
const cors = require('cors');

/* `const app = express();` creates an instance of the Express application. This instance is used to
configure and run the server. It provides a set of methods and properties that allow the server to
handle HTTP requests and responses, define routes, and use middleware functions. */
const app = express();

/* `app.use(cors());` is using the `cors` middleware in the Express application. This middleware allows
the server to specify which domains are allowed to access its resources, and which HTTP methods are
allowed for each resource. It adds the necessary headers to the HTTP response to allow cross-origin
requests from any domain. This is important for APIs that are accessed by multiple clients from
different domains, as it ensures that only authorized clients can access the API resources. */
app.use(cors());

/* `app.use(express.json());` is a middleware function that is used to parse incoming JSON data from
the request body. It is added to the Express application using the `use()` method, which allows
middleware functions to be added to the request processing pipeline. The `express.json()` middleware
function parses the JSON data in the request body and populates the `request.body` property with the
parsed data. This allows the server to access the JSON data in the request body and use it to
process the request. */
app.use(express.json());

/* `const PORT = process.env.PORT || 3002;` is setting the port number for the server to listen on. It
first checks if there is a `PORT` environment variable set, which would be the case if the server is
hosted on a platform like Heroku. If there is no `PORT` environment variable set, it defaults to
port number `3002`. This allows the server to listen on the appropriate port number, whether it is
hosted on a platform or running locally. */
const PORT = process.env.PORT || 3002;

/* `const mongoose = require('mongoose');` is importing the Mongoose library into the code. Mongoose is
a popular Node.js library that provides a set of features for interacting with MongoDB databases. It
simplifies the process of creating database schemas, defining models, and performing CRUD (Create,
Read, Update, Delete) operations on the database. The `mongoose` variable is used to create a
connection to the MongoDB database using the `mongoose.connect()` method. */
const mongoose = require('mongoose');

/* `mongoose.connect(process.env.DB_URL);` is establishing a connection to the MongoDB database using
the URL stored in the `DB_URL` environment variable. The `mongoose.connect()` method is provided by
the Mongoose library and takes a connection string as its argument. The connection string specifies
the location of the MongoDB database and any necessary authentication credentials. By connecting to
the database, the server can perform CRUD (Create, Read, Update, Delete) operations on the `Book`
collection using Mongoose methods. */
mongoose.connect(process.env.DB_URL);

/* `const db = mongoose.connection;` is creating a variable `db` that stores a reference to the
Mongoose connection object. This connection object represents the connection to the MongoDB database
and provides methods and events for interacting with the database. The `db` variable is used to
listen for events on the connection object, such as the `error` and `open` events, which are used to
handle errors and log messages when the connection is established. */
const db = mongoose.connection;

/* `db.on('error', console.error.bind(console, 'connection error:'));` is setting up an event listener
on the Mongoose connection object `db` for the `error` event. If an error occurs while connecting to
the MongoDB database, the `error` event will be emitted and the callback function
`console.error.bind(console, 'connection error:')` will be executed. This function logs the error
message to the console with the prefix `'connection error:'`. This allows the server to handle
errors that occur during the database connection process and log them for debugging purposes. */
db.on('error', console.error.bind(console, 'connection error:'));

/* `db.once('open', function () { console.log('Mongoose is connected'); });` is setting up an event
listener on the Mongoose connection object `db` for the `open` event. When the connection to the
MongoDB database is successfully established, the `open` event will be emitted and the callback
function `console.log('Mongoose is connected')` will be executed. This function logs the message
`'Mongoose is connected'` to the console, indicating that the server has successfully connected to
the database. This allows the server to handle the successful connection to the database and log a
message for debugging purposes. */
db.once('open', function () {
  console.log('Mongoose is connected');
});


// Route Section

/* `app.get('/', (request, response) => {
  response.status(200).send('This Server is Working');
});` is defining a route for the root URL of the server (`'/'`). When a GET request is made to the
root URL, the server will respond with a status code of `200` (indicating success) and a message of
`'This Server is Working'`. This is a simple way to test if the server is running and responding to
requests. */
app.get('/', (request, response) => {
  response.status(200).send('This Server is Working');
});

/* `app.get('/books', getBooks);` is defining a route for the `/books` URL of the server using the HTTP
GET method. When a GET request is made to the `/books` URL, the `getBooks` function will be
executed. This function retrieves all the books from the database using the `Book.find()` method and
sends the results back to the client in the response body with a status code of `200` (indicating
success). If an error occurs during the execution of the `getBooks` function, it calls the `next`
function with the error object to pass control to the next middleware function in the stack. */
app.get('/books', getBooks);

async function getBooks(request, response, next) {
  try {
    let results = await Book.find();
    response.status(200).send(results);
  } catch (error) {
    next(error);
  }
}

/* `app.post('/books', postBook);` is defining a route for the `/books` URL of the server using the
HTTP POST method. When a POST request is made to the `/books` URL, the `postBook` function will be
executed. This function creates a new book in the database using data from the request body sent by
the client and sends a response with the newly created book. */
app.post('/books', postBook);
/**
 * This function creates a new book in a database using data from a POST request and sends a response
 * with the newly created book.
 * @param request - The request parameter is an object that contains information about the incoming
 * HTTP request, such as the request headers, request body, request method, and request URL. In this
 * case, it is used to retrieve the request body data sent by the client.
 * @param response - The `response` parameter in the `postBook` function is an object that represents
 * the HTTP response that will be sent back to the client. It contains methods and properties that
 * allow you to set the status code, headers, and body of the response. In this case, the `response`
 * object
 * @param next - `next` is a function that is used to pass control to the next middleware function in
 * the stack. It is typically used to handle errors or to move on to the next function in the chain of
 * middleware functions. If an error occurs in the current middleware function, calling `next` with the
 * error
 */
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

/* `app.delete('/books/:bookid', deleteBook);` is defining a route for the `/books/:bookid` URL of the
server using the HTTP DELETE method. When a DELETE request is made to the `/books/:bookid` URL, the
`deleteBook` function will be executed. This function deletes the book with the specified `bookid`
from the database using the `Book.findByIdAndDelete()` method and sends a response with a status
code of `204` (indicating success) and a message of `'success!'`. If an error occurs during the
execution of the `deleteBook` function, it calls the `next` function with the error object to pass
control to the next middleware function in the stack. */
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

/* The code is defining a route for a PUT request to update a specific book with the given
bookid. When a PUT request is made to this route, it will call the function putBooks to handle the
request. */
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
/* The above code is defining a route handler for all HTTP GET requests that matches any URL path. The
handler sends a response with a 500 status code and a JSON object containing an error message. This
code is used to handle any unexpected errors that may occur in the application. */
app.get('*', (request, response) => {
  response.status(500).send('"error": "Something went wrong"');
});

// Catchall (Needs to be at the bottom)

/* The code is defining an error handling middleware function for an Express application in
JavaScript. This middleware function will be executed whenever an error occurs in any of the routes
or middleware functions that are defined after it in the application. */
app.use((error, request, response) => {
  response.status(500).send(error.message);
});

/* The code is starting a server and listening for incoming requests on a specified port. When a
request is received, the server will respond with the appropriate data. The console.log statement is
simply logging a message to the console indicating that the server is listening on the specified
port. */
app.listen(PORT, () => console.log(`listening on ${PORT}`));
