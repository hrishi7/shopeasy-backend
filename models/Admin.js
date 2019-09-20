const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    fullName:String,
    email: String,
    mobile: String,
    profileImage: String,
    date:{type :String, default: Date.now}
}) ;

module.exports = mongoose.model('Admin', AdminSchema);