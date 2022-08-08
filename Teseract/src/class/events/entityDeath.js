
import { EntityHealthComponent, world, Entity } from "mojang-minecraft";

/**
 * @remarks An event that fires when an entity dies
 */
export class EntityDeathEvent {

    constructor(cause, damage, damagingEntity, hurtEntity, projectile) {

        this.cause = cause;
        this.damage = damage;
        this.damagingEntity = damagingEntity;
        this.deadEntity = hurtEntity;
        this.projectile = projectile;

    };

};

export class EntityDeathEventSignal {

    /**
     * @remarks Adds a callback that will be called when an entity dies
     * @param {(argument: EntityDeathEvent) => void} argument
     */
    subscribe(argument) {

        argument["entityDeath"] = true;

        let hurtEvent = world.events.entityHurt.subscribe((event) => {

            const { cause, damage, damagingEntity, hurtEntity, projectile } = event;
           
            if (argument["entityDeath"] !== true) world.events.entityHurt.unsubscribe(hurtEvent);

            if (hurtEntity.getComponent("health").current <= 0) {

                argument(new EntityDeathEvent(cause, damage, damagingEntity, hurtEntity, projectile));

            };

        });

        return argument;
    };

    /**
     * @remarks Removes a callback from being called when an entity dies
     * @param {(argument: EntityDeathEvent) => void} argument 
     */
    unsubscribe(argument) {
        argument["entityDeath"] = false;
    };
};