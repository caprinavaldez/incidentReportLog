const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.User   
        .find(req.query)
        .sort({ date: -1 }) 
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
     if (req.user && req.user.id) {
        db.User
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
        } else {
            res.send(401);
        }
    },
    groupByIndustry: function(req, res) {
        db.User
          .aggregate([
            {
              $group: {
                _id: "$coType",
                count: { $sum: 1}
              }
            }
           ])
          .then(dbModel => {
            console.log(dbModel);
            let incidents = [];
            dbModel.forEach((i) => {
              incidents.push({
                key: i._id,
                value: i.count
              });
            })
            res.json(incidents);
          })
          .catch(err => res.status(422).json(err));
    },
    groupByCategory: function(req, res) {
        db.User
          .aggregate([
            {
              $group: {
                _id: "$bizCategory",
                count: { $sum: 1}
              }
            }
           ])
          .then(dbModel => {
            console.log(dbModel);
            let incidents = [];
            dbModel.forEach((i) => {
              incidents.push({
                key: i._id,
                value: i.count
              });
            })
            res.json(incidents);
          })
          .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        // if (req.user && req.user.id) {
            console.log(req);
            db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
        // } else {
        //     res.send(401);
        // } 
    },
    update: function(req, res) {
        db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
        db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },

};

