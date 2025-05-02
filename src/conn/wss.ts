import * as readline from 'readline';
import { WebSocketServer } from 'ws';
import Player from '../player/player.js';
import { type } from 'os';
import { warn } from 'console';

const wss = new WebSocketServer({port:8080});
const connectedPlayers: Record<string, WebSocket> = {};

wss.on('connection', (ws) => {
    console.log("Player is connected. Awaiting opponent...");
    const askQuestion = (query: string): Promise<string> => {
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
    (async() => {
        const playerId = crypto.randomUUID();
        const playerName = await askQuestion("What is your name?\n");
        const myPlayer = new Player(playerName, playerId);
        ws.send(JSON.stringify({
            type: 'welcome',
            playerName,
            playerId
        }));
        ws.on('message', (msg) => {
            ;
        });
    })();
});
