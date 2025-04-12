import pokemonRawData from "./pokemon.json" assert { type:"json" };
import { Pokemon, PokemonData } from "./pokemon";
const pokedex = (pokemonRawData as PokemonData[]).map(Pokemon.fromJSON);
console.log(pokedex[2].name)
