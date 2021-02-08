const csv = require("csv-parser");
const fs = require("fs");
const mongoose = require("mongoose");
const States = mongoose.model("states");


var sheetData = [];
const csvPath = "services\\data\\state_wise.csv";
const CountryIndia = "India";

module.exports = (app) => {
  app.get("/api/updatedb", async (req, res) => {
    fs.createReadStream(csvPath)
      .pipe(csv())
      .on("data", (row) => {
        if (row.State === "Total") {
        }

        sheetData.push(row);
      })
      .on("end", () => {
        console.log("Processed successfully");
        sheetData.map(async (state) => {
          const existingstate = await States.findOne({ State: state.State });
          if (existingstate) {
            const updatedState = States.findOneAndUpdate(
              { State: state.State },
              {
                $set: {
                  ConfirmedCases: state.Confirmed,
                  RecoveredCases: state.Recovered,
                  DeathsCase: state.Deaths,
                  ActiveCase: state.Active,
                  LastUpdate: state.Last_Updated_Time,
                },
              },
              (err, doc) => {
                if (err) console.log(err);
              }
            );
            //   console.log(updatedState.get("ConfirmedCases"));
          } else {
            const newstate = new States({
              CountryName: CountryIndia,
              State: state.State,
              StateCode: state.State_code,
              ConfirmedCases: state.Confirmed,
              RecoveredCases: state.Recovered,
              DeathsCase: state.Deaths,
              ActiveCase: state.Active,
              LastUpdate: state.Last_Updated_Time,
            });
            await newstate.save((err) => {
              if (err) console.log(err);
              //   else console.log("New state added...");
            });
          }
        });
        res.send("Thanks");
      });
  });
};
