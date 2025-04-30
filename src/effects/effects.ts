import { Pokemon } from "../pokemon/pokemon";
export type StatusEffect = "Paralyzed" | "Poisoned" | "Burned" | "Asleep";
export function paralysis(pkm: Pokemon) {
    const success = Math.random() < 0.75;
    if (!success) {
        console.log(`${pkm.name} is paralyzed and couldn't move!`);
        return false
    }
}

export function poison(pkm: Pokemon) {
    console.log(`${pkm.name} is being damaged by the poison!`);
    pkm.hp -= (pkm.hp * (1/8));
}
