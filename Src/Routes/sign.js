const express = require('express');
const signRouter = express.Router();
const Userdata = require('../mongo/datas')
function sign(nav){
    signRouter.get('/',(req,res)=>{
        res.render("sign",   
        {nav,
        title:'Library'
    });
    });

    signRouter.get('/userdata',(req,res)=>{
        var datas = {
            firstname:req.query.firstname,
            lastname: req.query.lastname,
            dob: req.query.dob,
            email: req.query.email,
            phone: req.query.phone,
            password: req.query.password

        }
        console.log(datas.firstname);
        var user = Userdata(datas);
        user.save();
        res.redirect('/login');
    });
    return signRouter
}

module.exports = sign;