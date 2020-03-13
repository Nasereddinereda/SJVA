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
    createdAt: {
        type: Date,
        default: Date.now
    }
});



const Items = mongoose.model("Items", itemsSchema);
module.exports = Items;