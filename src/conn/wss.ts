import { WebSocketServer } from 'ws';
const wss = new WebSocketServer({port:8080});
while (true) {
    try {
        wss.on('connection', (ws: unknown) => {
            console.log("Player is connected. Awaiting opponent...");
        });
    } catch (e) {
        console.error("Error connecting to server");
    }
}

