# Node Api

Introduction:

- store info in JSON file
- store info in DB MySQL
- store info in file similar to mongo format
- UI Example for this app can be found in teodoravermesan/teams-networking

# Install

- git clone https://github.com/teodoravermesan/teo-api.git
- cd to-do-list-api
- npm install

# Usage

- npm start
- npm run devstart - when you work inside code and want auto restart
- Open http://localhost:3000 to see if it works

# JSON file as storage

Tasks are stored inside data/tasks.json

```
// GET tasks-json
fetch("http://localhost:3000/tasks-json", {
method: "GET",
headers: {
"Content-Type": "application/json"
}
});


// POST tasks-json/create
fetch("http://localhost:3000/tasks-json/create", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
name: "Wash dishes",
})
});

// DELETE tasks-json/delete
fetch("http://localhost:3000/tasks-json/delete", {
method: "DELETE",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({ id: "fedcba1610309909431" })
});

// PUT tasks-json/update
fetch("http://localhost:3000/tasks-json/update", {
method: "PUT",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
id: "fedcba1610310163146",
name: "Workout 30 min",
completed: "true";
})
});
```
