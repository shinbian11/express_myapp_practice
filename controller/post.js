const BookSchema = require("../models/book");

const getbookinfo = (req, res) => {
  const authorname = req.params.id;

  // 1번째 방법
  // BookSchema.findOne({ auther: authorname }, (err, result) => {
  //   if (result) {
  //     return res.json(result);
  //   } else {
  //     return res.send("등록된 작가가 없습니다.");
  //   }
  // });

  // 2번째 방법 : then, catch
  BookSchema.find({ auther: authorname })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

const addbook = (req, res) => {
  const bookname = req.body.bookname;
  const auther = req.body.auther;
  const price = req.body.price;
  const date = req.body.date;

  let bookData = new BookSchema({
    bookname: bookname,
    auther: auther,
    price: price,
    publish: date,
  });

  bookData.save();
  res.redirect("/expost");
};

module.exports = {
  getbookinfo,
  addbook,
};
