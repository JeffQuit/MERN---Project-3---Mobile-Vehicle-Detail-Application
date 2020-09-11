
const Booking = require("../models/bookings");

// Defining methods for the BookingsController
// module.exports = {
  exports.findAll = function(req, res) {
    Booking
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  exports.update = function(req, res) {
    Booking
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  exports.remove = function(req, res) {
    Booking
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

