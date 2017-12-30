const fs = require('fs');
const path = require('path');

const asyncLoader = (name) => {
  const filename = path.join(path.dirname(process.mainModule.filename), path.extname(name) ? name : `${name}.js`);

  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) return reject(err);

      let resource;

      eval(`resource = async function AsyncRequire(exports, require, module, __filename, __dirname) {
try {
  ${data.toString()}

  resolve(module.exports);
} catch (__err__) {
  reject(__err__);
}
      }`);

      resource(exports, require, module, __filename, __dirname);
    });
  });
};

module.exports = asyncLoader;
