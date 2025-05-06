import {askQuestion} from '../pokemon/battle.js';
import Player from '../player/player.js';
import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({port:8080});
type ConnectedPlayers = Record<string, { player: Player, socket: WebSocket }>
const connectedPlayers: ConnectedPlayers = {};

wss.on('connection', (ws) => {
    console.log("Player is connected. Awaiting opponent...");
    const startGame = async() => {
        const playerId = crypto.randomUUID();
        const playerName = await askQuestion("What is your name?\n");
        const myPlayer = new Player(playerName, playerId);
        ws.send(JSON.stringify({
            type: 'welcome',
            playerName,
            playerId
        }));
        battle(myPlayer, opponent);
    };
    startGame();
});
