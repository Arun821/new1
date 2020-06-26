const express = require('express');
const loginRouter = express.Router();
function login(nav){
    loginRouter.get('/',(req,res)=>{
        res.render("login", {
            nav,   
            title:'Library'
    });
    });
    return loginRouter
}

module.exports = login;