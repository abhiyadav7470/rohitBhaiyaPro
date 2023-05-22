const mongoose = require('mongoose');
// const Schema = mongoose.Schema();

var registerschema = new mongoose.Schema({
    email:{
        type: String
    },
    firstName:{
        type: String
    },
    middleName:{
        type: String
    },
    lastName:{
        type: String
    },
    gender:{
        type: String
    },
    mobileno:{
        type: Number
    },
    trainings:{
        type: String
    },
    state:{
        type: String
    },
    password:{
        type: String
    }
},{
    timestamps: true
});


module.exports = mongoose.model("gymdb", registerschema);