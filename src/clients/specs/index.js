import { readdirSync, readFileSync } from 'fs';

const specsDict = {};
const specs = {};


readdirSync(__dirname).forEach((file) => {
    if (file.endsWith('.json')) {
        const [service, version] = file.split('.');
        const spec = JSON.parse(readFileSync(`${__dirname}/${file}`));
        if (!specsDict[service]) {
            specsDict[service] = {};
        }
        specsDict[service][version] = spec;
    }
});

specs.charmander = specsDict.charmander.v1;

export default specs;
