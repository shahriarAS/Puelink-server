// External Import
const mongoose = require("mongoose");

// Init Schema
const linkSchema = mongoose.Schema({
    linkId: {
        type: String,
        required: true,
        unique: true,
        dropDups: true,
        index: true,
    },
    originalLink: {
        type: String,
        required: true,
        index: true,
    },
    shortLink: {
        type: String,
        required: true,
        unique: true,
        dropDups: true,
        index: true,
    },
    status: {
        type: String,
        enum: ["Active", "Paused", "Blocked"]
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: "userModel"
    },
    created_at: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    updated_at: {
        type: Date,
        default: Date.now()
    },
});

// Model Init
const linkModel = new mongoose.model("linkModel", linkSchema);
linkModel.createIndexes();

module.exports = linkModel;
