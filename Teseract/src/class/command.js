
import { world } from "mojang-minecraft";

class CustomCommand { };

export class Command {

    constructor() {
        world.events.beforeChat.subscribe(({ sender, message, cancel, sendToTargets, targets }) => {

            if (!message.startsWith(prefix)) return;

            sendToTargets = false,
                targets = [];

            const [typed_command, ...parameters] = message.slice(prefix.length).trim().split(/\s+/g);
            const command = this.registered_commands.has(typed_command.substring(1));

            if (!this.registered_commands.has(typed_command.substring(1)) || !sender.isStaff()) {

                try {

                    sender.command.run(`tellraw @s {"rawtext":[{"text":"§c"},{"translate":"commands.generic.unknown", "with": ["${typed_command}"]}]}`);

                } catch (error) {

                    console.warn(`[DEBUG - COMMAND ERROR] ${error} : ${error.stack}`)

                };

            };

            const args = message.match(/(?<=\").*?(?=\")/g);
            const target = Array.from(world.getPlayers()).find(player => {
                player.nameTag
                    ==
                    message
                        .match(/(?<=\@).?/)
                        ?.[0]
                        .replace(/\"/g, '');
            });

        });
    };

    registered_commands = new Map();

    register(name, description, aliases, permission, callback, parameters) {

        try {
            
        } catch (error) {
            
        }

    };

};