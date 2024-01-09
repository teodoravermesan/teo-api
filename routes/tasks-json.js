var express = require("express");
var router = express.Router();
var fs = require("fs");

const DATA_PATH = "data/tasks.json";

/**
 *
 */
router.get("/", function (req, res, next) {
  console.log("reading file %o", DATA_PATH);
  const tasks = getTasks();
  res.json(tasks);
});

/**
 *
 */
router.post("/create", function (req, res, next) {
  const activity = req.body.activity;
  const domain = req.body.domain;
  const details = req.body.details;
  const status = req.body.status;

  const tasks = getTasks();
  const id = Math.random().toString(36).substring(7) + new Date().getTime();

  tasks.push({
    id,
    activity,
    domain,
    details,
    status
  });

  setTasks(tasks);

  res.json({ success: true, id });
  res.status(201);
});

/**
 *
 */
router.delete("/delete", function (req, res, next) {
  const id = req.body.id;

  const tasks = getTasks().filter(task => task.id != id);

  setTasks(tasks);

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

  const tasks = getTasks();

  const task = tasks.find(task => task.id == id);
  if (task) {
    task.activity = activity;
    task.domain = domain;
    task.details = details;
    task.status = status;
  }

  setTasks(tasks);

  res.json({ success: true });
});

function getTasks() {
  const content = fs.readFileSync(DATA_PATH);
  return JSON.parse(content);
}

function setTasks(tasks) {
  const content = JSON.stringify(teatasksms, null, 2);
  fs.writeFileSync(DATA_PATH, content);
}

module.exports = router;
