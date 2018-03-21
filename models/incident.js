const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incidentSchema = new Schema({
  date: { type: Date, default: Date.now },
  location: { type: String, required: true },
  cost: { type: String, required: true },
  person: { type: String, required: true },
  category: { type: String, required: true },
  notes: String,
  //user: {} (USER ID)
});

const Incident = mongoose.model("Incident", incidentSchema);

module.exports = Incident;
