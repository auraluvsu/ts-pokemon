import rawPkmTypes from "./typesystem.json";
type PokemonType = 
  | "Normal"
  | "Fire"
  | "Water"
  | "Grass"
  | "Electric"
  | "Fighting"
  | "Psychic"
  | "Flying"
  | "Ground"
  | "Ghost";

type TypeEffectivenessMatrix = Record<PokemonType, Record<PokemonType, number>>;
const pkmTypes: TypeEffectivenessMatrix = rawPkmTypes;
export default pkmTypes;
export const Types = {
    Normal: "Normal",
    Fire: "Fire",
    Water: "Water",
    Grass: "Grass",
    Electric: "Electric",
    Fighting: "Fighting",
    Psychic: "Psychic",
    Flying: "Flying",
	Ground: "Ground",
    Ghost: "Ghost"
} as const;

export type TypeKey = keyof typeof Types;
Object.freeze(Types)
