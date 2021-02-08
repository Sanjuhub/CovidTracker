const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

require("./model/stateModel");

mongoose.connect(keys.mongoURI, { useFindAndModify: false });

mongoose.connection
  .once("open", () => console.log("Sucessfully connected to the database....."))
  .on("error", (error) => {
    console.warn("Warning****", error);
  });

const app = express();

require("./services/centralData")(app);
require("./routes/covidRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
