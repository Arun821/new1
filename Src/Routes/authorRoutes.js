const express = require('express');
const Authordata = require('../mongo/bookdata');
const authorRouter = express.Router();
function author(nav){
    // var authors = [
    //     {
    //     name:"J.R.R.Tolkien",
    //     img:"JRR-Tolkien.jpg",
    //     title:"English writer, poet, philologist, and academic",
    //     nationality:"U.K"
    // },
    // {
    //     name:"Vaikom Muhammad Basheer (Beypore Sultan)",
    //     img:"66a63a04700471dd1413e96a5ced8623.jpg",
    //     title:"Indian independence activist and writer of Malayalam literature",
    //     nationality:"Indian"
    // },
    // {
    //     name:"J K Rowling",
    //     img:"jk-rowling-759.jpg",
    //     title:"Author,Screenwriter",
    //     nationality:"British"
    // }
    // ]
    
    authorRouter.get('/',function(req,res){
        Authordata.find()
        .then(authors=>{
            res.render("author",{
                nav,
                title:'Library',authors
        });
        });
       
    });
    return authorRouter;
}
module.exports = author;