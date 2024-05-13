const mongoose = require("mongoose");
const DB = "mongodb+srv://samarthpansala:Samarth_0645@cluster0.n8jvrme.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const DB = "mongodb://localhost:27017/DogWorld";
 

const connectDb = async() => {

    try {
        mongoose.connect(DB);
        console.log("Database Connected.");
    } catch (error) {
        console.log("Connection Failed.");
    }

};

module.exports = connectDb;
