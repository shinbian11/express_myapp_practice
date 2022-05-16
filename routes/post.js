const express = require("express");
const router = express.Router();
const bookController = require("../controller/post");
const BookSchema = require("../models/book");

router.get("/", (req, res) => {
  res.render("post"); // post.ejs 파일을 render 해라 (app.js의 app.set 설정 덕분에, 이렇게만 적어도 된다.
});

router.get("/bookinfo/:id", bookController.getbookinfo);

router.get("/del", (req, res) => {
  res.render("delete");
});

router.delete("/del/:id", (req, res) => {
  const bookname = req.params.id;
  BookSchema.findOneAndDelete({ bookname: bookname })
    .then((result) => {
      res.json({ redirect: "/expost" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/", (req, res, next) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const date = req.body.date;
  res.json({ name: name, number: number, date: date });
  // response 응답
  // 웹 통신 방식 : 1 요청 1 응답
  // 1 요청 1 응답 통신 종료가 정상
  next();
});

router.post("/addbook", bookController.addbook);

// bookinfo에 있는 정보를 다 가져오는 코드 (REST API 적용해보기)
router.get("/getlist", async (req, res) => {
  const result = await BookSchema.find({}).exec();
  return res.status(200).json(result);
});

router.get("/users", (req, res) => {
  res.render("user");
});

module.exports = router;
