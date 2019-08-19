const mongoose = require('mongoose');
const User = require('../models/User');

exports.findUserById = (id, done) => {
  User.findById(id)
    .then((user) => {
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    })
    .catch((err) => console.error(err));
};

exports.createUser = (user, hashPassword) => {
  const {
    first_name: firstName, last_name: lastName, email,
  } = user;
  const newUser = new User({
    _id: new mongoose.Types.ObjectId().toHexString(),
    first_name: firstName,
    last_name: lastName,
    email,
    password: hashPassword,
  });
  return newUser.save();
};

exports.findUserOne = (email) => User.findOne({ email });
