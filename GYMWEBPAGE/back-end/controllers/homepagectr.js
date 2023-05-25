const homepagemodel = require('../models/home.page.schema');

const homepagectr = {
    updates: (req, res)=>{
        homepagemodel.find().then(data=>{
            res.status(200);
            res.send(data);
        })
    }
};

module.exports = homepagectr;