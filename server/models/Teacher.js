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
    teacherphone: {
      type: Number,
      required: true
    },
    teacherclasses: {
        type: Array,
        required: true
    },
    teacherSubject:{
      type: String
    },
    teacherProfilePic: {
      type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", TeacherSchema);
