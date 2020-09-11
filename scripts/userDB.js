const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below
mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/GerrasDetailingUser"
);
const appointmentSeed = [
    {
      name: "John Doe",
      services: "basic",
      location: "the mall",
      // date: { type: Date, default: Date.now },
      time: "8:00 am",
      price: "$356",
      complete: false 
    },
    {
      name: "boe Doe",
      services: "basic",
      location: "the mall",
      // date: { type: Date, default: Date.now },
      time: "10:00 am",
      price: "$356",
      complete: false 
    },
    {
      name: "HAm Doe",
      services: "basic",
      location: "the mall",
      // date: { type: Date, default: Date.now },
      time: "11:00 am",
      price: "$356",
      complete: false 
    },
    {
      name: "BOO Doe",
      services: "basic",
      location: "the mall",
      // date: { type: Date, default: Date.now },
      time: "12:00 am",
      price: "$356",
      complete: false 
    }
  ]

    db.Bookings
  .remove({})
  .then(() => db.Bookings.collection.insertMany(appointmentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
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