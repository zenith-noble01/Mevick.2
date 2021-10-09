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
    teacherclass: {
        type: Array,
        required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Teacher", TeacherSchema);
