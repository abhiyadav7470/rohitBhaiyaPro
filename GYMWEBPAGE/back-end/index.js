const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const Schema = mongoose.Schema;

/////////////controllers///////////////////////////////
const regisCtr = require('./controllers/registration.ctr');
const bodyParser = require('body-parser');
const homepagectr = require('./controllers/homepagectr');

const app = express();//express instanse

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

//////////////////stablish a server//////////////////////
app.listen(5000, ()=>{
    console.log("server is listening on port no. 5000");
});


////////////////////////////////mongoose(connect to DB)/////////
mongoose.connect("mongodb://localhost:27017/gymdb").then(res=>{
    console.log("login db is connect");
}).catch(err=>{console.log(err)});



app.get('/', regisCtr.get);
app.post('/register', regisCtr.create);
app.patch('/login', regisCtr.login);
app.put("/update", regisCtr.update);
 
app.get("/admin", homepagectr.updates);