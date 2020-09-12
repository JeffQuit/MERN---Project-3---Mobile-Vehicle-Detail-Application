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
userSchema.methods.generateHash = function (password) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt, null);
// Store hash in your password DB.
    console.log(hash)
    return hash
};

// checking if password is valid
userSchema.methods.verifyPassword = function(password){
    // Load hash from your password DB.
    const hash = this.password
    // console.log(`username password`, this)

    // console.log(`password entered by user`, password)
    return bcrypt.compareSync(password, hash);
};

const User = mongoose.model("users", userSchema);

// create the model for users and expose it to our app
module.exports = User;