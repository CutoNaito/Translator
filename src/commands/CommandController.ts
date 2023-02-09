import { Ping, TRANSLATELOCL } from "./TranslateCommands"

export function CommandController(data: string) {
    if (data === "ping") {
        return Ping()
    }

    if (data.includes("TRANSLATELOCL")) {
        try {
            const word = data.split("\"")[1];
            return TRANSLATELOCL(word);
        } catch (error) {
            return 'TRANSLATEDERR"Word not found"';
        }
    }
}