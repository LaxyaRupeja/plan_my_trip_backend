const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const router = require('./Routes/server.routes');
app.use(express.json())
app.use(cors())
app.use("/", router)
app.listen(8080, async () => {
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Server started on PORT 8080")
})
