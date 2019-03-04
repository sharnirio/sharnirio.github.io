"use strict";
// 1. Есть массив:
// Написать функцию которая будет выведет столько раз 'name - delay' каждого объекта сколько указано в свойстве quantity. Функция должны выводить через определенное время по формуле quantity * 250. Функция должны вывести сначала для первого обеъекта массива а потом для второго, причем размер массива вы не знаете заранее.
var users = [{
	name: 'Tilek',
	quantity: 5
}, {
	name: 'Vitkor',
	quantity: 8
}];

function arrayQuantity(arr) {
	for (var i = 0; i < arr.length; i++) {
		var rise = 250;
		var riseSum = 0;
		for (var j = 0; j < arr[i].quantity; j++) {
			riseSum += rise;
			console.log(arr[i].name + " - " + riseSum);
		}
	}
}
arrayQuantity(users);
// 2. Есть строка '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }'. Напишите скрипт который преобразует строку в объект, причем если значение является числом и больше 25 то не добаляет в результирующий объект.
var string = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
console.log(string);
function stingToArray(arg) {
	var stringArr = JSON.parse(arg, function(key, value) {
  if (typeof value == "number" && value >= 25) return undefined;
  return value;
});
	console.log(stringArr);
}
stingToArray(string);

// 3. Создайте объект calculator с тремя методами:
// read() запрашивает prompt два значения и сохраняет их как свойства объекта
// sum() возвращает сумму этих двух значений
// mul() возвращает произведение этих двух значений

console.log("Возможно надо было сделать через два prompt(), но так как не было указано, я реализовал через один с переводом в маccив");
var calculator = {
	read: function () {
		var stringNumber = prompt("Введите два значения через пробел", '');
		var arrNumber = stringNumber.split(' ');
		this.numbers1 = +arrNumber[0];
		this.numbers2 = +arrNumber[1];
	},
	sum: function () {
		return this.numbers1 + this.numbers2;
	},
	mul: function () {
		return this.numbers1 * + this.numbers2 ;
	}
}

// calculator.read();
console.log( 'Sum = ' + calculator.sum() );
console.log( 'Mul12 = ' + calculator.mul() );

// 5. Напишите функцию-конструктор Accumulator(startingValue). Объекты, которые она создает, должны хранить текущую сумму и прибавлять к ней то, что вводит посетитель.

// Более формально, объект должен:

// Хранить текущее значение в своём свойстве value. Начальное значение свойства value ставится конструктором равным startingValue.
// Метод read() вызывает prompt, принимает число и прибавляет его к свойству value.
// Таким образом, свойство value является текущей суммой всего, что ввел посетитель при вызовах метода read(), с учетом начального значения startingValue.

function Accumulator(startingValue) {
	this.value = startingValue;
	this.read = function () {3
		this.value += +prompt("Введите число", '');
	};
}
var accumulator = new Accumulator(1); // начальное значение 1
// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению
console.log( accumulator.value); // выведет текущее значение

// 6. Напишите конструктор Calculator, который создаёт расширяемые объекты-калькуляторы.
// Эта задача состоит из двух частей, которые можно решать одна за другой.
// Первый шаг задачи: вызов calculate(str) принимает строку, например «1 + 2», с жёстко заданным форматом «ЧИСЛО операция ЧИСЛО» (по одному пробелу вокруг операции), и возвращает результат. Понимает плюс + и минус -.
// // Пример использования:
// var calc = new Calculator;
// console.log( calc.calculate("3 + 7") ); // Sum = 10

// Второй шаг – добавить калькулятору метод addMethod(name, func), который учит калькулятор новой операции. Он получает имя операции name и функцию от двух аргументов func(a,b), которая должна её реализовывать.

// Например, добавим операции умножить *, поделить / и возвести в степень ^:

// var powerCalc = new Calculator;
//   ...ваш код...
// var result = powerCalc.calculate("2 ^ 3");
// console.log( result ); // Pow = 8
// Поддержка скобок и сложных математических выражений в этой задаче не требуется.
// Числа и операции могут состоять из нескольких символов. Между ними ровно один пробел.
// Предусмотрите обработку ошибок. Какая она должна быть – решите сами.
function CalculatorEval() {
	this.calculate = function(str) {
		var arrString = str.split(' ');
		this.num1 = +arrString[0];
		this.num2 = +arrString[2];
		this.symbol = arrString[1];
		this.result = eval(this.num1 + this.symbol + this.num2);
		if (this.symbol == "^") {
			this.result = Math.pow(this.num1, this.num2)
		}
		if (typeof this.result == "number2" || isNaN(this.result) != true) {
			return this.result;
		} else {
			return "Ошибка в введенной строке";
		}
	}
}
var calcEval = new CalculatorEval;

console.log(calcEval.calculate("4 + 2")); // Sum = 6
console.log(calcEval.calculate("4 - 2")); // Sum = 2
console.log(calcEval.calculate("4 * 2")); // Sum = 8
console.log(calcEval.calculate("4 / 2")); // Sum = 2
console.log(calcEval.calculate("4 ^ 2")); // Sum = 16


function Calculator() {
	this.calculate = function(str) {
		var arrString = str.split(' ');
		this.num1 = +arrString[0];
		this.num2 = +arrString[2];
		this.symbol = arrString[1];
		return arrString;
	}
}
var calc = new Calculator;
console.log(calc.calculate("2 ^ 3")); // Sum = 10