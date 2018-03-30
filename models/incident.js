const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incidentSchema = new Schema({
  date: { type: Date, required: true },
  location: { type: String, required: true },
  cost: { type: String, required: true },
  person: { type: String, required: true },
  category: { type: String, required: true },
  notes: { type: String }
  //user: { } 
});

const Incident = mongoose.model("Incident", incidentSchema);

module.exports = Incident;
