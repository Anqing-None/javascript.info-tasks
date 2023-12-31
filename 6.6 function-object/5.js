// importance: 2

// ---

// # 任意数量的括号求和

// 写一个函数 `sum`，它有这样的功能：

// ```js
// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15
// ```

// P.S. 提示：你可能需要创建自定义对象来为你的函数提供基本类型转换。

function sum(n) {
  function innerSum(num) {
    innerSum.total += num;
    return innerSum;
  }

  innerSum.total = n;

  innerSum.toString = () => {
    return innerSum.total;
  };

  return innerSum;
}

// // console.log(sum(1));

// sum(1)(2) == 3; // 1 + 2
// sum(1)(2)(3) == 6; // 1 + 2 + 3
// sum(5)(-1)(2) == 6;
// sum(6)(-1)(-2)(-3) == 0;
console.log(sum(0)(1)(2)(3)(4)(5).toString());
