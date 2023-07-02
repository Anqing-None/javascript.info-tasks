// importance: 4

// ---

// # 变量可见吗？

// 下面这段代码的结果会是什么？

// ```js
// let x = 1;

// function func() {
//   console.log(x); // ?

//   let x = 2;
// }

// func();
// ```

// P.S. 这个任务有一个陷阱。解决方案并不明显。

let x = 1;

function func() {
  console.log(x); // undefined / error: cant not use variable  before init

  let x = 2;
}

func();

// ReferenceError: Cannot access 'x' before initialization
