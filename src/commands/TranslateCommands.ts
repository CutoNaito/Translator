import { readFileSync } from "fs";

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