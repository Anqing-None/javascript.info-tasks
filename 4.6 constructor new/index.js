function User() {
  debugger;
  if (new.target) {
    console.log('使用了new关键字调用');
  } else {
    console.log('正常调用。');
  }

  this.name = 'a';

  this.hello = () => {
    console.log('hello');
  };
}

const a = new User();

const b = User();
