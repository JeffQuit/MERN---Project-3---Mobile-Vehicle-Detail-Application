
const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/GerrasDetailingUser');
const quoteSeed = [
	{
		name: 'Jeff Quittman',
		phone: '818 555-5559',
		email: 'JeffQuittman@Example.com',
		address1: '123 Test Lane',
		address2: 'Apt 4',
		city: 'Los Angeles ',
		state: 'CA',
		zip: '98765',
		makemodel: 'Honda Civic',
		notes: 'Had loose fender, paint is chipping',
		carlocation: 'Behind the shed',
		servicerequested: 'all-In-One Service',
		datereq: '2020-09-09',
		timereq: '12:45',
		iscompleted: false,
	},
	{
		name: 'Mike Cool',
		phone: '555 555 5512',
		email: 'Mike@Test.com',
		address1: '876 Grey Road',
		address2: '',
		city: 'Orange',
		state: 'CA',
		zip: '90052',
		makemodel: 'Acura Integra',
		notes: '',
		carlocation: 'In Covered Garage',
		servicerequested: 'delux wash',
		datereq: '2020-10-04',
		timereq: '11:45',
		iscompleted: false,
	},
	{
		name: 'Karen Smith',
		phone: '555-555-5522',
		email: 'Karen@example.com',
		address1: '2718 Greentree road',
		address2: '',
		city: 'Venice',
		state: 'CA',
		zip: '92012',
		makemodel: 'Ford Escort',
		notes: '',
		carlocation: 'Driveway',
		servicerequested: 'basic cleaning',
		datereq: '2020-09-08',
		timereq: '10:15',
		iscompleted: true,
	},
];

db.Quote.remove({})
	.then(() => db.Quote.collection.insertMany(quoteSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
