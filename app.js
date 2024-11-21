const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, world");
});

app.get("/dice", (req, res) => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  res.send(`Your dice roll is: ${diceRoll}`);
});

app.get("/coinflip", (req, res) => {
  const coinFlip = Math.random() < 0.5 ? "Heads" : "Tails";
  res.send(`Your coin flip result is: ${coinFlip}`);
});

app.get("/dice", (req, res) => {
  const diceRoll = Math.floor(Math.random() * 7) + 1;
  res.send(`Your dice roll is: ${diceRoll}`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});