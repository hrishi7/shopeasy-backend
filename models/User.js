const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fullName:String,
    email: String,
    mobile: String,
    profileImage: String,
    homeAddress:String,
    officeAddress: String,
    date:{type :String, default: Date.now}
}) ;

module.exports = mongoose.model('User', UserSchema);