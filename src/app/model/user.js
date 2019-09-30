var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
  name: { type: String },
  email: {  type: String },
 birthday: {
   type: Number
 },
  zipcode: {
    type: Number
  },
}, {
  collection: 'users'
});

module.exports = mongoose.model('User', User);
