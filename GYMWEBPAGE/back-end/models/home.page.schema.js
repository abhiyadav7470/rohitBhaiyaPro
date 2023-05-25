const mongoose = require("mongoose");

// const trainer = new mongoose.Schema({
//     name:{
//         type: String
//     },
//     facebookurl:{
//         type: String
//     },
//     tweeterurl:{
//         type: String
//     },
//     instaurl:{
//         type: String
//     }
// })

const homedataobj = new mongoose.Schema({
    firstplan: {
        type: Number
    },
    secondplan: {
        type: Number
    },
    thirdplan: {
        type: Number
    },
    firstphonenumber:{
        type: Number
    },
    secondphonenumber:{
        type: Number
    },
    gmail:{
        type: String
    },
    address:{
        type: String
    },
    facebooklink:{
        type: String
    },
    instalink:{
        type: String
    },
    tweeterlink:{
        type: String
    }

});

module.exports=mongoose.model("gymhomes", homedataobj);