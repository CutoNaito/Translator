import { Ping, TRANSLATELOCL, TRANSLATESCAN } from "./TranslateCommands"

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

    if (data.includes("TRANSLATESCAN")) {
        try {
            const word = data.split("\"")[1];
            try {
                return TRANSLATELOCL(word);
            } catch (error) {
                return TRANSLATESCAN(word);
            }
        } catch (error) {
            return 'TRANSLATEDERR"Could not find this word in the network"';
        }
    }
}