const https = require("https");

async function getPokemonApi() {
    const pokemon = "https://pokeapi.co/api/v2/pokemon/pikachu"

    const response = await fetch(pokemon);
    
    const pokemonData = await response.json();
    
    const specieUrl = await getData(pokemonData.species.url)

    const responseSpeciesUrl = await specieUrl.json();

    const chainUrl = await getData(
        responseSpeciesUrl.evolution_chain.url
    )

    const responsechainUrl = await chainUrl.json();
    
    let evolChain = [];
    evolChain.push({
        name: responsechainUrl.chain.species.name,
        is_baby: responsechainUrl.chain.is_baby,
    });

    let child = responsechainUrl.chain.evolves_to;

    let i = child.length;

    
    if (i == 1) {
        while (child.length > 0) {
            evolChain.push({
                name: child[0].species.name,
                is_baby: child[0].is_baby,
            });
            child = child[0].evolves_to;

        }
    } else {
        for (let index = 0; index < child.length; index++) {
            evolChain.push({
                name: child[index].species.name,
                is_baby: child[index].is_baby,
            });
            child = child;;
        }

    }


        const name = `${pokemonData.name} (${pokemonData.id})`;
        const weight = pokemonData.weight;
        const height = pokemonData.height;
        const Habilities = pokemonData.abilities;
        const evolutions = evolChain;

        console.log(`nombre y id  ${name}`);
        console.log(`peso ${weight}`);
        console.log(`Altura ${height}`);
        console.log(Habilities)
        console.log(evolutions)
}

async function getData(value) {
    return await fetch(value);
}

getPokemonApi();