const express = require("express")

const { linkView, linkAdd, linkUpdate, linkDelete } = require("../Controllers/link.controller.js")
const verifyLoginMiddleware = require("../Middlewares/verifyLogin.middleware")

const linkRoute = express.Router()

linkRoute.get("/view/:linkId", linkView)

linkRoute.post("/add", linkAdd)

linkRoute.put("/update/:linkId", linkUpdate)

linkRoute.delete("/delete/:linkId", linkDelete)

module.exports = linkRoute
