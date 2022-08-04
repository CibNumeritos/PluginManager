
import { registered_plugins } from "../plugins/plugin_registry";
import { log, warn } from '../content_logging/index';
import '../class/modification_load';
/*

const teseract_deploy_start = Date.now();

log(`Teseract - allocated`);

import('../class/modification_load').then(() => {

        log(`Teseract - succesfully deployed class modifications in ${Date.now() - teseract_deploy_start} ms`);

        for (const plugin of registered_plugins) {

            const plugin_deploy_start = Date.now();

            log(`Plugins - ${plugin} plugin: allocated`);

            import(`../plugins/${plugin}/src/index.js`)

                .then(() => {

                    log(
                        `Plugins - ${plugin} plugin loaded in ${Date.now() - plugin_deploy_start} ms`
                    );

                })

                .catch((error) => {

                    warn(
                        `Plugins - failed to load ${plugin} plugin (operation time: ${Date.now() - plugin_deploy_start}).\n${error} : ${error.stack}`
                    );

                });

        };

    })

    .catch((error) => {

        warn(
            `Teseract - failed to load Teseract Wrapper (operation time: ${Date.now() - plugin_deploy_start}).\n${error} : ${error.stack}`
        );

    });
*/