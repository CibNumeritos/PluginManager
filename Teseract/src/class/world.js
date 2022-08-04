
import { World, world } from "mojang-minecraft";
import { command } from "./command";
import { log, warn } from '../content_logging/index';
World.prototype.registerCommand = function (name, description, aliases, permission, callback, parameters) {
    try {

        command.register(name, description, aliases, permission, callback, parameters)

    } catch (error) {

    };
};

World.prototype.getScore = function () { };

/**
 * @remarks Sets a tick-based interval.
 * @param {() => void} callback Callback to call until the delay finish.
 * @param {number} tick Time (in ticks) until the callback is called.
 */
World.prototype.setTimeout = function (callback, tick) {

    let current_tick = 0
    let loop = true;
    const tick_event = world.events.tick.subscribe((data) => {

        if (current_tick === 0) current_tick = data.currentTick + tick

        try {

            if (current_tick <= data.currentTick) {

                callback();

                world.events.tick.unsubscribe(tick_event);

            };

        } catch (error) {

            console.warn(`${error} : ${error.stack}`);

        };

    });

};

/**
 * @remarks Sets a tick-based interval.
 * @param {() => void} callback Callback to call until the delay finish.
 * @param {number} tick Time (in ticks) until the callback is called.
 */
World.prototype.setInterval = function (callback, tick) {

    let current_tick = 0
    let loop = true;
    const tick_event = world.events.tick.subscribe((data) => {

        if (current_tick === 0) current_tick = data.currentTick + tick

        try {

            if (current_tick <= data.currentTick) {

                callback();

                current_tick = data.currentTick + tick;

            };

        } catch (error) {

            console.warn(`${error} : ${error.stack}`);

        };

    });

};