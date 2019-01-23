const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const residentSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  middleName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true },
  addressLine1: { type: String, required: true },
  addressLine2: { type: String, required: false },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  category : { type: Array, required: false }
});

const Resident = mongoose.model("Resident", residentSchema);

module.exports = Resident;
