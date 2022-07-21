
import { Location, Player, world } from "mojang-minecraft";

/**
 * @remarks Check if the player is alive.
 * @example Player.isDead(); // Output true (Player HP: 9)
 * @returns {Boolean} A boolean wich value is depending on if the player is alive.
 */
Player.prototype.isAlive = function () {

    try {

        return (
            this.getComponent("minecraft:health").current <= 0
        );

    } catch (error) {

        error(`Failed to check if ${this.name} is alive.\n${error}`);

    };
};

/**
 * @remarks Kicks this player.
 * @param {string} reason Resaon for wich the player will be kicked.
 * @example player.kick('For being too beautiful);
 */
Player.prototype.kick = function (reason) {

    try {

        world.getDimension('overworld').runCommand(`kick "${this.name}" ${reason}`)

    } catch (error) {

        error(`Failed to kick ${this.name}.\n${error}`);

    };
};

/**
 * @remarks Get the score of this player on an objective.
 * @param {string} objective Objective to get this player score from.
 * @returns {number|null} Player score or null if error.
 * @example getScore('Kills', player) // Output: 1
 */
Player.prototype.getScore = function (objective) {

    try {

        const objective = world.scoreboard.getObjective(objective);
        return objective.getScore(this.scoreboard);

    } catch {

        error(`Failed to get ${this.name}'s score.\n${error}`);
        return null;

    };
};

/**
 * @remarks Get the dimension ID of the dimension this player is currently in.
 * @returns {string} Dimension ID of the dimension this player is currently in.
 */
Player.prototype.getDimensionID = function () {

    try {

        return this.dimension.id;

    } catch (error) {

        error(`Failed to get dimension id of ${this.name}.\n${error}`);

    };

};

/**
 * @remarks Check if this player has the specified item.
 */
Player.prototype.hasItem = function () {};

/**
 * @remarks Compare if a location is between two locations. 
 * @param {Location} locationA The first location to compare.
 * @param {Location} locationB The second location to compare.
 * @param {Location} locationC The third location that should be between A and B locations.
 * @return {boolean} If the location C is between A and B locations. 
 */
Player.prototype.betweenLocations = function (locationA, locationB, locationC) {
    try {

        const XYZa = [
            locationA.x,
            locationA.y,
            locationA.z
        ];
        const XYZb = [
            locationB.x,
            locationB.y,
            locationB.z
        ];
        const XYZc = [
            locationC.x,
            locationC.y,
            locationC.z
        ];
        return betweenXYZ =
            XYZc.length
            ===
            XYZc.filter((c, i) => (c >= Math.min(XYZa[i], XYZb[i])) && (c <= Math.max(XYZa[i], XYZb[i]))).length;

    } catch (error) {

        error(`Failed to compare A, B and C locations.\n${error} : ${error.stack}`);

    };

};

/**
 * @remarks
 */
Player.prototype.getPermission() = function () { };

/**
 * @remarks
 */
Player.prototype.isStaff() = function () { };

/**
 * @remarks Represents the version 4 universal unique identifier regarding this player.
 */
Player.prototype.uuid = null;

/**
 * @remarks Represents the current rank this player has.
 */
Player.prototype.rank = null;

p

// UUID and rank definition
world.events.playerJoin.subscribe(({ player }) => { });