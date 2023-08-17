const mongoose = require('mongoose');
const tripSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    destination: { type: String, enum: ["India", "Africa", "Europe", "America"] },
    noOfTravelers: { type: Number, required: true },
    budgetPerPerson: { type: Number, required: true }
})
const Trip = mongoose.model("trip", tripSchema);
module.exports = Trip;