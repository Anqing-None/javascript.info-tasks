// importance: 5

// ---

// # 创建 new Calculator

// 创建一个构造函数 `Calculator`，它创建的对象中有三个方法：

// - `read()` 使用 `prompt` 请求两个值并把它们记录在对象的属性中。
// - `sum()` 返回这些属性的总和。
// - `mul()` 返回这些属性的乘积。

// 例如：

// ```js
// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );
// ```

// [demo]

function Calculator() {
  this.read = function (a, b) {
    this.a = a;
    this.b = b;
  };
  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

const cal = new Calculator();

console.log(cal);

cal.read(1, 2);
console.log(cal.sum());
console.log(cal.mul());

// const readline = require('node:readline');

// function Calculator() {
//   this.read = function () {
//     const p = new Promise((resolve, reject) => {
//       let a;
//       let b;
//       const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//       });

//       rl.question('enter a number:', (num) => {
//         a = num;
//         rl.question('enter b number:', (num) => {
//           b = num;
//           rl.close();
//           resolve({ a, b });
//         });
//       });
//     });

//     p.then((res) => {
//       const { a, b } = res;
//       this.a = a;
//       this.b = b;
//       console.log(res);
//     });
//   };

//   this.sum = function () {};

//   this.mul = function () {};
// }

// const calc = new Calculator();
// calc.read();
