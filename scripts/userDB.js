<<<<<<< HEAD
const mongoose = require("mongoose");
const db = require("../models/bookings");

// This file empties the Books collection and inserts the books below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/GerrasDetailingUser"
);
const appointmentSeed = [
    {
      name: "John Doe",
      location: "the mall",
      date: { type: Date, default: Date.now },
      time: "8:00 am",
      price: "$356",
      phone: "2242452",
      email: "asgags@afsvasg.com",
      complete: false 
    },
    {
      name: "boe Doe",
      location: "the mall",
      date: { type: Date, default: Date.now },
      time: "10:00 am",
      price: "$356",
      phone: "2242452",
      email: "asgags@afsvasg.com",
      complete: false 
    },
    {
      name: "HAm Doe",
      location: "the mall",
      date: { type: Date, default: Date.now },
      time: "11:00 am",
      price: "$356",     
       phone: "2242452",
       email: "asgags@afsvasg.com",
      complete: false 
    },
    {
      name: "BOO Doe",
      location: "the mall",
      date: { type: Date, default: Date.now },
      time: "12:00 am",
      price: "$356",
      phone: "2242452",
      email: "asgags@afsvasg.com",
      complete: false 
    }
  ]

    db
  .remove({})
  .then(() => db.collection.insertMany(appointmentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
=======
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
>>>>>>> master
// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/GerrasDetailingUser"
// );
// const userSeed = [
//     {
//         username: "test@test.com",
//         password: "testings"
//     }]

//     db.User
//   .remove({})
//   .then(() => db.User.collection.insertMany(userSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });
