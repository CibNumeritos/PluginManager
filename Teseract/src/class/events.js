
import { BeforeChatEvent, Events, world } from "mojang-minecraft";
import { EntityDeathEvent, EntityDeathEventSignal } from "./events/entityDeath";

Events.prototype.entityDie = new EntityDeathEventSignal();