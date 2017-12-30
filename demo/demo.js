const load = require('../index');

const log = (...args) => console.log.bind(console, ...args);

(async () => {
  const value1 = await load('./resource1');
  const value2 = await load('./resource2');
  const value3 = await load('./resource3');

  log('1) value1:')(value1);
  log('1) value2:')(value2);
  log('1) value3:')(value3);
})();

load('./resource1').then(log('2) Loading ./resource1:'));
load('./resource2').then(log('2) Loading ./resource2:'));
load('./resource3').then(log('2) Loading ./resource3:'));

load('./resource1')
  .then(log('3) Single'));

load(['./resource1', './resource2', './resource3'])
  .then(log('4) Multiple'));

Promise.all([load(['./resource2', './resource3']), load('./resource1')]).then(log('5) Multiple'));
