const mongoose = require('mongoose');

const bookModel = new mongoose.Schema( {
    name:String,
    author_id:{ type:Number ,required:true},
    price: Number,
    ratings: Number,
} );


module.exports = mongoose.model('Book', bookModel); //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
