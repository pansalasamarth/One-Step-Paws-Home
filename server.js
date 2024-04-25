const express = require("express");
const app = express();
const router = require("./Router/auth-router");
const connectDb = require("./Utils/db")
const path = require("path"); 
const { body } = require("express-validator");
const bodyParser = require("body-parser");
const session = require('express-session');
const { name } = require("ejs");

const tmpPath =  path.join(__dirname,'./public'); 

app.use(express.static('public'));

app.set("view engine","ejs");

app.set("views", tmpPath);

app.use(express.urlencoded({extended: true}));

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());

app.use(session({
    secret: 'my-secret',  // a secret string used to sign the session ID cookie
    resave: false,  // don't save session if unmodified
    saveUninitialized: false  // don't create session until something stored
  }));


app.use("/", router);

const PORT = 4000;

connectDb().then(() => {
    app.listen (PORT, () => {
        console.log(`Server is running at Port: ${PORT}`);
    })
});
