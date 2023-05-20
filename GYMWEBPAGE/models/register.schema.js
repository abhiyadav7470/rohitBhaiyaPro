const mongoose = require('mongoose');
// const Schema = mongoose.Schema();

var registerschema = new mongoose.Schema({
    gmail:{
        type: String
    },
    password:{
        type: String
    },
    name:{
        type: String
    }
},{
    timestamps: true
});


module.exports = mongoose.model("gymdb", registerschema);