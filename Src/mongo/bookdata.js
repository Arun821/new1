const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booklibrary',{ useNewUrlParser: true ,useUnifiedTopology:true});//connection with mongodb
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author : String,
    genre : String,
    image : String,
    name : String,
    discription : String,
    nationality : String,
    auimage : String
});


var Bookdata = mongoose.model('book',BookSchema);


module.exports = Bookdata;
