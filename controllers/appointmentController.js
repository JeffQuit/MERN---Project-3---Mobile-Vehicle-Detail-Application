
const Bookings = require("../models/bookings");

// Defining methods for the BookingsController
// module.exports = {
  exports.findAll = function(req, res) {
    Bookings
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  exports.update = function(req, res) {
    Bookings
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  exports.remove = function(req, res) {
    Bookings
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

