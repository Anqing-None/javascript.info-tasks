// 16个字节
let buffer = new ArrayBuffer(16);

// Float64Array 是一副眼镜，他将16个字节视为16*8个比特
// 它以64个比特为一个单位，读取64个比特表示的信息

// 在二进制下，0和1可以表示用户想表示的任何信息

// 它可能是图片、excel文档等任何文件，不同类型的文件可以用不同类型的应用打开，而在代码中，它们就只是一堆0和1

const view = new Float64Array(buffer);

view[0] = 1;

view.forEach((v) => console.log(v));

// console.log(view.byteLength);

// console.log(buffer);
