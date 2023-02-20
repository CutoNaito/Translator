import net from 'net';
import "dotenv/config";
import { FileLog } from '../src/commands/Logger';

import { CommandController } from '../src/commands/CommandController';

if (process.env.PORT === undefined) {
    throw new Error('PORT is not defined');
};

const host = process.env.HOST;

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        if (CommandController(data.toString()) != undefined) {
            socket.write(CommandController(data.toString())!);
        } else {
            socket.write('TRANSLATEDERR"Command not found"');
        }
    });

    socket.on('error', (err) => {
        FileLog("Error: " + err);
    });

    socket.on('connection', () => {
        FileLog("Connected to client from address: " + socket.remoteAddress);
    });
});

server.listen(parseInt(process.env.PORT), host, () => {
    FileLog("Server started on address: " + host + ":" + process.env.PORT);
});