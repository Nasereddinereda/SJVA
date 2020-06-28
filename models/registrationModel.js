const mongoose = require("mongoose");
const validator = require("validator");

const registrationSchema = new mongoose.Schema({
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
  birth_place: {
    type: String,
    required: [true, "please tell us your place of birth"],
    min: 3,
    max: 30
  },
  birthday: {
    type: String,
    required: [true, "please tell us your birthday"]
  },
  address: {
    type: String,
    required: [true, "please tell us your adress"],
    min: 20,
    max: 200
  },
  email: {
    type: String,
    required: [true, "please provide your email"],
    // unique: true,
    lowercase: true,
    validate: [validator.isEmail, "please provide a valid email"]
  },
  phone: {
    type: String,
    min: 8,
    max: 15
    // required: [true, "please tell us your adress"]
  },
  school_year: {
    type: String,
    enum: [
      "P1",
      "P2",
      "P3",
      "P4",
      "P5",
      "M1",
      "M2",
      "M3",
      "M4",
      "S1",
      "S2",
      "S3",
      "HIGHT"
    ]
  },
  confirm:{
  type: String, 
  default:"false" 
  },
  relation: {
    type: String,
    min: 20,
    max: 200
  },
  why: {
    type: String,
    min: 20,
    max: 200
  },
  mode: {
    type: String,
    default: "card",
    enum: ["card", "event"]
  },
  event: {
    type: mongoose.Schema.ObjectId,
    ref: "Items"
  }
});

registrationSchema.pre(/^find/, function (next) {
  this.populate("event");
  next();
});

const registration = mongoose.model("Registration", registrationSchema);
module.exports = registration;