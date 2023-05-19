const express = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const app = express();

app.listen(5000, ()=>{
    console.log("server is listening on port no. 5000");
});


////////////////////////////////mongoose/////////
mongoose.connect("mongodb://localhost:27017/gymdb").then(res=>{
    console.log("db is connect");
}).catch(err=>{console.log(err)});

var registerschema = new Schema({
    gmail:{
        type: String
    },
    password:{
        type: String
    },
    name:{
        type: String
    }
});

mongoose.model("gymdb", registerschema);


app.get('/', (req, res)=>{
    // registerschema.findOne({gmail: req.body.gmail})
     // .then((product) => {
     //     if (product) {
     //         res.status(409);
     //         res.send({error: 'conflict', errorDescription: 'Product already exist with this name'});
     //     } else {
             const productToCreate = new registerschema(req.body);
             productToCreate.save()
                 .then((createdProduct) => {
                     res.status(201);
                     res.send({data: createdProduct});
                 })
                 .catch((error) => {
                     res.status(500);
                     res.send({error});
                 });
        // }
     })
 //     .catch(() => {
 //         res.status(500);
 //         res.send({error});
 //     });
 // })
 
 