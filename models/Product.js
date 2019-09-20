const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title:String,
    productMainImage: String,
    productSubImages: [String],
    discountedPrice: String,
    originalPrice:String,
    discount: String,
    availablilityCount: String,
    hightlights: [String],
    description: String,
    packageContain: String,
    BatteryCapacity: String,
    Warrenty: String,
    date:{type :String, default: Date.now}
}) ;

module.exports = mongoose.model('Product', ProductSchema);