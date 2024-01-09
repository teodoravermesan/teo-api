var express = require("express");
var router = express.Router();
var fs = require("fs");

const DATA_PATH = "data/teams.json";

/**
 *
 */
router.get("/", function (req, res, next) {
  console.log("reading file %o", DATA_PATH);
  const teams = getTeams();
  res.json(teams);
});

/**
 *
 */
router.post("/create", function (req, res, next) {
  const activity = req.body.activity;
  const domain = req.body.domain;
  const details = req.body.details;
  const status = req.body.status;

  const teams = getTeams();
  const id = Math.random().toString(36).substring(7) + new Date().getTime();

  teams.push({
    id,
    activity,
    domain,
    details,
    status
  });

  setTeams(teams);

  res.json({ success: true, id });
  res.status(201);
});

/**
 *
 */
router.delete("/delete", function (req, res, next) {
  const id = req.body.id;

  const teams = getTeams().filter(team => team.id != id);

  setTeams(teams);

  res.json({ success: true });
});

/**
 *
 */
router.put("/update", function (req, res, next) {
  const id = req.body.id;
  const activity = req.body.activity;
  const domain = req.body.domain;
  const details = req.body.details;
  const status = req.body.status;

  const teams = getTeams();

  const team = teams.find(team => team.id == id);
  if (team) {
    team.activity = activity;
    team.domain = domain;
    team.details = details;
    team.status = status;
  }

  setTeams(teams);

  res.json({ success: true });
});

function getTeams() {
  const content = fs.readFileSync(DATA_PATH);
  return JSON.parse(content);
}

function setTeams(teams) {
  const content = JSON.stringify(teams, null, 2);
  fs.writeFileSync(DATA_PATH, content);
}

module.exports = router;
