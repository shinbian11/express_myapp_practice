const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("post"); // post.ejs 파일을 render 해라 (app.js의 app.set 설정 덕분에, 이렇게만 적어도 된다.
});

router.post("/", (req, res, next) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const date = req.body.date;
  // res.json({ name: name, phone: phone, date: date });
  // response 응답
  // 웹 통신 방식 : 1 요청 1 응답
  // 1 요청 1 응답 통신 종료가 정상
  next();
});

router.post("/", (req, res) => {
  // res.redirect ==> 호출한 경로로 재 접근.
  res.redirect("/expost");
});

module.exports = router;
