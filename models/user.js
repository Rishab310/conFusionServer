const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const User = new Schema({
  firstname : {
    type: String,
    default: ''
  },
  lastname : {
    type: String,
    default: ''
  },
  admin: {
    type: Boolean,
    default: false
  }
});

User.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", User);





// Before passports were added

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const User = new Schema({
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   admin: {
//     type: Boolean,
//     default: false
//   }
// });


// module.exports = mongoose.model("User", User);
