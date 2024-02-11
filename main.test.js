// main.test.js
require('dotenv').config();
const fs = require('fs');
const path = require('path');

const fileName = process.argv[2] + '.test.js';

if (!fileName) {
  console.error('Erro: Forneça o nome do arquivo de teste como argumento.');
  process.exit(1);
}

const dir = './src/tests/';
const pathFile = path.join(dir, fileName);

if (!fs.existsSync(pathFile)) {
  console.error(`Erro: O arquivo "${fileName}" não foi encontrado.`);
  process.exit(1);
}

require(path.resolve(pathFile));