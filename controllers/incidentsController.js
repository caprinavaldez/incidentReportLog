const mongoose = require("mongoose");
const db = require("../models");
const ObjectId = mongoose.Types.ObjectId;

// Defining methods for the incidentController
module.exports = {
  findAll: function(req, res) {
    db.Incident
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Incident
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  groupByMonth: function(req, res) {
    db.Incident
      .aggregate([
        {
          $match: {
            user: ObjectId(req.params.user_id)
          }
        },
        {
          $group: {
            _id: {
              $dateToString: {
                format: "%m-%Y",
                date: "$date"
              }
            },
            count: { $sum: 1 }
          }
        }
      ])
      .then (dbModel => {
        console.log(dbModel);
        let incidents = [];
        dbModel.forEach((i) => {
          incidents.push({
            x: i._id,
            y: i.count
          });
        })
        res.json(incidents);
      })
      .catch(err => res.status(422).json(err));
  },
  countByCategory: function(req, res) {
    db.Incident
      .aggregate([
        {
          $match: {
            user: ObjectId(req.params.user_id)
          }
        },
        {
          $group: {
            _id: "$category",
            count: { $sum: 1}
          }
        },
        {
          $addFields: {
            key: "$_id",
            value: "$count"
          }
        }
       ])
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  countByIndustry: function(req, res) {
    db.Incident
      .aggregate([
        {
          $lookup: {
            "from": "users",
            "localField": "user",
            "foreignField": "_id",
            "as": "userinfo"
          }
        },
        {
          $unwind: "$userinfo"
        },
        {
          $group: {
            _id: "$userinfo.bizCategory",
            count: { $sum: 1}
          }
        },
        {
          $addFields: {
            key: "$_id",
            value: "$count"
          }
        }
       ])
      .then(dbModel => {
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  averageCostByCategory: function(req, res) {
    db.Incident
      .aggregate([
        {
          $group: {
            _id: "$category",
            average: { $avg: "$cost" }
          }
        },
        {
          $addFields: {
            x: "$_id",
            y: "$average"
          }
        }
       ])
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  averageCostByIndustry: function(req, res) {
    db.Incident
      .aggregate([
        {
          $lookup: {
            "from": "users",
            "localField": "user",
            "foreignField": "_id",
            "as": "userinfo"
          }
        },
        {
          $unwind: "$userinfo"
        },
        {
          $group: {
            _id: "$userinfo.bizCategory",
            average: { $avg: "$cost" }
          }
        },
        {
          $addFields: {
            x: "$_id",
            y: "$average"
          }
        }
       ])
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log(req.body)
    db.Incident
      .create( req.body )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Incident
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Incident
      .findById( req.body )
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};