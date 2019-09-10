import exitHook from 'exit-hook';

import { getContainer, Nodule } from '@globality/nodule-config';
import '@globality/nodule-graphql';


import createApp from './app';


async function main() {
    exitHook(() => process.exit(0));

    const ip = process.env.PIKACHU__IP || '0.0.0.0';
    const port = process.env.PIKACHU__PORT || 3002;
    const debug = process.env.PIKACHU__DEBUG;

    const nodule = new Nodule({
        name: 'pikachu',
        testing: false,
        debug,
    });

    const { terminal } = getContainer();

    terminal.newline();
    terminal.show('initializing', nodule.metadata.name);
    await nodule.fromEnvironment().fromSecretsManager().load();

    const app = createApp();
    const server = app.listen(port, ip);

    server.on('listening', () => {
        terminal.show('listening on', `${ip}:${port}`);
        terminal.newline();
    });

}


main().catch(error => global.console.log(error));
