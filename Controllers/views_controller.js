const Contact = require("../Models/contact_model");
const bookService = async(req,res) => {
    try {
        var user_id = req.session.user;
        res.render("views/bookService",{user_id});
    } catch (error) {
        console.log(error);
    }
};

const contactUs = async(req,res) => {
    try {
        var user_id = req.session.user;
        res.render("views/contactUs",{user_id});
    } catch (error) {
        console.log(error);
    }
};

const addContactData = async(req,res) => {
    try {
        const {name,email,message} = req.body;
        Contact.create({name,email,message});
        console.log({name,email,message});
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

const services = async(req,res) => {
    try {
        var user_id = req.session.user;
        res.render("views/services",{user_id});
    } catch (error) {
        console.log(error);
    }
};

const aboutUs = async(req,res) => {
    try {
        var user_id = req.session.user;
        res.render("views/aboutUs",{user_id});
    } catch (error) {
        console.log(error);
    }
};
module.exports = {bookService,contactUs,addContactData,services,aboutUs};