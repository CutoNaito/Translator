import { Ping, TRANSLATELOCL } from "./TranslateCommands"

export function CommandController(data: string) {
    try {
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
    } catch (error) {
        return "Error: This command does not exist";
    }
}