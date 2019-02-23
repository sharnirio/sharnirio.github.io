// 1. Есть массив matrix. Необходимо посчитать сумму всех чисел этого массива.
var matrix = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9]
];
function matrixSum(arr) {
	var matrixSumElement = 0;
	for (var i = 0; i < arr.length; i++) {
		for (var j = 0; j < arr[i].length; j++) {
			matrixSumElement += arr[i][j];
		}
	}
	console.log("Сумма чисел в многомерном массиве - " + matrixSumElement);
}

matrixSum(matrix);

// 2. Получить значение последнего элемента массива. Колиество элементов может быть разным.
var arrayEx = [1, 2, 3, "Last Element"];

function lastElement(arr) {
	var lastIndex = arr.length-1;
	console.log(arr[lastIndex]);
}
lastElement(arrayEx);

// 4. Напишите код для вывода в консоль случайного значения из массива: var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];

var arrayEx2 = ["Яблоко", "Апельсин", "Груша", "Лимон"];
function randomElement(arr) {
	var min = 0;
	var max = arr.length-1;
	var randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(arr[randomIndex]);
}
randomElement(arrayEx2);

// 5. Создайте функцию find(arr, value), которая ищет в массиве arr значение value и возвращает его номер, если найдено, или -1, если не найдено.
// var arr = ["test", 2, 1.5, false];
// find(arr, "test"); // 0
// find(arr, 2); // 1
// find(arr, 1.5); // 2
// find(arr, 0); // -1
// find(arr, 'Tilek'); // -1

var arrEx3 = ["test", 2, 1.5, false];

function find(arr, value) {
	var numm = arr.indexOf(value);
	console.log(numm);
}
find(arrEx3, "test"); // 0
find(arrEx3, 2); // 1
find(arrEx3, 1.5); // 2
find(arrEx3, 0); // -1
find(arrEx3, 'Tilek'); // -1

//6. Создайте функцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только числа из arr из диапазона от a до b.
// var arr = [5, 4, 3, 8, 0];
// var filtered = filterRange(arr, 3, 5); // [5, 4, 3]
var arrEx4 = [5, 4, 3, 8, 0];

function filterRange(arr, a, b) {
	var newArray = [];
	for (var i = 0; i < arr.length; i++) {
		if (a > b) {
			if (arr[i] <= a && arr[i] >= b) {
				newArray.push(arr[i]);
			}
		}
		if (b > a) {
			if (arr[i] >= a && arr[i] <= b) {
				newArray.push(arr[i]);
			}
		}
	}
	return newArray;
}
var filtered = filterRange(arrEx4, 3, 5); // [5, 4, 3]

console.log(filtered);

// 7. У объекта есть свойство className, которое хранит список «классов» – слов, разделенных пробелами:
// var obj = {
//   className: 'open menu  mymenu menu'
// };
// Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть.  Функция должна корректно обрабатывать дублирование класса в строке.
// removeClass(obj, 'menu'); // obj.className = 'open mymenu'

var objEx = {
  className: 'open menu mymenu menu'
};
function removeClass(obj, cls) {
	var classArray = obj.className.split(' ');
	var newClassArray = [];
	var newString;
	console.log(classArray);
	for (var i = 0; i < classArray.length; i++) {
		if (classArray[i] !== cls) {
			newClassArray.push(classArray[i]);
		}
	}
	newString = newClassArray.join(" ");
	obj.className = newString;
	console.log(obj.className);
}
removeClass(objEx, 'menu'); // obj.className = 'open mymenu'

// 8. Напишите код, который отсортирует массив объектов people по полю age.
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [ vasya , masha , vovochka ];


function peopleSort(arr) {
	function sortFunction(strings1, strings2) {
		return strings1.age - strings2.age;
	}
	arr.sort(sortFunction);
}
peopleSort(people);

console.log(people);
console.log(people[0].age) // 6
console.log(people[1].age) // 18
console.log(people[2].age) // 23

// 9. Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr. 
var strings = ["Tilek", "Ilona", "Ivan", "Ivan", "Vladimir", "Alex", "Alice", "Alex", "Viktor", "Alex", "Viktor", "Ilona"];

function unique(arr) {
	var newArr = [];
	var obj = {};
	for (var i = 0; i < arr.length; i++) {
		var str = arr[i];
		obj[str] = 1;
	}
	for (var key in obj) {
		newArr.push(key);
	}
	console.log(newArr);
}
unique(strings);
//10. Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть.
var objNew = {};
var objNew1 = {1: "test"};
var objNew2 = {"test": 1};

// вариант 1
function isEmpty(obj) {
	for (var key in obj) {
		return false;
	}
	return true;
}
// вариант 2
function isEmpty2(obj) {
	if (Object.keys(obj).length == 0) {
		return true;
	} else {
		return false;
	}
}

console.log(isEmpty(objNew));
console.log(isEmpty(objNew1));
console.log(isEmpty(objNew2));
console.log(isEmpty2(objNew));
console.log(isEmpty2(objNew1));
console.log(isEmpty2(objNew2));

// 11. Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.
var salaries = {
	"Вася": 100,
	"Петя": 300,
	"Даша": 250
};
// Ответ: 650

function salariesSum(arg) {
	var sum = 0;
	for (var key in arg) {
		sum += arg[key];
	}
	console.log(sum);
}
salariesSum(salaries) // Ответ: 650

// 12.Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. Например:

// до вызова
var menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(arg) {
	for (var key in arg) {
		if (!isNaN(arg[key])) {
			arg[key] *= 2;
		};
	}
	console.log(arg);
}
multiplyNumeric(menu);
// после вызова
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };