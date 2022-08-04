
// 

import { world } from 'mojang-minecraft';
import './Teseract/src/index'

world.events.tick.subscribe(() => {
    for (const p of world.getPlayers()) {
        p.test()
    }
})