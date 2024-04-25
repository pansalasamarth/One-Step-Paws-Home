const User = require("../Models/user-model");
const Service = require("../Models/service_model");
const Contact = require("../Models/contact_model");
const { use } = require("../Router/auth-router");
const { check, validationResult } = require('express-validator');
const session = require('express-session');

const index = async(req,res) => {
    try {
        var user_id = req.session.user;
        res.render("views/index",{user_id});
    } catch (error) {
        console.log(error);
    }
};

const login = async(req,res) => {
    try {
        res.render("views/login",{err:null,err1:null});
    } catch (error) {
        console.log(error);
    }
};

const verifylogin = async(req,res) => {
    try {
         
        const {loginEmail, loginPassword} = req.body;
        const emailExist = await User.findOne({email: loginEmail });    

       
        if(emailExist)
        {
            if(loginPassword == emailExist.password)
            {
                req.session.user = emailExist;
                var user_id = req.session.user;
                console.log(user_id); 
                res.render("views/index",{user_id});
            }
            else
            {
                res.render("views/login",{err1:"Incorrect Password",err:null});
            }
            console.log(loginEmail);
            console.log(loginPassword);
        }
        else
        {
            res.render("views/login",{err:"Not valid Email",err1:null});
        }
    } catch (error) {
        console.log(error);
    }
};

const logout = async(req,res) => {
    try {
        console.log("This is Logout");
        console.log(req.session.user);

        if(req.session.user)
        {
            req.session.destroy();
            console.log("Destroyed Session");
            res.render("views/index",{user_id:null});
        }
        else
        {
            res.render("views/index",{user_id:null});
        }
    } catch (error) {
        
    }
}

const register = async(req,res) => {
    try {
        res.render("views/register",{errors:null});
    } catch (error) {
        console.log(error);
    }
};

const checkUser = async(req,res) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
          // If there are validation errors, render the form with errors
          console.log(errors);
          res.render('views/register', {errors : errors.array() });
            
        }
        else
        {
            const {username,email,phone,password} = req.body;
          
            // Register Logic.
            const userExist = await User.findOne({email});

            if(userExist)
            {
                console.log(email);
            }

            await User.create({username,email,phone,password});
            
            console.log({username,email,phone,password});      

            res.render("views/login",{err:null,err1:null});
        }
       
    } catch (error) {
        console.log(error);
    }

};

const admin = async(req,res) => {
    try {
        res.render("views/adminSide/adminLogin",{err:null,err1:null});
    } catch (error) {
        console.log(error);
    }
};

const verifyadmin = async(req,res) => {
    try {
        const {AdminEmail, AdminPassword} = req.body;
        const emailExist = await User.findOne({email: AdminEmail });

    
        console.log(emailExist);

        if(emailExist)
        {
            if(emailExist.isAdmin == true)
            {  
                if(AdminEmail == emailExist.email && AdminPassword == emailExist.password)
                {
                    req.session.admin = emailExist;
                    adminInfo = req.session.admin;
                    res.render('views/adminSide/adminIndex',{adminInfo});
                }
            }
            else
            {
                console.log(error);
            }
        }
        else
        {
            res.send("Email not Found");
        }
        res.render("views/adminSide/adminLogin",{err:null,err1:null});
    } catch (error) {
        console.log(error);
    }
};

const adminLogout = async(req,res) => {
    try {
        console.log("This is Logout");
        console.log(req.session.admin);

        if(req.session.admin)
        {
            req.session.destroy();
            console.log("Destroyed Session");
            res.render("views/adminSide/adminLogin",{err:null,err1:null});
        }
        else
        {
            res.render("views/adminSide/adminLogin",{err:null,err1:null});
        }
    } catch (error) {
        console.log(error);
    }
};

const adminIndex = async(req,res) => {
    try {
         
        if(req.session.admin){
            // console.log(req.session.admin);
            res.render('views/adminSide/adminIndex'); 
        }   
        else
        {
            res.render("views/adminSide/adminLogin",{err:null,err1:null});
        }    
    } catch (error) {
        console.log(error);
    }
};

const userInfo = async(req,res) => {
    try {
        console.log(req.session.admin)
        if(req.session.admin){
            const adminInfo = req.session.admin;
            var users = await User.find();
            // .populate({path:'users',strictPopulate: false}).exec();
            // res.send(users);
        
            res.render('views/adminSide/usersInfo',{users,adminInfo});

            // records.forEach(element => {
            //     console.log(element.userId.username);
            // });
        }
        else
        {
            res.render("views/adminSide/adminLogin",{err:null,err1:null});
        }
    } catch (error) {
        console.log(error);
    }
};

const viewContactData = async(req,res) => {
    try {
        if(req.session.admin){
            const adminInfo = req.session.admin;
            var contact = await Contact.find();
            res.render('views/adminSide/contactInfo',{contact,adminInfo});

            // records.forEach(element => {
            //     console.log(element.userId.username);
            // });
        }
        else
        {
            res.render("views/adminSide/adminLogin",{err:null,err1:null});
        }
    } catch (error) {
        console.log(error);
    }
};
const userProfile = async(req,res) => {
    try {
        if(req.session.user){
            var user_id = req.session.user;
            var i = 1;
            console.log(user_id._id);
            const services = await Service.find({userId: user_id._id});
            
            services.forEach(element => {
                console.log(element);
            });
            res.render('views/userProfile',{services,user_id,i});
        }
        else
        {
            res.send("error");
        }   

    } catch (error) {
        console.log(error);
    }
};

// Header-Footer for trial purpose.

const header = async(req,res) => {
    try {
        res.render("views/partials/header");
    } catch (error) {
        console.log(error);
    }
};

const footer = async(req,res) => {
    try {
        res.render("views/partials/footer");
    } catch (error) {
        console.log(error);
    }
};


module.exports = {index,login,verifylogin,logout,checkUser,register,admin,verifyadmin,adminLogout,adminIndex,userInfo,viewContactData,userProfile,header,footer};