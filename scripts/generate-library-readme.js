const fs = require('fs');
const path = require('path');

const rootReadme = fs.readFileSync(path.resolve(__dirname, '../README.md'), 'utf-8');
const libraryName = 'ng-zorro-v5-experimental-view';

fs.writeFileSync(path.resolve(__dirname, `../dist/${libraryName}/README.md`), `${rootReadme}`);
