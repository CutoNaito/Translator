import net from 'net';
import * as readline from 'readline';
import "dotenv/config";

if (process.env.PORT === undefined) {
    throw new Error('PORT is not defined');
};

if (process.env.HOST === undefined) {
    throw new Error('HOST is not defined');
};

const prompt = readline.createInterface({
    input: process.stdin,
});

const client = new net.Socket();

const port = parseInt(process.env.PORT);
const host = process.env.HOST;

client.connect(port, host, () => {
    console.log('Connected');

    prompt.on('line', (line) => {
        client.write(line);
    });

    client.on('data', (data) => {
        console.log(data.toString());
    });
});