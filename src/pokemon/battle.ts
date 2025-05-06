import * as readline from 'readline';
import Player from '../player/player.js';
export function askQuestion(query: string): Promise<string> {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve) => {
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
};

export function battle(self: Player, opp: Player) {
    while (self.pokemon.length > 0) {
        console.log(`${self.name}'s ${self.field!.name} (HP: ${self.field!.hp})`)
        console.log(`1. ${self.field!.moveset![0]}\n
                    2. ${self.field!.moveset![1]}\n
                    3. ${self.field!.moveset![2]}\n
                    4. ${self.field!.moveset![3]}\n`)
        const chooseMove = await askQuestion("Choose a move 1-4")
