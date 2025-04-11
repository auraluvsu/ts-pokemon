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
    Flying: "Flying",
	Normal: "Normal",
	Fighting: "Fighting",
	Fire: "Fire",
	Grass: "Grass",
	Water: "Water",
	Psychic: "Psychic",
	Electric: "Electric",
	Ghost: "Ghost",
	Ground: "Ground"
} as const;

export type TypeKey = keyof typeof Types;
Object.freeze(Types)
