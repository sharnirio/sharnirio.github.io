// 1 task
var iMax = 11;

console.log("Первый способ с while");
i = 1;
while (i <= iMax) {
	if (i%2 === 0) {
		console.log( "четное число " + i);
	}
	i++;
}

console.log("Второй способ с for");
for (var i = 1; i <= iMax; i++) {
	if (i%2 === 0) {
		console.log( "четное число " + i);
	}
}

// 2 task

for (var i = 0; i < 5; i++) {
	console.warn("номер " + i + "!");
}

var i = 0;
while (i < 5) {
	console.warn("номер " + i + "!");
	i++;
}

// 3 task

// var a = +prompt('a?', '');
var a = 2;
//пример
// if (a == 0) {
// 	alert('Ноль');
// }
// if (a == 1) {
// 	alert('Один');
// }
// if (a == 2 || a == 3) {
// 	alert('Два или Три');
// }

console.log("задача со switch - добавил условие по умолчанию и заменил alert на console.log('') что б не мешало при проверке");
switch (a) {
	case 0:
		// alert('Ноль');
		console.log('Ноль');
		break;
	case 1:
		// alert('Один');
		console.log('Один');
		break;
	case 2:
	case 3:
		// alert('Два или Три');
		console.log('Два или Три');
		break;
		default:
			console.log('Не 0,1,2,3');
}

//4 task

//пример
function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('Тебе точно есть 18?');
	}
}

console.log(checkAge(19));

//вариант с ?
function checkAgeV1(age) {
	return age > 18 ? true : confirm('Тебе точно есть 18?');
}

console.log(checkAgeV1(19));

//вариант с ||
console.log("с вариантом через || не понял как сделать");

function checkAgeV2(age) {
		return age > 18 || confirm("Тебе точно есть 18?");
}
console.log(checkAgeV2(19));
// 5 task
function calcAvarage(a,b,с) {
	var min, max, average;

	max = (a > b && a > с) ? a : (b > a && b > с) ? b : с;
	min = (a < b && a < с) ? a : (b < a && b < с) ? b : с;
	average = (a != max && a != min) ? a : (b != max && b != min) ? b : с;

	console.log("Минимальное значение - " + min + ", среднее значение - " + average + ", максимальное значение - " + max)
}

calcAvarage(3,66,33);

// 6 task
function pow(a,b) {
	var number = 1;

	for (i=1;i <= b;) {
		number *= a;
		b--;
	}
return number;
}

console.log(pow(3,5));

function powV2(a,b) {
	var number = 1;
	var i = 1;
	while(i<=b) {
		number *= a;
		b--;
	}
return number;
}

console.log(powV2(3,7));