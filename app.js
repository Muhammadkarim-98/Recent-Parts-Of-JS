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

//// OBJECT DESTRUCTURING ⭐️
function data() {
	return { a: 1, b: 2, c: 3 }
};
// var tmp = data();
// var first = tmp.a
// var second = tmp.b
// var third = tmp.c
// console.log(third);
// //
var { a: first, b: second, ...third } = data();
console.log(second)
