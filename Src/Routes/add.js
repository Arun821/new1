const express = require('express');
const addRouter = express.Router();
const Bookdata = require('../mongo/bookdata');
function add(nav){
    addRouter.get('/',(req,res)=>{
        res.render("add",   
        {nav,
        title:'Library'
    });
    });

    
    addRouter.post('/addbook',(req,res)=>{
        var newbooks = {
            title : req.body.title,
            author : req.body.author,
            genre : req.body.genre,
            image : req.body.image,
            discription : req.body.discription,
            nationality : req.body.nationality,
            auimage : req.body.auimage
        }
        var book = Bookdata(newbooks);
        book.save();
        res.redirect('/book');
    });
     

    return addRouter;
}

module.exports = add; 
