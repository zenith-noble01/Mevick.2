const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    desc: {
      type: String,
      max: 500,
    },
    img: {
      type: String,
      default: ""
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
