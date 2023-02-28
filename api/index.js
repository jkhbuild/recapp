import express from "express";

const app = express();
app.get("/", (req, res) => {
  res.send("This works");
});

app.get("/restaurants", (req, res) => {
  res.json("These are Restaurants");
});

app.listen(5001);
