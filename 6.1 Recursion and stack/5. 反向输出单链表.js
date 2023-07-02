/**
 * 
 * importance: 5

---

# 反向输出单链表

反向输出前一个任务 <info:task/output-single-linked-list> 中的单链表。

使用两种解法：循环和递归。

 */

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function outputLinkListReverse(list) {
  let arr = [];
  while (list) {
    arr.push(list.value);
    list = list.next;
  }

  arr = arr.reverse();
  console.log(...arr);
}

// outputLinkListReverse(list);

function outputLinkListReverse2(list) {
  if (list.next) {
    outputLinkListReverse2(list.next);
  }
  console.log(list.value);
}

outputLinkListReverse2(list);
