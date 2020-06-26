const mongoose = require('mongoose');// Accessing mongoose pacage
mongoose.connect('mongodb://localhost:27017/booklibrary',{ useNewUrlParser: true ,useUnifiedTopology:true});//connection with mongodb
const Schema = mongoose.Schema;// Defining a schema


const BookSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    image : String
})

var Bookdata = mongoose.model('book',BookSchema);

module.exports = Bookdata;