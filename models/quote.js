const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const quoteSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone: { type: String, required: true },
	address1: { type: String, required: true },
	address2: { type: String, required: false },
	city: { type: String, required: true },
	state: { type: String, required: true },
	zip: { type: Number, required: true },
	makemodel: { type: String, required: true },
	notes: String,
	carlocation: { type: String, required: true },
	servicerequested: { type: String, required: true },
	datesent: { type: Date, default: Date.now },
	daterequested: { type: String, required: true },
	timerequested: { type: String, required: true },
	iscompleted: { type: Boolean, default: false },
});

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;
