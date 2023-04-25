/* This is a module exporting a Mongoose model for a book with a title, description, and status. The
`use strict` statement enables strict mode in JavaScript, which helps catch common coding mistakes
and makes it easier to write "secure" JavaScript code. The `mongoose` module is imported and used to define a `bookSchema` object with three properties: `title`, `description`, and `status`. The
`BookModel` is created by calling the `mongoose.model()` method with the name of the model and the
schema object. Finally, the `BookModel` is exported as the default export of the module. */
'use strict';

/* `const mongoose = require('mongoose');` is importing the Mongoose module, which is a popular Object
Data Modeling (ODM) library for MongoDB and Node.js. It allows developers to define schemas for
their data and provides a simple API for performing CRUD operations on MongoDB databases. By
assigning the imported module to a constant variable named `mongoose`, the module can be used
throughout the code to create and interact with Mongoose models. */
const mongoose = require('mongoose');

/* `const { Schema } = mongoose;` is using destructuring assignment to extract the `Schema` property
from the `mongoose` module and assign it to a constant variable named `Schema`. This allows us to
use the `Schema` property directly in our code without having to reference it through the `mongoose`
object every time. */
const { Schema } = mongoose;

/* This code is defining a Mongoose schema for a book with three properties: `title`, `description`,
and `status`. Each property is defined with a type and a required flag. The `title` and
`description` properties are defined as strings, while the `status` property is defined as a
boolean. This schema will be used to create a new Mongoose model for books. */
const bookSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  status: {type: Boolean, required: true}
});

/* `const BookModel = mongoose.model('Book', bookSchema);` is creating a Mongoose model for a book with
the name "Book" and the schema defined in `bookSchema`. The `mongoose.model()` method takes two
arguments: the name of the model and the schema object. The resulting `BookModel` can be used to
perform CRUD (Create, Read, Update, Delete) operations on book documents in a MongoDB database. */
const BookModel = mongoose.model('Book', bookSchema);

/* `module.exports = BookModel;` is exporting the `BookModel` as the default export of the module. This
means that when another module imports this module using `require()`, the `BookModel` can be
accessed as the default export of the module. */
module.exports = BookModel;
