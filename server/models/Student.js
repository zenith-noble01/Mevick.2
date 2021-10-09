const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema(
  {
    studentname: {
      type: String,
      required: true
    },
    studentemail: {
      type: String,
    },
    studentphone: {
      type: Number,
    },
    studentclass: {
        type: String,
        required: true
    },
    guidiancename: {
        type: String,
        required: true    
    },
    guidiancecontact: {
        type: String,
        required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", StudentSchema);
