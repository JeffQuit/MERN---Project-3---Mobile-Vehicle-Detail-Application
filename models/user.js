const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// define the schema for our user model
const userSchema = mongoose.Schema({

    username: {
        type: String,
        min: [3, 'Please enter an email in the correct format'],
        required: [true, 'Please enter a username.']
    },

    password: {
        type: String,
        min: [8, 'Your password must be at least 8 characters large'],
        required: [true, 'Please enter a password.']
    },
});

  // generating a hash
userSchema.methods.generateHash = (password) =>{
    const saltRounds = 10;
      bcrypt.genSalt(saltRounds, function(err, salt){
        bcrypt.hash(password, saltRounds, function(err, hash) {
            console.log(hash)
             return hash
        })
      })
}


// checking if password is valid
userSchema.methods.validPassword = (password) => {
    // Load hash from your password DB.
    bcrypt.compareSync(password, hash, function(err, result) {
    result == true;
});
 
}

const User = mongoose.model("Users", userSchema);

// create the model for users and expose it to our app
module.exports = User;