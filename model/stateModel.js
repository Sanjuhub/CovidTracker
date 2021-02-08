const mongoose = require("mongoose");
const { Schema } = mongoose;

const stateSchema = new Schema({
  CountryName: String,
  State: String,
  StateCode: String,
  ConfirmedCases: Number,
  RecoveredCases: Number,
  DeathsCase: Number,
  ActiveCase: Number,
  LastUpdate: String,
});

mongoose.model("states", stateSchema);
