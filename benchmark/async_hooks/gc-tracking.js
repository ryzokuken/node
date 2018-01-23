'use strict';
const common = require('../common.js');
const { AsyncResource } = require('async_hooks');

const bench = common.createBenchmark(main, {
  n: [1e6],
  method: [
    'trackingEnabled',
    'trackingDisabled',
  ]
}, {
  flags: ['--expose-gc']
});

function endAfterGC(n) {
  setImmediate(() => {
    global.gc();
    setImmediate(() => {
      bench.end(n);
    });
  });
}

<<<<<<< HEAD
function main(conf) {
  const n = +conf.n;

  switch (conf.method) {
=======
function main({ n, method }) {
  var i;
  switch (method) {
>>>>>>> 1b6cb94761... benchmark: refactor
    case 'trackingEnabled':
      bench.start();
      for (i = 0; i < n; i++) {
        new AsyncResource('foobar');
      }
      endAfterGC(n);
      break;
    case 'trackingDisabled':
      bench.start();
      for (i = 0; i < n; i++) {
        new AsyncResource('foobar', { requireManualDestroy: true });
      }
      endAfterGC(n);
      break;
    default:
      throw new Error(`Unsupported method "${method}"`);
  }
}
