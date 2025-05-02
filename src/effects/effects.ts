import { Pokemon } from "../pokemon/pokemon.js";

export type StatusEffect = "Paralyzed" | "Poisoned" | "Burned" | "Asleep";

export function paralysis(pkm: Pokemon) {
    const success = Math.random() < 0.75;
    if (!success) {
        console.log(`${pkm.name} is paralyzed and couldn't move!`);
        return false
    }
}

export function poison(pkm: Pokemon) {
    console.log(`${pkm.name} was damaged by the poison!`);
    pkm.hp -= (pkm.hp * (1/8));
}

export function badlyPoisoned(pkm: Pokemon) {
    let poisonCount = (1/16);
    let dmg = pkm.maxHp - poisonCount;
    console.log(`${pkm.name} was damaged by the bad poison`);
    pkm.hp -= dmg;
    poisonCount += (1/16)
}


export function burn(pkm: Pokemon) {
    const dmg: number = Math.floor(pkm.maxHp * (1/8));
    pkm.hp -= dmg;
    console.log(`${pkm.name} is being damaged by the burn! It lost ${dmg}`);
}

export function sleep(pkm: Pokemon) {
    if (pkm.statusTurns! > 0) {
        console.log(`${pkm.name} is fast asleep!`);
        pkm.statusTurns!--;
        return false;
    } else {
        console.log(`${pkm.name} woke up!`);
        pkm.statusTurns = null;
        pkm.setEffect(null);
    }
}

