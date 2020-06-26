const express = require('express');
const app = new express();

const nav = [
    {link:'/book',name:'Books'},
    {link:'/author',name:'Authors'},
    {link:'/admin',name:'Add Book'},
    {link:'/sign',name:'Sign Up'},
    {link:'/login',name:'Login'}
  
];
const bookRouter = require('./Src/Routes/bookRoutes')(nav);
const addRouter = require('./Src/Routes/add')(nav);
const authorRouter = require('./Src/Routes/authorRoutes')(nav);
const loginRouter = require('./Src/Routes/login')(nav);
const signRouter = require('./Src/Routes/sign')(nav);
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/View');
app.use('/book',bookRouter);
app.use('/author',authorRouter);
app.use('/sign',signRouter);
app.use('/login',loginRouter);
app.use('/admin',addRouter);
app.get('/',function(req,res){
    res.render("index",{nav,
    title:'Library'});
});

app.listen(4000);