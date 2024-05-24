// 16个字节
// let buffer = new ArrayBuffer(16);

// Float64Array 是一副眼镜，他将16个字节视为16*8个比特
// 它以64个比特为一个单位，读取64个比特表示的信息

// 在二进制下，0和1可以表示用户想表示的任何信息

// 它可能是图片、excel文档等任何文件，不同类型的文件可以用不同类型的应用打开，而在代码中，它们就只是一堆0和1

// Uint8Array 以一个字节为单位，读取ArrayBuffer 视为无符号整数
// Uint16Array 以两个字节为单位，读取ArrayBuffer 视为无符号整数
// Uint32Array 以四个字节为单位，读取ArrayBuffer 视为无符号整数
// Float32Array 以四个字节为单位，读取ArrayBuffer 视为浮点数

// ArrayBuffer的读取与写入必须使用视图，如Uint8Array、Uint16Array，这些统称为TypedArray

// TypedArray只是一个名称

// TypedArray有五种函数重载

// 1. TypedArray(buffer, [byteOffset], [length])
// let view = new Float64Array(buffer);

// 2. TypedArray(object)
// view = new Uint16Array([1, 2, 3, 4]);

// 3. TypedArray(typedArray)
// console.log(new Uint8Array(view));

// view[0] = 1;

// view.forEach((v) => console.log(v));

// console.log(view.byteLength);

// console.log(view);

const arr = new Uint8Array([0, 1, 2, 3]);

const cloned = arr.subarray([0, arr.length - 1]);

// arr.set(new Uint8Array([4, 5, 6]), 3);

// console.log(arr.length);

const u8arr = [new Uint8Array([1, 2, 3]), new Uint8Array([4, 5, 6])];

function concat(arr) {
  let length = 0;

  arr.forEach((v) => {
    length += v.length;
  });

  const newU8 = new Uint8Array(length);

  let offset = 0;
  arr.forEach((v) => {
    newU8.set(v, offset);
    offset += v.length;
  });

  return newU8;
}

const con = concat(u8arr);
console.log(con);
