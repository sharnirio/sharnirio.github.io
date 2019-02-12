// 1 task
var pifagor = function(cathetus1,cathetus2) {
	var hypotenuse;
	hypotenuse = Math.sqrt(Math.pow(cathetus1, 2) + Math.pow(cathetus2, 2))
	return hypotenuse;
}
console.log(pifagor(12,5));
// 2 task
var integer = function(number) {
	var integerBoolean;
	if (typeof(number) == "string") {
		console.log("Введенный аргумент не является числом");
		return false;
	}
	if (number != 0) {
	var numberAbs = Math.abs(number);
	var numberAbsRound = Math.ceil(numberAbs);
	var numberResidue = numberAbsRound%numberAbs;
	if (numberResidue > 0) {
		integerBoolean = "дробным";
	}
	else {
		integerBoolean = "целым";
	}
	}
	else {
		integerBoolean = "целым";
	}
console.log("число является " + integerBoolean);
}
integer("string1");
integer("string2");
integer(5);
integer(-5);
integer(0);
integer(2.0);
integer(2.12);
integer(-2.0);
integer(-5.1);

// 3 task 
var calcSum = function(arg) {
	var numString = String(arg);
	var numNew = 0;
	for (var i = numString.length - 1; i >= 0; i--) {
		numNew += Number(numString[i]);
	}
	console.log(numNew);
}
calcSum(125);
// 4 task

console.log("Мне кажется можно сделать это более красиво, но пока в голову ничего не приходит");
var seasons = function(month) {
	var seasonsName;
	if (month>=1 && month<=2 || month==12) {
		seasonsName = "зима";
	}
	else if (month>=3 && month<=5) {
		seasonsName = "весна";
	}
	else if (month>=6 && month<=8) {
		seasonsName = "лето";
	}
	else if (month>=9 && month<=11) {
		seasonsName = "осень";
	}
	console.log(seasonsName);
}
seasons(3);
seasons(7);
seasons(9);
seasons(12);

// 5 task
var getCleanPrice = function(price) {
	var priceSubstring = price.substring(1)
	var priceToNum = parseFloat(priceSubstring);
	console.log(priceToNum);
}
getCleanPrice('$156');
getCleanPrice('$15.6');
getCleanPrice('$1.56');
// 6 task
var truncate = function(str, maxlength) {
	var strlength = str.length;
	var strNew;
	if (strlength<maxlength) {
		console.log(str);
	}
	else {
		strNew = str.substr(0,maxlength);
		console.log(strNew + "...");
	}
}
truncate("Я длинная строка и явно не влезу в блок - так что обреж меня", 35);
truncate("А я влезу меня не надо обрезать", 35);
// 7 task
var stringUper = function(str) {
	var lastChar = str.length-1;
	var strNew = str[0].toUpperCase() + str.slice(1,lastChar) + str[lastChar].toUpperCase() ;
	return strNew;
}
console.log(stringUper("эй я просто строка"));
// 8 task
console.log("Возможно есть более лучший способ либо специальный метод получить дни с милисекунд но я его не нашел");
var daysPassed = function(date) {
	var now = new Date();
	var nowMS = Date.parse(now);
	var dateFormat = date.format("m/dd/yy");
	// var dateMS = Date.parse(dateFormat);
	var dateDiff = nowMS - dateMS;
	var dateDiffDay = Math.ceil(dateDiff/1000/60/60/24);
	console.log("C " + date + " прошло дней - " + dateDiffDay);
}
daysPassed('11.09.2001');
// 9 task
var whatSeason = function(date) {
	var dateMS = Date.parse(date);
	var tryDate = new Date(dateMS);
	var month = tryDate.getMonth();
	var tryMonth = month + 1;

	if (tryMonth>=1 && tryMonth<=2 || tryMonth==12) {
		seasonsName = "зима";
	}
	else if (tryMonth>=3 && tryMonth<=5) {
		seasonsName = "весна";
	}
	else if (tryMonth>=6 && tryMonth<=8) {
		seasonsName = "лето";
	}
	else if (tryMonth>=9 && tryMonth<=11) {
		seasonsName = "осень";
	}
	return seasonsName;
}
console.log(whatSeason('2010-11-25'));
// 10 task
var formatMyDate = function(date) {
	var dateMS = Date.parse(date);
	var tryDate = new Date(dateMS);
	var dateYear = tryDate.getFullYear();
	var dateMonth = tryDate.getMonth();
	var dateTryMonth = dateMonth+1;
	var dateDay = tryDate.getDate();
	var dateFormat = dateDay +"/"+ dateYear +"/"+ dateTryMonth;
	return dateFormat;
}
console.log(formatMyDate('2010-11-25'));// выведет '25/2010/11'