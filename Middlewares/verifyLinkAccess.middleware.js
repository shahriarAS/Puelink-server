// External Module
const jwt = require("jsonwebtoken");
const linkModel = require("../Models/link.js")

// Middleware
const verifyLinkAccess = async (req, res, next) => {
    try {
        const existLink = linkModel.findOne({ linkId: req.params.linkId })
        if (existLink.user == req.userID) {
            next()
        }
        else {
            res.status(200).send({
                msg: "You don't have access to this link."
            });
        }
    } catch (err) {
        res.status(200).send({
            msg: "Failed To Verify Link Access"
        });
    }
}

// Export
module.exports = verifyLinkAccess