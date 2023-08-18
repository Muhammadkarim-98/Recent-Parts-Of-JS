// //STRINGS
// //// TAGGED TEMPLATES 🔴
// function highLight(strings, ...values) {
// 	let str = '';
// 	strings.forEach((strings, i) => {
// 		str += strings + (values[i] || '');
// 	});
// 	return str;
// };

// let name = 'John';
// let age = 23;
// const text = highLight`Hi, my name is ${name}, i am ${age} years old!`;
// console.log(text);
// output: Hi, my name is John, i am 23 years old!

// //// exercise

// function upper(strings, ...values) {
// 	var str = "";
// 	for (let i = 0; i < strings.length; i++) {
// 		if (i > 0) {
// 			str += values[i - 1].toUpperCase();
// 		}
// 		str += strings[i];
// 	}
// 	return str;
// };

// let ism = 'Muhammadkarim',
// 	twitter = 'kareem98',
// 	topic = 'JS Recent Parts';

// const message = upper`Hello ${ism} (@${twitter}), welcome to ${topic}!`;
// console.log(message);

// // // PADDING and TRIM 🔴

// let texts = 'Salomlar.   ';
// console.log(texts.padStart(15, '.')); // .......Salomlar

// let msg = '          Salomlar    ';
// console.log(msg.trim());

// ARRAY DESTRUCTURING

// function data() {
// 	return [1, 2, 3, 4, 5]
// }
// let temp = data();
// let one = temp[0];
// let two = temp[1] !== undefined ? temp[1] : 10;
// let three = temp[3];
// console.log(two) // 2 (IMPERATIVE)

// const [first, second, ...others] = data();
// console.log(second) // 2 (DESTRUCTURING)

// COMMA SEPARATION

// function data() {
// 	return [1, , 3]
// }
// let tmp = data();
// [f, s, th] = tmp;
// console.log(tmp) // [ 1, <1 empty item>, 3 ]

// //
// let x = 10,
// 	c = 20;
// [x, c] = [c, x];
// console.log(c) // 10

// // NESTED ARRAY DESTRUCTING
// function data() {
// 	return [1, [2, 3,], 4]
// };

// let [f, [s, th], fourth] = data()
// console.log(th)

// // OBJECT DESTRUCTING 🔴

// //UNDESTRUCTED
// function data() {
// 	return { a: 1, b: 2, c: 3 }
// }
// let tmp = data();
// let f = tmp.a
// let s = tmp.b
// let th = tmp.c
// console.log(s)

// //DESTRUCTED
// function data() {
// 	return { b: 2, c: 3 }
// }
// let { b: second, a: first = 10, c: third, ...others } = data();
// console.log(first) // 10

// // IN OBJECT RULES
// let o = { prop: value, source: target }

// //NESTED OBJECT/ARR DESTR.
// let obj = { a: 1, b: [50, 500], c: 3 };
// let { a, b, b: [w, p] = [], c } = obj;
// console.log(p)

// //ITERATORS & GENERATORS

// imperative iteration
// let str = "Hello";
// for (let it = str[Symbol.iterator](), v, result;
// 	(result = it.next()) && !result.done && (v = result.value || true);) {
// 	console.log(v);
// }

// //declarative iteration
// let msg = 'Uzbekistan';

// let it = msg[Symbol.iterator]();
// for (let v of msg) {
// 	console.log(v)
// }

// let sr = [...msg];
// console.log(sr)

// // string and array iterable that you can construct an iterator
// // to consume their constituent values. 👇🏼

// let str = 'Hello';
// let world = ['W', 'o', 'r', 'l', 'd'];
// let it1 = str[Symbol.iterator]();
// console.log(it1.next()); // { value: 'H', done: false }

// // GENERATORS 🔴
// // Object s are not iterable unless they implement the iterable protocol
// let obj1 = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// 	[Symbol.iterator]: function () {
// 		let keys = Object.keys(this);
// 		let index = 0;
// 		return {
// 			next: () => (index < keys.length) ? { done: false, value: this[keys[index++]] } : { done: true, value: undefined }
// 		};
// 	}
// };
// console.log([...obj1]); // [ 1, 2, 3 ]
// //
// function* main() {
// 	yield 1;
// 	yield 2;
// 	yield 3;
// 	return 4;
// };

// let it = main();
// console.log([...main()]); // [ 1, 2, 3 ]
// //
// let obj2 = {
// 	a: 1,
// 	b: 2,
// 	c: 3,
// 	*[Symbol.iterator]() {
// 		for (let key of Object.keys(this)) { yield this[key] }
// 	}
// }
// console.log([...obj2]); // [ 1, 2, 3 ]

// COUNTING 100 WITH ITERATOR!!! ✊
// let numbers = {
// 	*[Symbol.iterator]() {
// 		for (let i = start; i <= end; i += step) {
// 			yield i;
// 		}
// 	},
// };
////////////////////////
// let numbers = {
// 	*[Symbol.iterator]({ start = 0, end = 100, step = 1 } = {}) {
// 		for (let i = start; i <= end; i += step) {
// 			yield i;
// 		}
// 	},
// };
// should print 1-100 in 1step
// for (let num of numbers) {
// 	console.log(num);
// }

// should print 6-30 in 4step
// console.log(`My luckfy numbers are: ${[...numbers[Symbol.iterator]({ start: 6, end: 30, step: 4 })]}`);

let msg = 'Hello World';
console.log(msg.match(/(l.)/g)); // [ 'll', 'ld' ]
console.log(msg.match(/(l.)$/g)); // [ 'ld' ]
console.log(msg.match(/(l.)(?=o)/g)); // [ 'll' ]
console.log(msg.match(/(l.)(?!o)/g)); // [ 'lo', 'ld' ]
console.log(msg.match(/(?<=e)(l.)/g)); // [ 'll' ]
console.log(msg.match(/(?<!e)(l.)/g)); // [ 'lo', 'ld' ]
// Named Capture Group
