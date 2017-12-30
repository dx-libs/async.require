const asyncLoader = require('./lib/asyncLoader');

module.exports = (resourceName) => {
  if (resourceName instanceof Array) {
    return Promise.all(resourceName.map(resource => asyncLoader(resource)));
  }
  return asyncLoader(resourceName);
};
