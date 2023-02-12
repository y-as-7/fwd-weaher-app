
const express = require("express");
const app = express();
/* Middleware*/
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());
// Initialize the main project folder
app.use(express.static("website"));
const port = 3010;
projectData = {};
// Setup Server


const server = app.listen(port, listening);
function listening() {
  console.log(`The serever is running on localhost:${port}`);
}

//GET Route
app.get("/weather", (req, res) => res.send(projectData));

//POST Route
app.post("/weather/save", (req, res) => {
  projectData.date = req.body.date;
  projectData.temp = req.body.main.temp;
  projectData.feelings = req.body.feelings;
  res.end();
});
