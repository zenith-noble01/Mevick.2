const mongoose = require("mongoose");

const ResultSchema = new mongoose.Schema(
  {
    resultimg: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Result", ResultSchema);
