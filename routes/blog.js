const express = require("express");
const blogSchema = require("../models/blog");
const router = express.Router();

router.get("/", async (req, res) => {
  // blog collection 에 있는 모든 데이터를 가져와서 result에 저장하고, blog/blog.ejs를 render할 때 전달!
  // blog/blog.ejs 파일에서 ejs 문법으로 받을 수 있다! <%= %> 이용!
  const result = await blogSchema.find({}).exec();
  res.render("blog/blog", { content: result });
});

router.get("/write", (req, res) => {
  res.render("blog/write");
});

router.post("/write", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;

  const blogText = new blogSchema({
    title: title,
    content: content,
  });

  blogText
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/blog");
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
});

module.exports = router;
