const mapData = {
    evolutionChainList: ({ species, evolves_to }) => {
      let temp = "";
      if (evolves_to[0]) {
        temp = mapData.evolutionChainList(evolves_to[0]); // llamado recursivo para encontrar valores de evolucion
      }
      return `${species.name}, ` + temp;
    },
  };
  module.exports = mapData;