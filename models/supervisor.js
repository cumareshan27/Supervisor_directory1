const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const supervisorSchema = new Schema({
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
  licenceNumber : {type: String, required: true},
  licenceExpiry : {type: String, required: true},
  category : { type: Array, required: false }
});

// var categorySchema = Schema({
//   _id     : Schema.Types.ObjectId,
//   categorydesc   : String,
//   category : [{ type: Schema.Types.ObjectId, ref: 'category' }]
// });

// var storySchema = Schema({
//   _creator : { type: Schema.Types.ObjectId, ref: 'Person' },
//   title    : String,
//   fans     : [{ type: Schema.Types.ObjectId, ref: 'Person' }]
// });


const Supervisor = mongoose.model("Supervisor", supervisorSchema);
// const Category = mongoose.model("Category", categorySchema)

module.exports = Supervisor;
