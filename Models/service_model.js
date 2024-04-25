const mongoose = require("mongoose");
const Users = require("../Models/user-model");

// Definning Book Service Schema.
const ServiceSchema = new mongoose.Schema({

        name: {
            type: String,
            require: true,
        },

        email: {
            type: String,
            require: true,
        },

        phone: {
            type: String,
            require: true,
        },

        address: {
            type: String,
            require: true,
        },

        breed: {
            type: String,
            require: true,
        },

        service: {
            type: String,
            require: true,
        },

        service2: {
            type: String,
            require: false,
        },

        note: {
            type: String,
            require: true,
        },

        price: {
            type: String,
            require: true,
        },

        userId: {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "User",
        }

});


// define the Model or Collection name.
const Service = new mongoose.model("Service",ServiceSchema);

module.exports = Service;