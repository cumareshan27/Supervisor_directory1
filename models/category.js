const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  middleName:  {type: String, required: true },
  phoneNumber: { type: Number, required: true },
  email: { type: String, required: true },
  specialities: { type: String, required: true },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
