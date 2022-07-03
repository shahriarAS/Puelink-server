// External Module
const express = require("express");
// Internal Module
const { userView, userRegister, userLogin, userEmailVerify, userPassChange, userForgotPassword, userRandStringCheck, userResetPassword, userDelete } = require("../Controllers/user.controller.js");
const verifyLoginMiddleware = require("../Middlewares/verifyLogin.middleware.js")


// Router Init
const adminRoute = express.Router()

// All Student Routes

// Admin View
adminRoute.get("/view", verifyLoginMiddleware, userView("admin"))

// Admin Register
adminRoute.post("/register", userRegister("admin"))

// Admin Login
adminRoute.post("/login", userLogin("admin"))

// Admin Email Verify
adminRoute.post("/verify-email/:username/:randString", userEmailVerify("admin"))

// Admin Change Pass
adminRoute.post("/change-pass", verifyLoginMiddleware, userPassChange("admin"))

// Admin Forgot Pass
adminRoute.post("/forgot-pass", userForgotPassword("admin"))

// Admin Random String Check
adminRoute.post("/check-string/:username/:randString", userRandStringCheck("admin"))

// Admin Reset Password
adminRoute.post("/reset-pass/:username/:randString", userResetPassword("admin"))

// Admin Delete Admin
adminRoute.post("/delete-user", verifyLoginMiddleware, userDelete("admin"))

module.exports = adminRoute