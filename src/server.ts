import net from 'net';
import "dotenv/config";

import { CommandController } from './commands/CommandController';

if (process.env.PORT === undefined) {
    throw new Error('PORT is not defined');
};

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        if (CommandController(data.toString()) != undefined) {
            socket.write(CommandController(data.toString())!);
        } else {
            socket.write('TRANSLATEDERR"Command not found"');
        }
    });
});

server.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`);
});