function makeCounter() {
  let count = 0;

  const counter = () => {
    return count++;
  };

  return counter;
}

const counter = makeCounter();

counter();
