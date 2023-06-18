const map = require("./mapeodata");
const pokemonAxios = require("./utils");
const searchPokemon = {
  async searchPokemon(name) {
    // Realizar solicitud GET a la PokeAPI para obtener la información del Pokémon
    const data = await pokemonAxios.fetchCall(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const pokemonName = data.name;
    const pokemonId = data.id;
    const pokemonHeight = data.height;
    const pokemonWeight = data.weight;
    const pokemonAbilities = data.abilities.map(
      (ability) => ability.ability.name
    );
    // Realizar solicitud GET a la PokeAPI para obtener la información de la especie
    const species = await pokemonAxios.fetchCall(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`
    );
    const evolutionChain = await pokemonAxios.fetchCall(
      species.evolution_chain.url
    );
    // Realizar solicitud GET a la PokeAPI para obtener la información de las evoluciones
    const evoluciones = map.evolutionChainList(evolutionChain.chain);
    return {
      nombre: pokemonName,
      id: pokemonId,
      Altura: pokemonHeight,
      peso: pokemonWeight,
      habilidades: pokemonAbilities,
      evoluciones: evoluciones,
    };
  },
};
module.exports = searchPokemon;