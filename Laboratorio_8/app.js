const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", function (req, res) {
  res.json({
    message: "Hello World! from lab8/app.js",
  });
});

app.get("/:pokemon", function (req, res) {
  res.json({
    message: `Pokemon name: ${req.params.pokemon}`,
  });
});

app.listen(PORT, () => {
  console.log(`Iniciado el server en el puerto: ${PORT}.`);
});