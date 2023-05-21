/**
 * The function seeds a MongoDB database with three book documents.
 */
'Use strict';

require ('dotenv').config();

const {default: mongoose} = require ('mongoose');

mongoose.connect('process.env.DB_URL');

const Book = require('./models/book.js');

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

  mongoose.disconnect();
}


seed();
