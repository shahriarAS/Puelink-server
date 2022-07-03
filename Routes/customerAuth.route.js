// External Module
const express = require("express");
// Internal Module
const { userView, userRegister, userLogin, userEmailVerify, userPassChange, userForgotPassword, userRandStringCheck, userResetPassword, userDelete } = require("../Controllers/user.controller.js");
const verifyLoginMiddleware = require("../Middlewares/verifyLogin.middleware.js")


// Router Init
const customerRoute = express.Router()

// All Student Routes

// Customer View
customerRoute.get("/view", verifyLoginMiddleware, userView("customer"))

// Customer Register
customerRoute.post("/register", userRegister("customer"))

// Customer Login
customerRoute.post("/login", userLogin("customer"))

// Customer Email Verify
customerRoute.post("/verify-email/:username/:randString", userEmailVerify("customer"))

// Customer Change Pass
customerRoute.post("/change-pass", verifyLoginMiddleware, userPassChange("customer"))

// Customer Forgot Pass
customerRoute.post("/forgot-pass", userForgotPassword("customer"))

// Customer Random String Check
customerRoute.post("/check-string/:username/:randString", userRandStringCheck("customer"))

// Customer Reset Password
customerRoute.post("/reset-pass/:username/:randString", userResetPassword("customer"))

// Customer Delete Customer
customerRoute.post("/delete-user", verifyLoginMiddleware, userDelete("customer"))

module.exports = customerRoute