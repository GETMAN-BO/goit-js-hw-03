const countProps = function (obj) {
  let quan = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    const quan = keys.length;
    return quan;
  }
};

console.log(countProps({})); // 0

console.log(countProps({ name: "Mango", age: 2 })); // 2

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
