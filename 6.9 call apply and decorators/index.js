function slowCalc(x) {
  sleep(2);
  return x;
}

function sleep(second) {
  let now = new Date().getTime();
  let dest = now + second * 1000;
  while (new Date().getTime() < dest) { }
}

function cacheDecorator(fun) {
  const cache = new Map();
  function wrapedFun(x) {
    if (cache.has(x)) {
      return cache.get(x);
    }
    const ret = fun.call(this, x);
    cache.set(x, ret);
    return ret;
  }
  return wrapedFun;
}

const worker = {
  a: 10,
  slow(x) {
    sleep(1);
    console.log('this.a', this.a);
    return x * this.a;
  },
};

worker.slow = cacheDecorator(worker.slow);

worker.slow(2);


