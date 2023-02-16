import { readFileSync } from "fs";
import "dotenv/config"
import net from 'net';
import { getIPRange } from "get-ip-range";

function Connect(ip: string, port: number, input: string) {
    try {
        const connection = net.createConnection(port, ip, () => {
            connection.write('TRANSLATELOCL"'+input+'"');
        });
    } catch (error) {
        throw new Error("Connection failed");
    }
}

export function Ping() {
    return "pong";
};

export function TRANSLATELOCL(word: string) {
    const rawdata = readFileSync("src/commands/localwords.json");
    const localwords = JSON.parse(rawdata.toString());

    if(!localwords[word]) {
        throw new Error("Word not found");
    }

    const result = 'TRANSLATEDSUC"'+localwords[word]+'"';

    return result;
}

export function TRANSLATESCAN(input: string) {
    const addresses = getIPRange(process.env.IPV4_START!, process.env.IPV4_END!);
    for (let i = 0; i < addresses.length; i++) {
        try {
            Connect(addresses[i], parseInt(process.env.PORT!), input);
        } catch (error) {
            console.log(error);
        }
    }
}