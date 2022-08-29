'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {type: String, require: true},
  description: {type: String, required: true},
  status: {type: Boolean, required: true}
});

const BookModel = mongoose.model('Book', bookSchema);

module.exports = BookModel;
