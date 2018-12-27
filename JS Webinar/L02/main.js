var name, age, birthDay, birthMonth, birthYear;
name = "WhoAmI";
age = 70;
birthDay = "4";
birthMonth = 5;
birthYear = 1986;

console.log(age + birthMonth + birthYear);
console.log(age + birthDay + birthMonth + birthYear);

var message = (age < 20) ? 'молодой' : (age < 70) ? 'Средний' : 'старый';
console.log(message);