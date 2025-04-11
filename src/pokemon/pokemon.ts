import {Types} from "../types/types";
type Type = typeof Types[keyof typeof Types];
interface PokemonData {
    name: string;
    level: number;
    atk: number;
    hp: number;
    def: number;
    type: Type;
    moveset: Move[]
}

interface MoveData {
    name: string;
    type: Type;
    power: number;
    maxPP: number,
    currentPP: number;
}

export class Pokemon {
    name: string;
    level: number = 10;
    atk: number;
    def: number;
    type: Type;
    hp: number;
    moveset: Move[];
    constructor(name:string, atk:number, def:number, type: Type, hp: number,  moveset: Move[]) {
        this.name = name;
        this.atk = atk;
        this.def = def;
        this.type = type;
        this.hp = hp
        this.moveset = moveset;
    }
    attack(target: Pokemon, move: number): boolean {
        if (target.hp < 1) {
            throw new Error("Error! Pokemon health is invalid");
        } else {
            const moveIndex = move - 1;
            target.hp -= this.moveset[moveIndex].power;
            this.moveset[moveIndex].currentPP--;
            if (target.hp <= 0) {
                console.log(`${target.name}'s HP has been reduced to 0!\n${target.name} fainted!`);
                return true
            }
            return false
        }
    }
    static fromJSON(data: PokemonData): Pokemon {
        const moves = data.moveset.map(Move.fromJSON);
        return new Pokemon(data.name, data.atk, data.def, data.type, data.hp, moves);
    }
}

export class Move {
    constructor (
        public name: string,
        public type: Type,
        public power: number,
        public maxPP: number,
        public currentPP: number = this.maxPP
    ){}
    static fromJSON(data: MoveData): Move {
        return new Move(data.name, data.type, data.power, data.maxPP, data.currentPP);
    }
}
