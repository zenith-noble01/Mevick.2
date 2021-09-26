const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    message: {
      type: String,
      max: 500,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", ContactSchema);
