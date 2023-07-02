// importance: 5

// ---

// # 为 counter 添加 set 和 decrease 方法

// 修改 `makeCounter()` 代码，使得 counter 可以进行减一和设置值的操作：

// - `counter()` 应该返回下一个数字（与之前的逻辑相同）。
// - `counter.set(value)` 应该将 `count` 设置为 `value`。
// - `counter.decrease()` 应该把 `count` 减 1。

// 查看沙箱中的代码获取完整使用示例。

// P.S. 你可以使用闭包或者函数属性来保持当前的计数，或者两种都写。

// 函数属性
function makeCounter() {
  function counter() {
    counter.count++;
    console.log(counter.count);
  }

  counter.count = 0;

  counter.set = (value) => {
    counter.count = value;
    console.log(counter.count);
  };

  counter.decrease = () => {
    counter.count--;
    console.log(counter.count);
  };

  return counter;
}

const c = makeCounter();

c();

c.set(10);

c.decrease();

/**
 * 闭包
 * 
 * 
function makeCounter() {
  let count = 0;

  function counter() {
    count++;
    console.log(count);
  }

  counter.set = (value) => {
    count = value;
    console.log(count);
  };

  counter.decrease = () => {
    count--;
    console.log(count);
  };

  return counter;
}

const c = makeCounter();

c();

c.set(10);

c.decrease();
 */
