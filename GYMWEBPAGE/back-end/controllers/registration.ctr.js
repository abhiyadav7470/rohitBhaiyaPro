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
                res.send({error: 'conflict', message: 'email is already register'});
            }
            else{
                const userCreated = new regisModel(req.body);
                userCreated.save().then((user)=>{
                    res.send({message: req.body.firstName + " is succesfully register"});
                }).catch(error=>{
                    res.send("something went wrong");
                })
            }
        }).catch(err=>{
            res.status(500);
            res.send({error: err});
        });        
    },
    update: (req, res)=>{
        regisModel.findOne({email: req.body.email}).then((user)=>{
            regisModel.findByIdAndUpdate(user._id, {$set: req.body},{new: true}).then((user)=>{
                res.status(200);
                res.send({data: user});
            }).catch(err=>{
                res.status(500);
                res.send("no record found");
            })
        })
       
    },


    login: (req,res)=>{
        regisModel.findOne({email: req.body.email}).then((user)=>{
            if(req.body.password == user.password){
                res.status(200);
                res.send({message: "succesfully login"});
            }else{
                res.send({message: "password is incorrect"});
            }
        }).catch(()=>{
            res.send({message:"user is not register yet"});
        })
    }    
    };


module.exports = regisCtr;