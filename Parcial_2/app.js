((Utils, Data) => {
    const app = {
        HTMLElement: {
            pokemones: document.getElementById("Pokemones"),
            informacion: document.getElementById("informacion"),
            tipoBusquedaPokemon: document.getElementById("tipo"),
            results: document.getElementById("results"),

        },
        init() {
            app.HTMLElement.pokemones.addEventListener('submit', app.handlers.PokemonesFromSubmitHandler)
        },
        handlers: {
            async PokemonesFromSubmitHandler(event) {
                event.preventDefault();
                // URL Inicial
                let url = "https://pokeapi.co/api/v2/"
                const tipoBusqueda = app.HTMLElement.tipoBusquedaPokemon.value;

                if (tipoBusqueda == "Pokemon") {
                    const pokemon = app.HTMLElement.informacion.value;
                    // URL de la informacion del pokemon
                    url = url + "pokemon/" + pokemon;
                    app.methods.getPokemonApi(url).then(Data => {
                        app.templates.pokemon(Data);
                    });

                    document.getElementById("Limpiar").style.display = "block";

                }
                else {
                    const habilidad = app.HTMLElement.informacion.value;
                    // URL de los pokemones que tiene esta habilidad
                    url = url + "ability/" + habilidad;
                    app.methods.getPokemonAbilityApi(url).then(Data => {
                        console.log(Data)
                        app.templates.ability(Data);
                    });

                    document.getElementById("Limpiar").style.display = "block";

                }
            }
        },
        methods: {
            async getPokemonApi(pokemon) {

                try {
                    const response = await fetch(pokemon);

                    if (!response.ok) {
                        throw new Error("Failed to fetch Pokemon Data");
                    }

                    const pokemonData = await response.json();

                    const specieUrl = await Data.getData(pokemonData.species.url)

                    const responseSpeciesUrl = await specieUrl.json();

                    console.log(responseSpeciesUrl);
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

                    console.log(child)
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
            },
            async getPokemonAbilityApi(habilidad) {

                const rawResponse = await Data.getData(habilidad);

                const response = await rawResponse.json();

                let pokemones = [];

                for (let i = 0; i < response.pokemon.length; i++) {

                    pokemones.push({
                        name: response.pokemon[i].pokemon.name,
                        is_hidden: response.pokemon[i].is_hidden,
                    });

                }

                return { name: response.name, pokemones: pokemones };
            }

        },
        templates: {
            pokemon(pokemon) {

                const card = document.createElement("div");
                
                card.classList.add("contenedor-respuesta");
                
                const h1 = document.createElement("h1");
                
                h1.textContent = pokemon.name;
                
                card.appendChild(h1);
                
                const div = document.createElement("div");
                
                div.classList.add("row");
                
                const div_interno = document.createElement("div");
                
                div_interno.classList.add("column");
                
                const h6 = document.createElement("h6");
                
                h6.textContent = "Sprites";

                const div_sprites = document.createElement("div");

                const imagen1 = document.createElement("img");
   
                const imagen2 = document.createElement("img");

                imagen1.src = pokemon.sprites.front;
       
                imagen2.src = pokemon.sprites.back;

                imagen1.classList.add("img");

                div_sprites.appendChild(imagen1);
          
                div_sprites.appendChild(imagen2);

                div_interno.appendChild(h6);
           
                div_interno.appendChild(div_sprites);

                const div_interno2 = document.createElement("div");

                div_interno2.classList.add("column");

                const h62 = document.createElement("h6");

                h62.textContent = "Weight / Height";

                const p_medidas = document.createElement("p");

                p_medidas.textContent = `${pokemon.weight} / ${pokemon.height}`;
            
                div_interno2.appendChild(h62);
             
                div_interno2.appendChild(document.createElement("br"));
             
                div_interno2.appendChild(p_medidas);

                div.appendChild(div_interno);
           
                div.appendChild(div_interno2);

                const div2 = document.createElement("div");
             
                div2.classList.add("row");

                const div_evolution = document.createElement("div");
            
                div_evolution.classList.add("column");
             
                const h6_evolution = document.createElement("h6");
             
                h6_evolution.textContent = "Evolution chain";
             
                const ul = document.createElement("ul");
            
                for (let i = 0; i < pokemon.evolutions.length; i++) {
                    const li = document.createElement("li");
                    li.textContent = `${pokemon.evolutions[i].name} ${pokemon.evolutions[i].is_baby ? "👶" : ""
                        }`;
                    ul.appendChild(li);
                }
               
                div_evolution.appendChild(h6_evolution);
             
                div_evolution.appendChild(ul);
               
                div2.appendChild(div_evolution);

                const div_abilities = document.createElement("div");
              
                div_abilities.classList.add("column");
               
                const h6_abilities = document.createElement("h6");
              
                h6_abilities.textContent = "Abilities";
              
                const ul_abilities = document.createElement("ul");
              
                for (let i = 0; i < pokemon.abilities.length; i++) {
                    const li = document.createElement("li");
                    li.textContent = `${pokemon.abilities[i].ability.name} ${pokemon.abilities[i].is_hidden ? "🚫" : ""
                        }`;
                    ul_abilities.appendChild(li);
                }
                div_abilities.appendChild(h6_abilities);
              
                div_abilities.appendChild(ul_abilities);
              
                div2.appendChild(div_abilities);

                card.appendChild(div);
           
                card.appendChild(div2);
           
                app.HTMLElement.results.appendChild(card);
            },
            ability(pokemones) {

                const card = document.createElement("div");
              
                card.classList.add("contenedor-respuesta");
              
                const h1 = document.createElement("h1");
               
                h1.textContent = pokemones.name;
              
                const h2 = document.createElement("h2");
              
                h2.textContent = "Who can learn it?";
              
                card.appendChild(h1);
               
                card.appendChild(h2);
               
                const ul = document.createElement("ul");
              
                for (let i = 0; i < pokemones.pokemones.length; i++) {
                    const li = document.createElement("li");
                    li.textContent = `${pokemones.pokemones[i].name} ${pokemones.pokemones[i].is_hidden ? "🚫" : ""
                        }`;
                    ul.appendChild(li);
                }
             
                card.appendChild(ul);
               
                app.HTMLElement.results.appendChild(card);
            },
        }

    };
    app.init();
})(document.Utils, document.Data);
