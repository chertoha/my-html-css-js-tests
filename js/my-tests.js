const obj = {
  a: 13,
  say: function () {
    console.log(this.a);
    setTimeout(() => {
      //   console.log(this.a);
    }, 1000);
  },
};

obj.say();
