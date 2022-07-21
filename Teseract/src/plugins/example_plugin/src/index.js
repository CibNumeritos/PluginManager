
import { world } from "mojang-minecraft";

world.registerCommand('hello', 'Say hello!', [], false, (command) => {

    command.sender.isAlive();

}, { });