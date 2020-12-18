//цей файл створено для ментора AleksaHrevtsova
//копія такого файлу знаходиться на сервері та відповідає за backend

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");
const db = low(adapter);
db.defaults({
  contacts: [],
  users: [],
}).write();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const key = "AleksaHrevtsova";
// let t = 0;

app.use("/api/", (req, res, next) => {
  if (req.method === "GET" && req.query.key === key) {
    res.json(db.get("contacts"));
  } else if (
    req.method === "POST" &&
    req.query.key === key &&
    !req.body.marker
  ) {
    db.get("contacts")
      .push(...req.body)
      .write();
  } else if (
    req.method === "POST" &&
    req.query.key === key &&
    req.body.marker === "del"
  ) {
    db.update("contacts", (contacts) => {
      let idx = 0;
      contacts.forEach((el, index) => {
        if (el.id === req.body.id) {
          idx = index;
        }
      });
      contacts.splice(idx, 1);
      return contacts;
    }).write();
  }

  // t++
  // console.log(`${t} відбувся запит на свервер`);
});

app.use("/", express.static(__dirname + "/cv"));

app.listen(80, () => {
  console.log("Сервер слухає порт 80");
});