/**
编写一个函数 sumTo(n) 计算 1 + 2 + ... + n 的和。

举个例子：

sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
用三种方式实现：

使用循环。
使用递归，对 n > 1 执行 sumTo(n) = n + sumTo(n-1)。
使用 等差数列 求和公式.
结果示例：

function sumTo(n) { ... 你的代码 ...  }

alert( sumTo(100) ); // 5050
P.S. 哪种解决方式最快？哪种最慢？为什么？

P.P.S. 我们可以使用递归来计算 sumTo(100000) 吗？ RangeError: Maximum call stack size exceeded

*/

function sumTo1(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function sumTo2(n) {
  if (n > 1) {
    return n + sumTo2(n - 1);
  }
  return n;
}

function sumTo3(n) {
  return ((1 + n) * n) / 2;
}

console.time('sumTo1');
console.log('sumTo1: ', sumTo1(100));
console.timeEnd('sumTo1');

console.time('sumTo2');
console.log('sumTo2: ', sumTo2(100));
console.timeEnd('sumTo2');

console.time('sumTo3');
console.log('sumTo3: ', sumTo3(100));
console.timeEnd('sumTo3');
