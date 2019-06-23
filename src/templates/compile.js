const pug = require('pug');
const { writeFileSync } = require('fs');

const tableFuncStr = pug.compileFileClient(`${__dirname}/table.pug`, {
  name: 'table',
  inlineRuntimeFunctions: false
});

writeFileSync(`${__dirname}/templates.js`, tableFuncStr);
