/**
 * 
 * importance: 4

---

# 计算阶乘

自然数的 [阶乘](https://en.wikipedia.org/wiki/Factorial) 是指，一个数乘以 `数字减去 1`，然后乘以 `数字减去 2`，以此类推直到乘以 `1`。`n` 的阶乘被记作 `n!`。

我们可以将阶乘的定义写成这样：

```js
n! = n * (n - 1) * (n - 2) * ...*1
```

不同 `n` 的阶乘的值：

```js
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
```

任务是编写一个函数 `factorial(n)` 使用递归调用计算 `n!`。

```js
alert( factorial(5) ); // 120
```

P.S. 提示：`n!` 可以被写成 `n * (n-1)!`，比如 `3! = 3*2! = 3*2*1! = 6`。
 * 
 */

function factorial(n) {
  if (n > 1) {
    return factorial(n - 1) * n;
  } else {
    return 1;
  }
}

function factorial2(n) {
  if (n === 1) {
    return 1;
  } else {
    return factorial2(n - 1) * n;
  }
}

console.time('factorial2');
console.log(factorial2(5));
console.timeEnd('factorial2');

console.time('factorial');
console.log(factorial(5));
console.timeEnd('factorial');
