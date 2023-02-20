import { readFileSync } from "fs";
import "dotenv/config"
import net from 'net';
import { getIPRange } from "get-ip-range";
import { FileLog } from "./Logger";

function Connect(ip: string, port: number, input: string) {
    try {
        const connection = net.createConnection(port, ip, () => {
            connection.write('TRANSLATELOCL"'+input+'"');
        });
        connection.end();
    } catch (error) {
        throw new Error("Connection failed");
    }
}

export function TRANSLATEPING() {
    try {
        const connection = net.createConnection(parseInt(process.env.PORT!), process.env.HOST!)

        connection.on('connect', () => {
            FileLog("Connected to server from address: " + process.env.HOST! + ":" + process.env.PORT!)
            connection.end();
        });
    
        return 'TRANSLATEPONG"Connection successful"';

    } catch (error) {
        throw new Error("Connection failed");
    };
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

export function TRANSLATESCAN(word: string) {
    const addresses = getIPRange(process.env.IPV4_START!, process.env.IPV4_END!);
    const ports: number[] = [];

    for (let i = parseInt(process.env.PORT_START!); i <= parseInt(process.env.PORT_END!); i++) {
        ports.push(i);
    }

    for (let i = 0; i < addresses.length; i++) {
        for (let j = 0; j < ports.length; j++) {
            try {
                Connect(addresses[i], ports[j], word);
            } catch (error) {
                throw new Error("Connection failed");
            }
        }
    }
}