// BISMILLAH
function formatCurr(strings, ...values) {
	var str = "";
	for (let i = 0; i < strings.length; i++) {
		if (i > 0) {
			if (typeof values[i - 1] == 'number') {
				str += `$${values[i - 1].toFixed(2)}`;
			} else { str += strings[i] }
		}
	}
	return str;
};

function upper(strings, ...values) {
	var ret = "";
	for (let i = 0; i < strings.length; i++) {
		if (i > 0) {
			ret += String(values[i - 1]).toUpperCase();
		}
		ret += strings[i];
	}
	return ret;
}
var name1 = "kyle",
	twitter = "getify",
	topic = "JS recent parts";
console.log(upper`Hello ${name1} (@${twitter}), welcome to ${topic}!` === "Hello KYLE (@GETIFY), welcome to JS RECENT PARTS!"); // true

var str = 'Hello';

console.log(str.padStart(5)); // 'Hello'
console.log(str.padStart(8)); // '   Hello'
console.log(str.padStart(8, "*")); // '***Hello'
console.log(str.padStart(8, "12345")); // '123Hello'
console.log(str.padStart(8, 'ab')); // 'abaHello'

/// FIRST VERSION ⭐️
function data1() {
	return [1, 2, 3, 4, 5]
};
var tmp = data1();
var first = tmp[0];
var second = tmp[1] !== undefined ? tmp[1] : 10;
var third = tmp[2];
var fourth = tmp.slice(3);
console.log(second); // 2
console.log(fourth); // [ 4, 5, 6 ]
////
var ttm;
var [a, b, c, ...d] = ttm = data1();
console.log(ttm); // [ 1, 2, 3, 4, 5 ]

/// SECOND VERSION (ARRAY DESTRUCTURING) ⭐️
function data2() {
	return [1, 2, 3, 4, 5];
}
var tmp = data2();
var tmz = [];
var [first, second, third = 90, ...fourth] = data2();
tmz[0] = tmp[0];
tmz[10] = tmp[1];
tmz[19] = tmp[2];
tmz[35] = tmp[3];
console.log(third); // 3
console.log(fourth); // [ 4, 5, 6 ]
console.log(tmz); // [ 1, <9 empty items>, 2, <8 empty items>, 3, <15 empty items>, 4 ];

const t = [1, 2, 3, 4, 5, 6, 7, 8];
const [a, b, c, ...n] = t;
console.log(n)

/// OTHER SCENARIO ⭐️
var x = 10;
var y = 20; {
	let tmp = x;
	x = y;
	y = tmp
}
//
var x = 10;
var y = 20;
[y, x] = [x, y]
console.log(x) // 20

/// OTHER SCENARIO ⭐️

function data(tmp) {
	var [first, second, third] = tmp;
	return second
};
console.log(data([1, 2, 3, 4, 5])); // 2

/// OTHER SCENARIO ⭐️

function data([first, second, third] = []) {
	return second;
};
console.log(data([1, 2, 3, 4, 5])); // 2

function data([first, second, third]) {
	return second;
};
console.log(data()); // TypeError

// OBJECT DESTRUCTURING ⭐️
function data() {
	return { a: 1, b: 2, c: 3 };
}
// var tmp = data();
// var first = tmp.a
// var second = tmp.b
// var third = tmp.c
// console.log(third);
// //
var { a: first, b: second, ...third } = data() || {}; // "{}" is Protect from TypeError;
console.log(second);

// Nested Object Destructuring ⭐️
function data() {
	return { a: 1, b: { c: 3, d: 4 } };
};

// let tmp = data();
// var a = tmp.a;
// var b = tmp.b = {};
// var c = b.c;
// var d = b.d;
// console.log(c, d);

///

var { a, b: { c, d } = {} } = data();
console.log(a)

// NESTED OBJECT & ARRAY DEST...

var obj = { a: 1, b: { t: 10, w: 20 }, c: { w: 30 } };
var { c: { w } } = obj;
console.log(w); // 30

//

var obj = { a: 1, b: [10, 20], c: [30] };
var { b: [z, w] } = obj;
console.log(w); // 20

// ARRAY METHODS

var arr = [{ a: 1 }, { a: 2 }];
let d = arr.find(function match(v) { return v && v.a > 1 });
console.log(d)
//
let p = [1, 2, 3].map(function tuples(v) { return [v * 2, String(v * 2)] }).flat();
console.log(p) // [ 2, '2', 4, '4', 6, '6' ]
//
let m = [1, 2, 3].flatMap(function tuples(v) { return [v * 2, String(v * 2)] });
console.log(m) // [ 2, '2', 4, '4', 6, '6' ]
//
let l = [1, 2, 3, 4, 5, 6].flatMap(function doubleEvens(v) {
	if (v % 2 === 0) {
		return [v, v * 2];
	} else { return [] }
})
console.log(l) // [ 2, 4, 4, 8, 6, 12 ];

//ITERATORS and GENERATORS

var str = 'Hello';
var world = ['W', 'o', 'r', 'l', 'd'];

var it1 = str[Symbol.iterator]();
var it2 = world[Symbol.iterator]();
console.log(it1.next())

// generator functions

function* main() {
	yield 1;
	yield 2;
	yield 3;
	return 4;
}
var it = main();

it.next(); // ...
it.next(); // { value: 2, done: false }
it.next(); // ...
it.next(); // ...

// exercise

var numbers = {
	// ...
};

for (let num of numbers) {
	console.log(num);
}

console.log(`My lucky numbers are: ___ `);

// solution

var numbers = {
	*[Symbol.iterator]({ start = 0, end = 100, step = 1 } = {}) {
		for (let i = start; i <= end; i += step) {
			yield i;
		}
	},
};

console.log(`My lucky numbers are: ${[...numbers[Symbol.iterator]({ start: 6, end: 30, step: 4 })]}`);
