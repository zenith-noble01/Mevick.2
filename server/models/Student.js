const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
email:{
  type: String
},
studentname :{
  type: String
},
studentemail :{
  type: String
},
fathername:{
  type: String
},
fatherPhone:{
  type: String
},
fatheroccupation :{
  type: String
},
mothername:{
  type: String
},
motherPhone:{
  type: String
},
motheroccupation :{
  type: String
},
password: {
  type: String
},
username: {
  type: String
},
dob: {
  type: String
},
studentaddress: {
  type: String
},
phone: {
  type: String
},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
