/**
 * The function seeds a MongoDB database with three book documents.
 */
'Use strict';

/* `require ('dotenv').config();` loads the environment variables from a .env file into the process.env
object, making them available to the application. This is useful for storing sensitive information
like database URLs or API keys. */
require ('dotenv').config();

/* `const {default: mongoose} = require ('mongoose');` is importing the `mongoose` library and
assigning it to the `mongoose` variable using destructuring assignment. The `default` property of
the `mongoose` module is being assigned to the `mongoose` variable. This syntax is used when the
module being imported has a default export. */
const {default: mongoose} = require ('mongoose');

/* `mongoose.connect(process.env.DB_URL);` is connecting to a MongoDB database using the URL stored in
the `DB_URL` environment variable. This line of code establishes a connection to the database and
allows the application to interact with it. */
mongoose.connect(process.env.DB_URL);

/* `const Book = require('./models/book.js');` is importing the `Book` model from the `book.js` file
located in the `models` directory. This allows the `seed()` function to create new `Book` documents
in the MongoDB database using the `Book` model. */
const Book = require('./models/book.js');

/* The `async function seed()` is creating a new `Book` document in the MongoDB database using the
`Book.create()` method. The `await` keyword is used to wait for the `Book.create()` method to
complete before moving on to the next line of code. The `Book.create()` method takes an object with
three properties: `title`, `description`, and `status`, and creates a new `Book` document with those
values. In this case, the `title` is set to 'Slaughterhouse Five', the `description` is set to 'War
novel', and the `status` is set to `true`. */
async function seed() {
  await Book.create({
    title: 'Slaughterhouse Five',
    description: 'War novel',
    status: true
  });


  console.log('Slaughterhouse Five was created.');


  await Book.create({
    title: 'The Hitchhiker\'s Guide to the Galaxy',
    description: 'Science Fiction',
    status: true
  });


  console.log('The Hitchhiker\'s Guide to the Galaxy was created.');


  await Book.create({
    title: 'The Art of the Deal',
    description: 'Fiction',
    status: false
  });


  console.log('The Art of the Deal was ghost-written.');


  /* `mongoose.disconnect();` is disconnecting from the MongoDB database. This line of code is called
  at the end of the `seed()` function to close the connection to the database after the new `Book`
  documents have been created. This is important to prevent memory leaks and ensure that the
  application is not holding onto unnecessary resources. */
  mongoose.disconnect();
}

/* `seed();` is calling the `seed()` function, which creates three new `Book` documents in a MongoDB
database using the `Book.create()` method. The `await` keyword is used to wait for each
`Book.create()` method to complete before moving on to the next one. After all three `Book`
documents have been created, the function disconnects from the MongoDB database using
`mongoose.disconnect()`. */
seed();
