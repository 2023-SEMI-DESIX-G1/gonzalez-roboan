((Utils, Data) => {
    const app = {
        HTMLElement: {
            pokemones: document.getElementById("Pokemones"),
            informacion: document.getElementById("informacion"),
            tipoBusquedaPokemon: document.getElementById("tipo")
        },
        init() {
            app.HTMLElement.pokemones.addEventListener('submit', app.handlers.PokemonesFromSubmitHandler)
        },
        handlers: {
            async PokemonesFromSubmitHandler(event) {
                event.preventDefault();
                let url = "https://pokeapi.co/api/v2/"
                const tipoBusqueda = app.HTMLElement.tipoBusquedaPokemon.value;

                if (tipoBusqueda == "Pokemon") {
                    const pokemon = app.HTMLElement.informacion.value;
                    url = url + "pokemon/" + pokemon;
                    const infoPokemon = await app.methods.getpokemonapi(url);
                    console.log(infoPokemon)
                    App.methods.generatePokemonCard(infoPokemon);

                }
                else {
                    const habilidad = app.HTMLElement.informacion.value;
                    console.log(habilidad)
                }
            }
        },
        methods: {
            async getpokemonapi(pokemon) {

                try {
                    const response = await fetch(pokemon);

                    if (!response.ok) {
                        throw new Error("Failed to fetch Pokemon Data");
                    }

                    const pokemonData = await response.json();
                    const specieUrl = await Data.getData(pokemonData.species.url)
                    const responseSpeciesUrl = await specieUrl.json();

                    const chainUrl = await Data.getData(
                        responseSpeciesUrl.evolution_chain.url
                    )

                    const responsechainUrl = await chainUrl.json();

                    let evolChain = [];
                    evolChain.push({
                        name: responsechainUrl.chain.species.name,
                        is_baby: responsechainUrl.chain.is_baby,
                    });

                    let child = responsechainUrl.chain.evolves_to;

                    while (child.length > 0) {
                        evolChain.push({
                            name: child[0].species.name,
                            is_baby: child[0].is_baby,
                        });
                        child = child[0].evolves_to;
                    }

                    return {
                        name: `${pokemonData.name} (${pokemonData.id})`,
                        sprites: {
                            front: pokemonData.sprites.front_default,
                            back: pokemonData.sprites.back_default,
                        },
                        weight: pokemonData.weight,
                        height: pokemonData.height,
                        abilities: pokemonData.abilities,
                        evolutions: evolChain,
                    };

                } catch (error) {
                    console.log(error);
                    return [];

                }
            }
        }
        };
        app.init();
    })(document.Utils, document.Data);

