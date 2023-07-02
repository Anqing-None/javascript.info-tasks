// importance: 5

// ---

// # 每秒输出一次

// 编写一个函数 `printNumbers(from, to)`，使其每秒输出一个数字，数字从 `from ` 开始，到 `to` 结束。

// 使用以下两种方法来实现。

// 1. 使用 `setInterval`。
// 2. 使用嵌套的 `setTimeout`。

function printNumbers(from, to) {
  const timer = setInterval(() => {
    if (from >= to) {
      clearInterval(timer);
    }
    console.log(from);
    from++;
  }, 1000);

  // setTimeout(function printNum() {
  //   console.log(from);
  //   from++;

  //   if (from < to) {
  //     setTimeout(() => {
  //       printNum();
  //     }, 1000);
  //   }
  // }, 1000);
}

printNumbers(0, 10);
