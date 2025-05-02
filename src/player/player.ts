import { warn } from 'console';
import {Pokemon, Item} from '../pokemon/pokemon.js';

export class Potion implements Potions {
    name: string;
    constructor(name: string, private amount: number) {this.name = name;}
    heal(p: Pokemon) {
        const currentHp = p.hp;
        p.hp = Math.min(p.hp + this.amount, p.maxHp);
        console.log(`${p.name} healed for ${p.hp - currentHp} HP using a ${this.name}!`);
    }
}

const nPotion: Potion = new Potion("Potion", 20);
const sPotion: Potion = new Potion("Super Potion", 60);
const hPotion: Potion = new Potion("Hyper Potion ", 100);

export default class Player {
    name: string;
    id: unknown;
    pokemon!: Pokemon[];
    field: Pokemon | null = null;
    fainted: Pokemon[] = [];
    items: Potion[] = [nPotion, sPotion, hPotion];
    constructor(name: string, id: unknown) {
        this.name = name;
        this.id = id;
    }
    faint(pkm: Pokemon) {
        this.fainted.push(pkm);
        this.field = null;
    }
    setField(pkm: Pokemon): void {
        if (this.pokemon.length <= 0) {
            console.error("There are no Pokemon in your party!");
            return;
        }
        const starter = this.pokemon.find(f => f === pkm);
        if (!starter) {
            console.error("That Pokemon is not in your party!")
            return;
        }
        this.field = starter;
        console.log(`${starter.name} was sent out to battle!`);
    }

    pickPkm(pkm: Pokemon) {
        this.pokemon.push(pkm);
    }
    use(item: Potion) {
        for (let thing of this.items) {
            if (thing === item) {
                item.heal(this.field);
            } else {
                console.log("The item specified is not available!");
            }
        }
    }
}


interface Potions {
    name: string;
    heal(pkm: Pokemon): void;
}
