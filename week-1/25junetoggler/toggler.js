function toggler(a, b, c) {
  return function () {
    console.log(a);
    return function () {
      console.log(b);
      return function () {
        console.log(c);
      };
    };
  };
}

const toggle = toggler(1, 2, 3);

let t1 = toggle();
// 1
let t2 = t1();
// 2
let t3 = t2();
// 3
