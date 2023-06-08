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

///// FIRST VERSION
function data1() {
	return [1, 2, 3, 4, 5]
};
var tmp = data1();
var first = tmp[0];
var second = tmp[1] !== undefined ? tmp[1] : 10;
var third = tmp[2];
var fourth = tmp.slice(3);
console.log(second); // 10
console.log(fourth); // [ 4, 5, 6 ]

///// SECOND VERSION (ARRAY DESTRUCTURING)
function data2() {
	return [1, 2, 3, 4, 5]
};
var tmz;
var [first, second, third = 90, ...fourth] = data2();
console.log(third) // 3
console.log(fourth) // [ 4, 5, 6 ]
