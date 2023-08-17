const mongoose = require('mongoose');
const express = require('express');
const Trip = require('../Models/trip.model');
const router = express.Router();
router.get("/", (req, res) => {
    res.send("Welcome to my Plan my trip backend (By Laxya Rupeja)")
})
router.get("/trips", async (req, res) => {
    const { sort, filter } = req.query;
    try {
        if (sort && filter) {
            const trips = await Trip.find({ destination: filter }).sort({ budgetPerPerson: sort })
            res.json({ trips })
        }
        else if (sort) {
            const trips = await Trip.find().sort({ budgetPerPerson: sort })
            res.json({ trips })

        }
        else if (filter) {
            const trips = await Trip.find({ destination: filter });
            res.json({ trips })
        }
        else {
            const trips = await Trip.find()
            res.json({ trips })
        }
    } catch (error) {
        res.status(400).json({ msg: "Something error", error })
    }
})
router.post("/trips", async (req, res) => {
    try {

        const { name, email, destination, noOfTravelers, budgetPerPerson } = req.body;
        const newTrip = Trip({ name, email, destination, noOfTravelers, budgetPerPerson });
        await newTrip.save();
        res.json({ newTrip })
    } catch (error) {
        res.status(400).json({ msg: "Something error", error })

    }
})
router.delete("/trips/:id", async (req, res) => {
    const { id } = req.params
    try {
        const deletedTrip = await Trip.findByIdAndDelete(id);
        res.json({ deletedTrip });
    } catch (error) {
        res.status(400).json({ msg: "Something error", error })

    }
})


module.exports = router