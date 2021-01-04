// //コンストラクター関数

// function Person(name,age) {
//   this.name = name;
//   this.age = age;
//   this.hello = function() {
//     console.log('hello ' + this.name);
//   }
// }

// Person.prototype.hello = function() {
//   console.log('hello ' + this.name);
// }

// const bob = new Person('Bob', 18);
// const tom = new Person('Tom', 33);
// const sun = new Person('Sun', 20);

// bob.hello();

// //prototype
// //オブジェクトに存在する特別なプロパティー


// //new 演算子

// function F(a, b) {
//   this.a = a;
//   this.b = b;
//   return {};
// }

// F.prototype.c = function() {}

// function newOpe(c, ...args) {
//   const _this = Object.create(C.prototype);
//   const result = C.apply(_this, args)
//   console.log(typeof result);
//   if( typeof result === "object" && result !== null){
//     return result;
//   } 

//   return _this;
// }

// const instance = newOpe(F, 1, 2);
// console.log(instance)

// // instanceof

// function F(a, b) {
//   this.a = a;
//   this.b = b;
//   const result = new Object();
//   result.a = 1;
//   return result;
// }

// F.prototype.c = function() {}

// const instance = new F(1,2);
// console.log(instance instanceof Object);
// console.log(instance.__proto__ === F.prototype)

// function fn(arg) {
//   if(arg instanceof Array) {
//     arg.push('value');
//   }else{
//     arg['key'] = 'value';
//   }
//   console.log(arg)
// }

// fn([])


// //関数コンストラクター

// const fn1 = new Function('a', 'b', 'return a + b');

// console.log(result);

// function fn(a, b){
//   return a + b;
// }

// console.log(fn2 instanceof Function)