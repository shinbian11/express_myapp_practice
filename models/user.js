const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  userid: {
    type: String,
    required: true, // required : true => 반드시 값을 넣어야 한다는 의미!
    unique: true, // unique : true => collection 안에서 유일하다는 의미!
  },
  job: {
    type: String,
    required: true,
  },
});

const userData = mongoose.model("users", user);
module.exports = userData;
