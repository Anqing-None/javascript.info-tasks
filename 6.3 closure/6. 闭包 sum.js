// importance: 4

// ---

// # 闭包 sum

// 编写一个像 `sum(a)(b) = a+b` 这样工作的 `sum` 函数。

// 是的，就是这种通过双括号的方式（并不是错误）。

// 举个例子：

// ```js
// sum(1)(2) = 3
// sum(5)(-1) = 4
// ```

function sum(a) {
  return (b) => a + b;
}

console.log(sum(1)(2));
