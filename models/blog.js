const mongoose = require("mongoose");
const blogSchema = mongoose.Schema;

// 블로그 글 제목, 본 글 내용

const blog = new blogSchema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const blogModel = mongoose.model("blog", blog);
module.exports = blogModel;
