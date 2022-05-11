const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  console.log("test express");
  res.send("hello express");
  next(); // 현재 미들웨어의 기능을 마치고, 다음 미들웨어로 연결을 해준다.
  // next() 대신, 이 함수를 async/await의 형태로 대체해도 된다. (서로 비슷한 개념)
});

router.get("/", (req, res, next) => {
  console.log("2nd express");
});

router.get("/member", (req, res) => {
  res.send("call member");
  // db 호출 함수, search 등등 여러 기능을 여기다가 정의할 수 있음
});

router.get("/member/:id", (req, res) => {
  const member = req.params.id;
  console.log(member);
  res.send(`${member}!!`);
});

module.exports = router;
