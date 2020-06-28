const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title cannot be empty."]
    },
    discription: {
        type: String,
        required: [true, "discription cannot be empty."]
    },
    mode: {
        type: String,
        default: "item",
        enum: ["item", "event"]
    },
    registration: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    images: [
        {
            type: String
        }
    ], 
    see : {
        type: Number ,
        default: 0 
    } ,
    departure: {
        type: String
    },
    arrival: {
        type: String
    },
    date: {
        type: String
    },
    hour: {
        type: String
    }
});



const Items = mongoose.model("Items", itemsSchema);
module.exports = Items;