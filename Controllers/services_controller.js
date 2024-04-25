const Service = require("../Models/service_model");
const { use } = require("../Router/auth-router");
const { check, validationResult } = require('express-validator');
const session = require('express-session');

// Services

  
const addService = async(req,res) => {
    try {
        const {name,email,phone,address,breed,service,service2,note,price,userId} = req.body;
        await Service.create({name,email,phone,address,breed,service,service2,note,price,userId});
        console.log({name,email,phone,address,breed,service,service2,note,price,userId});
        res.redirect("/userProfile");
    } catch (error) {
        console.log(error);
    }
};

const viewServices = async(req,res) => {
    try {
        if(req.session.admin)
        {
            const serviceData = await Service.find();
        
            res.render('views/adminSide/serviceInfo',{serviceData});

            serviceData.forEach(element => {
            console.log(element);
            }); 
        }
        else
        {
            res.render("views/adminSide/adminLogin",{err:null,err1:null});
        }
    } catch (error) {
        console.log(error);
    }
};

const serviceDelete = async(req,res) => {
    try {
        if(req.session.admin)
        {
            const adminInfo = req.session.admin;
            console.log(req.params.id);
            await Service.deleteOne({_id: req.params.id});

            const serviceData = await Service.find();
            res.redirect('/serviceInfo');
        }
        else
        {
            res.render("views/adminSide/adminLogin",{err:null,err1:null});
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {addService,viewServices,serviceDelete};