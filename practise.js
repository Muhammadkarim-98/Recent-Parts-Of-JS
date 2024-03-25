// STRINGS
// TAGGED TEMPLATES 🔴
function highLight(strings, ...values) {
	let str = '';
	strings.forEach((strings, i) => {
		str += strings + (values[i] || '');
	});
	return str;
};

let name = 'John';
let age = 23;
const text = highLight`Hi, my name is ${name}, i am ${age} years old!`;
console.log(text);
output: Hi, my name is John, i am 23 years old!

// EXERCISE

function upper(strings, ...values) {
	var str = "";
	for (let i = 0; i < strings.length; i++) {
		if (i > 0) {
			str += values[i - 1].toUpperCase();
		}
		str += strings[i];
	}
	return str;
};

let ism = 'Muhammadkarim',
	twitter = 'kareem98',
	topic = 'JS Recent Parts';

const message = upper`Hello ${ism} (@${twitter}), welcome to ${topic}!`;
console.log(message);

// PADDING and TRIM 🔴

let texts = 'Salomlar.   ';
console.log(texts.padStart(15, '.')); // .......Salomlar

let msg = '          Salomlar    ';
console.log(msg.trim());

// ARRAY DESTRUCTURING (IS ASSIGNING PART)!
//// Non Destructed #1
var tmp = getSomeRecords();

var first = tmp[0];
var second = tmp[1];

var firstName = first.name;
var secondEmail = first.email !== undefined ? first.email : "nobody@none.tld";

var secondName = second.name;
var secondEmail = second.email !== indefined ? second.email : "nobody@none.tld";

////  Destructed #1
var [{ name: firstName, email: firstEmail = "nobody@none.tld" }, { name: secondName, email: secondEmail = "nobody@none.tld" }] = getSomeRecords();

//// Non Destructed #2
function data() {
	return [1, 2, 3];
}
var tmp = data();
var first = tmp[0];
var second = tmp[1];
var third = tmp[2];

//// Destructed #2
function data() {
	return [1, 2, 3];
}
var [first, second, third] = data();

//// COMMA SEPARATION
function data() { return [1, 2, 3] };
var tmp;
var [first, , third, ...fourth] = tmp = data();

let x = 10;
let c = 20;
[x, c] = [c, x];
console.log(c) // 10

//// PARAMETER ARRAYS
function data([first, second, third] = []) {
	// ...
}

//// NESTED ARRAY DESTRUCTING
//// Non Destructed
function data() {
	return [1, [2, 3], 4];
}
var tmp = data();
var first = tmp[0];
var tmp2 = tmp[1] || [];
var second = tmp2[0];
var third = tmp2[1];
var fourth = tmp[2];

//// Destructed
function data() {
	return [1, [2, 3], 4];
}
var [first, [second, third] = [], fourth] = (tmp = data() || []);

//// OBJECT DESTRUCTING 🔴

// //UNDESTRUCTED
function data() {
	return { a: 1, b: 2, c: 3 };
}
var tmp = data();
var first = tmp.a;
var second = tmp.b;
var third = tmp.c;

// //DESTRUCTED
function data() {
	return { a: 1, b: 2, c: 3 };
}
var { a: first, b: second, c: third } = data();

// // IN OBJECT RULES
let o = { prop: value, source: target }

// //NESTED OBJECT (DESTRUCTED)
function data() {
	return { a: 1, b: { c: 3, d: 4 } };
}
var { a, b: { c, d } = {} } = data();

//// NESTED OBJ and ARRAY DESTRUCTED
var obj = { a: 1, b: [500, 1000], c: 3 };
var { a, b, b: [Q, P] = [], c } = obj;

//// find,  findIndex, includes methods
var arr1 = [{ a: 1 }, { a: 2 }];
arr.find(function match(v) {
	return v && v.a > 1;
});
arr.findIndex(function match(v) {
	return v && v.a > 10;
});
// includes
var arr2 = [10, 20, NaN, 30, 40, 50];
arr2.includes(20); // true
arr2.includes(10, -2); // false
arr2.includes(40, -2); // true

//// flat, flatMap
[1, 2, 3].map(function tuples(v) { return [v * 2, String(v * 2)] }); // [[2,"2"],[4,"4"],[6,"6"]]
[1, 2, 3].map(function tuples() { return [v * 2, String(v * 2)] }).flat(); // [2,"2",4,"4",6,"6"]
[1, 2, 3].flatMap(function all() { return [v * 2, String(v * 2)] }); // [2,"2",4,"4",6,"6"]

// //ITERATORS & GENERATORS

// imperative iteration
let str = "Hello";
for (let it = str[Symbol.iterator](), v, result;
	(result = it.next()) && !result.done && (v = result.value || true);) {
	console.log(v);
}

// //declarative iteration
let msg = 'Uzbekistan';

let it = msg[Symbol.iterator]();
for (let v of msg) {
	console.log(v)
}

let sr = [...msg];
console.log(sr)

// string and array iterable that you can construct an iterator
// to consume their constituent values. 👇🏼

let str = 'Hello';
let world = ['W', 'o', 'r', 'l', 'd'];
let it1 = str[Symbol.iterator]();
console.log(it1.next()); // { value: 'H', done: false }

// // GENERATORS 🔴
// // Objects are not iterable unless they implement the iterable protocol
let obj1 = {
	a: 1,
	b: 2,
	c: 3,
	[Symbol.iterator]: function () {
		let keys = Object.keys(this);
		let index = 0;
		return {
			next: () => (index < keys.length) ? { done: false, value: this[keys[index++]] } : { done: true, value: undefined }
		};
	}
};
// console.log([...obj1]); // [ 1, 2, 3 ]
// //
function* main() {
	yield 1;
	yield 2;
	yield 3;
	return 4;
};

let it = main();
console.log([...main()]); // [ 1, 2, 3 ]
// //
let obj2 = {
	a: 1,
	b: 2,
	c: 3,
	*[Symbol.iterator]() {
		for (let key of Object.keys(this)) { yield this[key] }
	}
}
console.log([...obj2]); // [ 1, 2, 3 ]

// COUNTING 100 WITH ITERATOR!!! ✊
let numbers = {
	*[Symbol.iterator]() {
		for (let i = start; i <= end; i += step) {
			yield i;
		}
	},
};
////////////////////////
let numbers = {
	*[Symbol.iterator]({ start = 0, end = 100, step = 1 } = {}) {
		for (let i = start; i <= end; i += step) {
			yield i;
		}
	},
};

// should print 1-100 in 1step
for (let num of numbers) {
	console.log(num);
}

// should print 6-30 in 4step
console.log(`My luckfy numbers are: ${[...numbers[Symbol.iterator]({ start: 6, end: 30, step: 4 })]}`);

let msg = "Hello World";
console.log(msg.match(/(l.)/g)); // [ 'll', 'ld' ]
console.log(msg.match(/(l.)$/g)); // [ 'ld' ]
console.log(msg.match(/(l.)(?=o)/g)); // [ 'll' ]
console.log(msg.match(/(l.)(?!o)/g)); // [ 'lo', 'ld' ]
console.log(msg.match(/(?<=e)(l.)/g)); // [ 'll' ]
console.log(msg.match(/(?<!e)(l.)/g)); // [ 'lo', 'ld' ]
