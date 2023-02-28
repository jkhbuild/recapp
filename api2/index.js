import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("This is a Food App");
});

app.get("/restaurants", (req, res) => {
  res.json("RESTAURANTS");
});

app.listen(5002);
