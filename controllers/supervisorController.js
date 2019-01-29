const db = require("../models");

// Defining methods for the supervisorController
module.exports = {
  findAll: function(req, res) {
    console.log("find all")
    db.Supervisor
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("Hi Hello findby ID ")
    db.Supervisor
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
 },

  create: function(req, res) {
    console.log("This is the new Supervisor body "+JSON.stringify(req.body))
    db.Supervisor
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Supervisor
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Supervisor
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByNew: function(req, res) {
    console.log("New Supervisor Display"+JSON.stringify(req.body));
    db.Supervisor
    //.find({"category":"ADT"})
    .findOne().sort({ "_id": -1 }).limit(1).exec()
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  findByCategory: function(req, res) {
    console.log("This is the body of findbycategory route" + JSON.stringify(req.params.category))
    db.Supervisor
     .find({"category":req.params.category})
     .then(dbmodel => res.json(dbmodel))
     .catch(err => res.status(422).json(err));
  },
  
  findByphnNumber: function(req, res) {
    db.Supervisor
      .find({"phoneNumber" : "8041231234"})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
