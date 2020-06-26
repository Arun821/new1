const express = require('express');
const bookRouter = express.Router();
const Bookdata = require('../mongo/bookdata');
function book(nav){

bookRouter.get('/',function (req,res){
    Bookdata.find()
    .then(books=>{
        res.render("book",{
            nav,
            title:'Library',
            books
        });
    });

});

bookRouter.get('/:id',function(req,res){
    const id = req.params.id;
    Bookdata.findOne({_id : id})
    .then(book1=>{
        res.render('book1',{nav,
            title:'Library',book1
        });
    });
   
});

bookRouter.get('/edit/:id',(req,res)=>{
    const bid = req.params.id;
    Bookdata.findOne({_id : bid})
    .then(book1=>{
        res.render('edit',{nav,
            title:'Library',book1
        });
    });
});

bookRouter.post('/update',(req,res)=>{
    const bookid = req.params.id;
    var newbooks = {
        title : req.body.title,
        author : req.body.author,
        genre : req.body.genre,
        image : req.body.image
    }
    
    var edtbook = Bookdata.findOneAndUpdate(req.body.id,newbooks);
    edtbook.exec((err,data)=>{
        if(err) throw error;
        res.redirect('/book');


        
    });

    

});

bookRouter.get('/delete/:id',function (req,res){
    var bid = req.params.id;
    Bookdata.deleteOne({_id : bid})
    .then(_book1=>{
        res.redirect('/book');
    });
    

});

return bookRouter;
}
module.exports = book;

