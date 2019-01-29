const db = require('../models');

// Defining methods for the residentController
module.exports = {
  findAll: function(req, res) {
    db.Resident.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Resident.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log('This is the new resident body ' + JSON.stringify(req.body));
    db.Resident.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Resident.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Resident.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByNew: function(req, res) {
    console.log('New Resident Display');
    db.Resident.findOne()
      .sort({ _id: -1 }).limit(1).exec()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByCategory: function(req, res) {
    //console.log("This is the body of findbycategory route" + JSON.stringify(req.params.category))
    db.Supervisor.find({ category: req.params.category })
      .then(dbmodel => res.json(dbmodel))
      .catch(err => res.status(422).json(err));
  },
};
