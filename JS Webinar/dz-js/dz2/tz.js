var desc, people, people2, id1, id2, id1true, id2true;

desc = function(field) { // function to sort in reverse (descending)
    return function(x, y) {
        return x[field] < y[field];
    }
};
people = [
    { "name": "Alexey", "value": 74 },
    { "name": "Konstantin", "value": 193 },
    { "name": "Boris", "value": 23 },
    { "name": "Ivan", "value": 34 },
    { "name": "Anton", "value": 31 },
    { "name": "Volga", "value": 1 },
    { "name": "Samuil", "value": 19 }
];


peopleSort = people.sort(desc('value'));

peopleSort.forEach(function(item, i, arr) {
    peopleSort[i]['idName'] = i
    console.log(people[i]['value'] + ": " + people[i]['idName'])
});

id1 = prompt('Введите id1', 0);
if (isNaN(id1)) {
    alert("Вы ввели не  число");
}
else if (id1 > peopleSort.length + -1) {
    alert("id массива больше нужно ввести меньшее число")
}
else if (id1 === null) {
    alert("эй ты зачем отмена нажал несработает жеж")
}
else {
    id1true = true
}
id2 = prompt('Введите id2', 0);
if (isNaN(id2)) {
    alert("Вы ввели не число");
}
else if (id2 > peopleSort.length + -1) {
    alert("id массива больше нужно ввести меньшее число");
}
else if (id2 === null) {
    alert("эй ты зачем отмена нажал несработает жеж")
}
else if (id2 === id1) {
    alert("Вы число равное первому")
}
else {
    id2true = true
}

if (id1true == true && id2true == true) { alert(peopleSort[id1]["value"] + peopleSort[id2]["value"]) } else {
    alert('Вы вели неправильные числа попробуйте ещё')
};
