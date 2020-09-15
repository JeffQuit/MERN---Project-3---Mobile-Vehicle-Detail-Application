const db = require("../models");
// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Quote.find(req.query)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Quote.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    // console.log(req.body.body);
    // console.log('TEST INFO');
    db.Quote.create(req.body.body).then((dbModel) => res.json(dbModel));
  },
  update: function (req, res) {
    db.Quote.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
