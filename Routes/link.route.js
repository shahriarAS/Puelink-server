const express = require("express")

const { linkView, linkAdd, linkUpdate, linkDelete } = require("../Controllers/link.controller.js")
const verifyLinkAccess = require("../Middlewares/verifyLinkAccess.middleware.js")
const verifyLoginMiddleware = require("../Middlewares/verifyLogin.middleware")

const linkRoute = express.Router()

linkRoute.get("/view/:linkId", verifyLoginMiddleware, verifyLinkAccess, linkView)

linkRoute.post("/add", verifyLoginMiddleware, linkAdd)

linkRoute.put("/update/:linkId", verifyLoginMiddleware, verifyLinkAccess, linkUpdate)

linkRoute.delete("/delete/:linkId", verifyLoginMiddleware, verifyLinkAccess, linkDelete)

module.exports = linkRoute
