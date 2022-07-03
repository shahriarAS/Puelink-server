// External Module
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
// Internal Module
const customerAuthRoute = require("./Routes/customerAuth.route.js");
const adminAuthRoute = require("./Routes/adminAuth.route.js");
const linkRoute = require("./Routes/link.route.js");


// Initialize App
const app = express()

// Using Middleware
app.use(express.json())
app.use(cors())
dotenv.config()

// Database Setup
mongoose.connect(process.env.MONGO_DB_CONNECT, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log("MongoDB Started")
})

// Customer Auth Routes
app.use("/auth/customer", customerAuthRoute)

// Customer Auth Routes
app.use("/auth/admin", adminAuthRoute)

// Link Routes
app.use("/link", linkRoute)

module.exports = app