const { join } = require('path');
const fs = require('fs');
const zlib = require('zlib');
const crypto = require('crypto');

const file = join(__dirname, '..', 'data', 'loremipsum.txt');

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(crypto.createCipher('aes192', 'a_shared_secret'))
  .pipe(fs.createWriteStream(`${file}.gz`))
  .on('finish', () => console.log('File compressed'));
