const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const book = new Schema({
  bookname: String,
  auther: String,
  price: {
    // price 값이 들어오지 않았을 때, default로 5000을 저장해줌 (null 값도 들어오면 안됨)
    type: Number,
    default: 5000,
  },
  publish: Date,
  sales: {
    // sales 값이 들어오지 않았을 때, default로 true을 저장해줌 (null 값도 들어오면 안됨)
    type: Boolean,
    default: true,
  },
});

const bookData = mongoose.model("bookinfo", book);
module.exports = bookData;
