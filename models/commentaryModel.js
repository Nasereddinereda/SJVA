const mongoose = require("mongoose");
const validator = require("validator");

const commentarySchema = new mongoose.Schema({
  username: {
    type: String,
    lowercase: true,
    required: [true, "please tell us your last name"],
    min: 3,
    max: 20
  },
  email: {
    type: String,
    required: [true, "please provide your email"],
    unique: false,
    validate: [validator.isEmail, "please provide a valid email"]
  },
  comment: {
    type: String,
    required: [true, "Comment cannot be empty."]
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  item: {
    type: mongoose.Schema.ObjectId,
    ref: "Items",
    required: [true, "Comment must belong to a item."]
  }
});

commentarySchema.pre(/^find/, function (next) {
  this.populate("item");
  next();
});

const Commentary = mongoose.model("Commentary", commentarySchema);
module.exports = Commentary;