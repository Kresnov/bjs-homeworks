'use strict';

// задание 1

function compareArrays(arr1, arr2){
	return (arr1.length === arr2.length) && (arr1.every(item => arr1.indexOf(item) === arr2.indexOf(item)));
}

function memoize(fn, limit) {
	const results = [];
	return function() {
		let solution = results.find(item => compareArrays(item.args, Array.from(arguments)));

		if(solution) {
			return `Функция была в памяти - ${solution.result}`;
		} else {
			if(results.length === limit) {
				results.shift();
            }
            let result = fn(...arguments);
			results.push({
				args: Array.from(arguments),
				result: result,
			});

			return `Новое значение - ${result}`;
		}
		console.log(results);
	} 
}
const sum = (a, b) => a + b;

const mSum = memoize(sum, 10); 

console.log(mSum(1, 2));
console.log(mSum(1, 2));
console.log(mSum(1, 5));
console.log(mSum(1, 9));
console.log(mSum(1, 9));
console.log(mSum(1, 9));
console.log(mSum(1, 5));
console.log(mSum(6, 7));
console.log(mSum(5, 7));
console.log(mSum(4, 7));
console.log(mSum(3, 7));
console.log(mSum(2, 7));
console.log(mSum(2, 6));
console.log(mSum(3, 6));
console.log(mSum(4, 6));
console.log(mSum(1, 2));
