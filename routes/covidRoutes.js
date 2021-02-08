const mongoose = require("mongoose");
const States = mongoose.model("states");
const URL = require("url");

module.exports = (app) => {
  app.get("/api/statedata", (req, res) => {
    States.find({}, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  });

  app.get("/api/state", (req, res) => {
    const query = req.query;
    console.log(req.statecode);
    States.find({ StateCode: query.statecode }, (err, data) => {
      if (err) {
        res.send(err);
      } else if (Object.keys(data).length == 0) {
        res.status(404).send("Not found!!");
      }
      res.send(data);
    });
  });
};
