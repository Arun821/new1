const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/booklibrary',{ useNewUrlParser: true ,useUnifiedTopology: true});
const Schema = mongoose.Schema;

const SignSchema = new Schema({
    firstname: String,
    lastname: String,
    dob: Date,
    email: String,
    phone: Number,
    password: String
});

var Userdata = mongoose.model('user',SignSchema);
module.exports = Userdata;
