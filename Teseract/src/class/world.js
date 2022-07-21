
import { World } from "mojang-minecraft";
import { command } from "./command";

World.prototype.registerCommand = function (name, description, aliases, permission, callback, parameters) {
    try {

        command.register(name, description, aliases, permission, callback, parameters)

    } catch (error) {

    };
};

World.prototype.getScore = function () { };

World.prototype.setTimeout = function () { };

World.prototype.setInterval = function () { };