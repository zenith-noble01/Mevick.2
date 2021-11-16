const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
  {
    teachername: {
      type: String,
      required: true
    },
    teacheremail: {
      type: String,
      required: true
    },
    teacherpassword: {
      type: String,
      required: true
    },
    teacherphone: {
      type: Number,
      required: true
    },
    teacherclasses: {
        type: Array,
        default: []
    },
    teacherSubject:{
      type: String,
      default: ""
    },
    teacherProfilePic: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", TeacherSchema);
