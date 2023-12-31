// importance: 5

// ---

// # 节流装饰器

// 创建一个“节流”装饰器 `throttle(f, ms)` —— 返回一个包装器。

// 当被多次调用时，它会在每 `ms` 毫秒最多将调用传递给 `f` 一次。

// 与防抖（debounce）装饰器相比，其行为完全不同：
// - `debounce` 会在“冷却（cooldown）”期后运行函数一次。适用于处理最终结果。
// - `throttle` 运行函数的频率不会大于所给定的时间 `ms` 毫秒。适用于不应该经常进行的定期更新。

// 换句话说，`throttle` 就像接电话的秘书，但是打扰老板（实际调用 `f`）的频率不能超过每 `ms` 毫秒一次。

// 让我们看看现实生活中的应用程序，以便更好地理解这个需求，并了解它的来源。

// ** 例如，我们想要跟踪鼠标移动。**

//   在浏览器中，我们可以设置一个函数，使其在每次鼠标移动时运行，并获取鼠标移动时的指针位置。在使用鼠标的过程中，此函数通常会执行地非常频繁，大概每秒 100 次（每 10 毫秒）。

// ** 我们想要在鼠标指针移动时，更新网页上的某些信息。**

// ……但是更新函数 `update()` 太重了，无法在每个微小移动上都执行。高于每 100ms 更新一次的更新频次也没有意义。

// 因此，我们将其包装到装饰器中：使用 `throttle(update, 100)` 作为在每次鼠标移动时运行的函数，而不是原始的 `update()`。装饰器会被频繁地调用，但是最多每 100ms 将调用转发给 `update()` 一次。

// 在视觉上，它看起来像这样：

// 1. 对于第一个鼠标移动，装饰的变体立即将调用传递给 `update`。这很重要，用户会立即看到我们对其动作的反应。
// 2. 然后，随着鼠标移动，直到 `100ms` 没有任何反应。装饰的变体忽略了调用。
// 3. 在 `100ms` 结束时 —— 最后一个坐标又发生了一次 `update`。
// 4. 然后，最后，鼠标停在某处。装饰的变体会等到 `100ms` 到期，然后用最后一个坐标运行一次 `update`。因此，非常重要的是，处理最终的鼠标坐标。

// 一个代码示例：

// ```js
// function f(a) {
//   console.log(a);
// }

// // f1000 最多每 1000ms 将调用传递给 f 一次
// let f1000 = throttle(f, 1000);

// f1000(1); // 显示 1
// f1000(2); // (节流，尚未到 1000ms)
// f1000(3); // (节流，尚未到 1000ms)

// // 当 1000ms 时间到...
// // ...输出 3，中间值 2 被忽略
// ```

// P.S.参数（arguments）和传递给 `f1000` 的上下文 `this` 应该被传递给原始的 `f`。


function throttle(f, ms) {
  // 是否在冷却状态
  let isThrottle = false;
  let savedArg, savedThis
  function wraped(...args) {
    // 在冷却状态时，保存调用函数的参数，直接返回，不执行任何函数
    if (isThrottle) {
      savedArg = args;
      savedThis = this;
      return;
    }

    f.apply(this, args);
    // 调用函数后进入冷却状态
    isThrottle = true;
    // ms后重置冷却状态
    setTimeout(() => {
      isThrottle = false;
      // 执行最后一次调用，重置保存的函数调用参数
      if (savedThis) {
        // 这里必须使用wraped函数调用，因为还会进入下一个冷却循环
        wraped.apply(savedThis, savedArg)
        savedThis = savedArg = null;
      }
    }, ms);

  }
  return wraped;
}

function sayHi(msg) {
  console.log(`hi, ${msg}`)
}

const throttledSayHi = throttle(sayHi, 1000)

throttledSayHi(1)
throttledSayHi(2)
throttledSayHi(3)

