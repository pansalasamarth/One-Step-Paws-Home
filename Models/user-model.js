const mongoose = require("mongoose");

// Definning User Schema.
const userSchema = new mongoose.Schema({
        username: {
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

        password: {
            type: String,
            require: true,
        },

        isAdmin: {
            type: Boolean,
            default: false,
        }
});


// define the Model or Collection name.
const User = new mongoose.model("User",userSchema);

module.exports = User;