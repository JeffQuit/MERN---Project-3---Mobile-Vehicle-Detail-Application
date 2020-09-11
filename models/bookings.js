const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  name: { type: String, required: true },
  services: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, default: Date.now },
  time: { type: String, required: true },
  price: { type: String, required: true },
  complete: { type: Boolean, default: false }
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;