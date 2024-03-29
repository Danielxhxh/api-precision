const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const Ajv = require("ajv");
const fs = require("fs");
require("dotenv").config();

// Import data
const loginData = require("./data/login.json");
const patientsData = require("./data/patients.json");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Verify Token Function
function verifyToken(req, res, next) {
  const authHeader = req.header("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(400).json({ error: "Bad Request" });
  }

  const token = authHeader.split(" ")[1]; // Extract the token after "Bearer "

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.decoded = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

// APIs
app.post("/auth/token", async (req, res) => {
  try {
    let { username, password } = req.body;
    let authenticated = false;
    let userId = NaN;

    loginData.forEach((element) => {
      if (element.username === username && element.password === password) {
        authenticated = true;
        userId = element.id;
        return;
      }
    });

    if (!authenticated) {
      res.status(400).send("Error: Invalid username or password");
      return;
    }

    const accessToken = jwt.sign({ id: userId }, process.env.SECRET, {
      expiresIn: "1h",
    });

    const refreshToken = jwt.sign({ id: userId }, process.env.REFRESH_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      accessToken: accessToken,
      tokenType: "Bearer",
      refreshToken: refreshToken,
      expiresIn: 3600, // 1 hour in seconds
    });
  } catch {
    res.status(400).send("Error");
  }
});

app.get("/patient", verifyToken, (req, res) => {
  try {
    let userId = req.decoded.id;
    let patient = {};

    patientsData.forEach((element) => {
      if (element.id === userId) {
        patient = element;
      }
    });
    patient.errorMessage = "";

    res.status(200).json({ patient: patient, errorMessage: null });
  } catch {
    res.status(400).send("Bad Request");
  }
});

app.post("/results", verifyToken, async (req, res) => {
  try {
    // This lines are used to define the schema used later to validate
    const schema = require("./schema/results.js");
    const ajv = new Ajv({ allErrors: true });
    const validate = ajv.compile(schema);

    const results = req.body;
    const valid = validate(results);

    if (!valid) {
      // console.log("Validation errors:", validate.errors);
      // res.status(400).send("Bad Request");
      res.status(400).json(validate.errors);
      return;
    }

    // DO WE NEED THE PATIENT ID?
    let userId = req.decoded.id;
    results.patientId = userId;

    const jsonData = JSON.parse(fs.readFileSync("./data/results.json", "utf8"));
    jsonData.push(results);

    // Write the modified object back to the JSON file
    fs.writeFileSync(
      "./data/results.json",
      JSON.stringify(jsonData, null, 2),
      "utf8"
    );

    res.status(200).json({
      areResultsSaved: true,
      error: null,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `Server running on http://localhost:${process.env.PORT || 3000}...`
  );
});
