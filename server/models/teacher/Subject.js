const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema(
    {
    subjectname: {
        type: String,
        require: true
    },
    subjectTeachers: {
        type: Array,
        default: []
    },
    classesTaught: {
        type: Array,
        default: []
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("Subject", SubjectSchema);
