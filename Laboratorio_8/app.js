const express = require("express");
const searchPokemon = require("./pokemon");

const app = express();
const PORT = 3000;

app.get("/pokemon/:name", async (req, res) => {
  const { name } = req.params;
  const value = await searchPokemon.searchPokemon(name);
  res.json(value);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});