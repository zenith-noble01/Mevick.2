const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
  studentname :{
    type: String,
    default: ""
  },
  studentemail :{
    type: String,
    default: ""
  },
  studentImg:{
    type: String,
    default: ""
  },
  fathername:{
    type: String,
    default: ""
  },
  fatherPhone:{
    type: String,
    default: ""
  },
  fatheroccupation :{
    type: String,
    default: ""
  },
  mothername:{
    type: String,
    default: ""
  },
  motherPhone:{
    type: String,
    default: ""
  },
  motheroccupation :{
    type: String,
    default: ""
  },
  password: {
    type: String,
    default: ""
  },
  email:{
    type: String,
    default: ""
  },
  username: {
    type: String,
    default: ""
  },
  dob: {
    type: String,
    default: ""
  },
  studentaddress: {
    type: String,
    default: ""
  },
  phone: {
    type: String,
    default: ""
  },
  offerringSubjects:{
    type: Array,
    default: []
  },
  class: {
    type: String,
    default: ""
  }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
