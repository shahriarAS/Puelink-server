const express = require("express")
const mongoose = require("mongoose")
const linkModel = require("../Models/link.js")
const uniqueString = require("../Utils/uniqueString.js")
const uniqueURL = require("../Utils/uniqueUrl.js")

const userAllLinkView = async (req, res) => {
    try {
        const existLink = await linkModel.find({ user: req.userId })
        if (existLink) {
            // get page from query params or default to first page
            const page = parseInt(req.query.page) || 1;

            // get pager object for specified page
            const pageSize = 10;
            const pager = paginate(existLink.length, page, pageSize);

            // get page of items from items array
            const pageOfItems = existLink.slice(pager.startIndex, pager.endIndex + 1);

            res.status(200).json({
                msg: "Successfully Viewed All Link",
                result: { pager, pageOfItems }
            })
        } else {
            res.status(200).json({
                msg: "Link not found."
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            msg: "Sever Error"
        })
    }
}

const linkView = async (req, res) => {
    try {
        const existLink = await linkModel.findOne({ linkId: req.params.linkId, user: req.userId })
        if (existLink) {
            res.status(200).json({
                msg: "Successfully Viewed Link",
                result: existLink
            })
        } else {
            res.status(200).json({
                msg: "Link not found."
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            msg: "Sever Error"
        })
    }
}

const linkAdd = async (req, res) => {
    try {
        let shortLink = req.body.shortLink
        shortLink.replaceAll(" ", "")
        const existLink = await linkModel.findOne({
            shortLink: `${process.env.CLIENT_DOMAIN}/l/${shortLink}`,
            user: req.userId
        })
        if (existLink) {
            res.status(200).json({
                msg: "Already used this shorthand"
            })
        } else {
            const linkId = uniqueString()
            const newLink = await linkModel({
                linkId: linkId,
                originalLink: req.body.originalLink,
                shortLink: `${process.env.CLIENT_DOMAIN}/l/${shortLink || uniqueURL()}`,
                user: req.userId,
                status: "Active"
            })
            await newLink.save()
            const linkResult = await linkModel.findOne({
                linkId: linkId,
                user: req.userId,
            })
            res.status(200).json({
                msg: "Successfully Created Your Link",
                result: linkResult
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            msg: "Sever Error"
        })
    }
}

const linkUpdate = async (req, res) => {
    try {
        let shortLink = req.body.shortLink
        shortLink.replaceAll(" ", "")
        shortLink = `${process.env.CLIENT_DOMAIN}/l/${shortLink}`
        const existLink = await linkModel.findOne({ linkId: req.params.linkId, user: req.userId })
        if (existLink) {
            const duplicateLink = await linkModel.findOne({ shortLink: shortLink, user: req.userId })
            if (!duplicateLink) {

                await linkModel.updateMany({ linkId: req.params.linkId, user: req.userId }, { $set: { shortLink: shortLink, status: req.body.status, updated_at: Date.now() } });

                const resultLink = await linkModel.findOne({ linkId: req.params.linkId, user: req.userId })
                res.status(200).json({
                    msg: "Successfully Updated Link",
                    result: resultLink
                })
            } else {
                console.log(duplicateLink)
                res.status(200).json({
                    msg: "Already used this shorthand"
                })
            }
        } else {
            res.status(200).json({
                msg: "Link not found."
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            msg: "Sever Error"
        })
    }
}

const linkDelete = async (req, res) => {
    try {
        const existLink = await linkModel.findOne({ linkId: req.params.linkId, user: req.userId })
        if (existLink) {
            await linkModel.deleteOne({ linkId: req.params.linkId, user: req.userId })
            res.status(200).json({
                msg: `Deleted Link ${req.params.linkId}`
            })
        } else {
            res.status(200).json({
                msg: "Link not found."
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({
            msg: "Sever Error"
        })
    }
}

module.exports = { userAllLinkView, linkView, linkAdd, linkUpdate, linkDelete }