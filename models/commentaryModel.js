const mongoose = require("mongoose");

const commentarySchema = new mongoose.Schema({
  last_name: {
    type: String,
    lowercase: true,
    required: [true, "please tell us your last name"],
    min: 3,
    max: 20
  },
  first_name: {
    type: String,
    lowercase: true,
    required: [true, "please tell us your first name"],
    min: 3,
    max: 20
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