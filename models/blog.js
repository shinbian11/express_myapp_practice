const mongoose = require("mongoose");
const autoIncrement = require("mongoose-auto-increment");
const blogSchema = mongoose.Schema;

// 블로그 글 제목, 본 글 내용
// auto increment

autoIncrement.initialize(mongoose); // 초기화 (필수)

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
    no: Number,
  },
  {
    timestamps: true,
  }
);

blog.plugin(autoIncrement.plugin, {
  model: "blog", // blog 모델
  field: "no", // autoincrement를 적용할 field
  startAt: 20,
  increment: 1,
});

const blogModel = mongoose.model("blog", blog);
module.exports = blogModel;
