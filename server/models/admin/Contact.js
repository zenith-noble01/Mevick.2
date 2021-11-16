const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    subject: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      max: 500,
      default: "",
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
