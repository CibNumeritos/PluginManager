
import { world } from "mojang-minecraft";
import { log, warn, error } from '../content_logging/index';

class CustomCommand { };

export class Command {

    constructor() {
        world.events.beforeChat.subscribe(({ sender, message, cancel, sendToTargets, targets }) => {

            if (!message.startsWith(prefix)) return;

            sendToTargets = false;
            targets = [];

            const [typed_command, ...parameters] = message.slice(prefix.length).trim().split(/\s+/g);

            if (!this.registered_commands.has(typed_command.substring(1))) {

                try {

                    sender.command.run(`tellraw @s {"rawtext":[{"text":"§c"},{"translate":"commands.generic.unknown", "with": ["${typed_command}"]}]}`);

                } catch (error) {

                    error(`Failed to execute ${typed_command} as ${sender.name} (unknown command).\n${error}: ${error.stack}`);

                };

            } else if (this.registered_commands.get(typed_command).permission > sender.getPermission()) {

                try {

                    sender.command.run(`tellraw @s {"rawtext":[{"text":"§c"},{"translate":"commands.generic.unknown", "with": ["${typed_command}"]}]}`);

                } catch (error) {

                    error(`Failed to execute ${typed_command} as ${sender.name} (missing permission).\n${error}: ${error.stack}`);

                };

            };

            const command = this.registered_commands.get(typed_command.substring(1));
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

            this.registered_commands.set(name,
                {
                    description: description,
                    aliases: aliases,
                    permission: permission,
                    callback: callback,
                    parameters: parameters
                }
            );

        } catch (error) {

            error(`Failed to register ${name} command.\n${error} : ${error.stack}`)

        };

    };

};

/**
 * @remarks A class that wraps the custom chat commands registered using Teseract Wrapper.
 */
export const command = new Command;