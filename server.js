require('dotenv').config()
const db = require('./api/db.js')
const express = require("express");
var multer = require('multer');
var upload = multer();

const app = express();

// for parsing multipart/form-data
app.use(upload.array()); 


app.set("port", process.env.PORT || 7777);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
}

app.get("/api/data/today", db.data.get_today)
app.get("/api/data/", db.data.get_date)

app.get("/api/nutrition", db.nutrition.getAll);
app.post("/api/nutrition", db.nutrition.saveValues);
app.get("/api/nutrition/columns", db.nutrition.getColumns)

app.get("/api/health", db.health.getAll);
app.post("/api/health", db.health.saveValues);
app.get("/api/health/columns", db.health.getColumns)

app.get("/api/time", db.time.getAll);
app.post("/api/time", db.time.saveValues);
app.get("/api/time/columns", db.time.getColumns)

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});