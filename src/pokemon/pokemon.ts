import {Types} from "../types/types";
import { StatusEffect } from "../effects/effects";
type Type = typeof Types[keyof typeof Types];

export interface PokemonData {
    name: string;
    type: Type;
    atk: number;
    def: number;
    hp: number;
    maxHp: number;
    level: number;
    moveset: Move[];
}

export interface MoveData {
    name: string;
    type: Type;
    power: number;
    maxPP: number,
    currentPP: number;
    effect: StatusEffect;
}

export class Pokemon {
    level: number = 10;
    statusEffect!: StatusEffect | null;
    statusTurns!: number | null;
    constructor(
        public name: string,
        public type: Type,
        public atk: number,
        public def: number, 
        public hp: number,
        public maxHp: number,
        public moveset: Move[] | undefined
    ){}
    setEffect(effect: StatusEffect|null) {
        if (this.statusEffect === null) {
            this.statusEffect = effect;
        }
    }
    attack(target: Pokemon, move: number): boolean {
        if (target.hp < 1) {
            throw new Error("Error! Pokemon health is invalid");
        } else {
            const moveIndex = move - 1;
            const newMove: Move = this.moveset![moveIndex];
            if (!newMove) {
                console.log(`Error! Move number ${move} does not exist`); 
            }
            target.hp -= newMove.power;
            newMove.currentPP--;
            if (target.hp <= 0) {
                console.log(`${target.name}'s HP has been reduced to 0!\n${target.name} fainted!`);
                return true
            }
            return false
        }
    }
    static fromJSON(data: PokemonData): Pokemon {
        const moves: Move[] | undefined = data.moveset.map(Move.fromJSON);
        return new Pokemon(data.name, data.type, data.atk, data.def, data.hp, data.maxHp, moves);
    }
}

export class Move {
    constructor (
        public name: string,
        public type: Type,
        public power: number,
        public maxPP: number,
        public currentPP: number = this.maxPP,
        public effect: StatusEffect | null
    ){}
    static fromJSON(data: MoveData): Move {
        return new Move(data.name, data.type, data.power, data.maxPP, data.currentPP, data.effect);
    }
}
