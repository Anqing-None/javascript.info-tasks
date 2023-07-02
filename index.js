// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

function User() {
  console.log(JSON.stringify(new.target));
  if (new.target) {
    console.log('使用了new关键字调用');
  } else {
    console.log('正常调用。');
  }
}

const a = new User();

const b = User();
