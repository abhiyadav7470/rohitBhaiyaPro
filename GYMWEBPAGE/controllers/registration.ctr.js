const regisModel = require('../models/register.schema');

const regisCtr = {
    get: (req, res)=>{
        regisModel.find().then((user)=>{
                res.status(200);
                res.send({data: user})
            }
        ).catch((error)=>{
            res.status(500);
            res.send({data: error});
        })
    },


    create: (req,res)=>{
        regisModel.findOne({email: req.body.email}).then((user)=>{
            if(user){
                res.status(409);
                res.send({error: 'conflict', errorDiscription: 'email is already register'});
            }
            else{
                const userCreated = new regisModel(req.body);
                userCreated.save().then((user)=>{
                    res.send(user.name + "is succesfully register");
                }).catch(error=>{
                    res.send("something went wrong");
                })
            }
        }).catch(err=>{
            res.status(500);
            res.send({error: err});
        });        
    },
    login: (req,res)=>{
        regisModel.find({email: req.body.email}, {password: req.body.password}).then((user)=>{
            res.status(409);
            res.send("succesfully login");
        }).catch(()=>{
            res.send("something went wrong");
        })
    }    
    };


module.exports = regisCtr;