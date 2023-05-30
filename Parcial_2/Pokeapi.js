(() => {
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
            PokemonesFromSubmitHandler(event) {
                event.preventDefault();
                let url = "https://pokeapi.co/api/v2/"
                const tipoBusqueda = app.HTMLElement.tipoBusquedaPokemon.value;

                if (tipoBusqueda == "Pokemon") {
                    const pokemon = app.HTMLElement.informacion.value;
                    url = url + "pokemon/" + pokemon;
                    const infoPokemon = app.methods.getpokemonapi(url);
                    console.log(infoPokemon);

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
                    const pokemonDataList = [];

                    console.log(pokemonData);
                    for (const pokemoninfo of pokemonData.forms) {
                        const PokemonUrl = pokemoninfo.url;

                        if (PokemonUrl) {
                            pokemonDataList.push(PokemonUrl)
                        }
                    }
                    return pokemonDataList;

                } catch (error) {
                    console.log(error);
                    return [];

                }
            }
        },
    };
    app.init();
})();

