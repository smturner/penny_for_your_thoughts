const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Quote = require('./Quote');

const userSchema = new Schema({
    userName: {
        type: String,
        required: [true, 'User Name is required'],
        unique: [true, 'User name is already taken'],
    },

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'This email address is already registered.'],
        match: [/.+@.+\..+/, 'Must match an email address!']
    },

    password: {
        type: String,
        required: true,
        minLength: [6, 'Password must be at least 6 characters long.']
    },

    quotes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Quote'
        }
    ],

    // Add in a way to have "follows" later:
    follows: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
});

userSchema.pre('save', async function (next) {
    console.log("bcrypt is running")
    if (this.isNew || this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10);
    }
  
    next();
  });

  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };


const User = model('User', userSchema);

module.exports = User;