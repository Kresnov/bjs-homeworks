'use strict';

// Задание 1


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
	} 
}
const sum = (a, b) => a + b;

const mSum = memoize(sum, 10); 

