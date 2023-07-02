function slowCalc(x) {
  sleep(2);
  return x;
}

function sleep(second) {
  let now = new Date().getTime();
  let dest = now + second * 1000;
  while (new Date().getTime() < dest) {}
}

function cacheDecorator(fun) {
  const cache = new Map();
  function wrapedFun(x) {
    console.log(cache);
    if (cache.has(x)) {
      return cache.get(x);
    }
    const ret = fun(x);
    cache.set(x, ret);
    return ret;
  }
  return wrapedFun;
}

const worker = {
  a: 1,
  slow(x) {
    sleep(1);
    return x * this.a;
  },
};

const b = worker.slow(2);
console.log(b);