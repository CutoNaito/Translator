import { writeFileSync } from "fs";

export function FileLog(data: string) {
    const file = 'log/log.txt';

    writeFileSync(file, data);
}