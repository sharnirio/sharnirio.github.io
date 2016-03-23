// comparison function
function compareAge(personA, personB) {
    return personA.value < personB.value;
}

var people = [
    { "name": "Alexey", "value": 74 },
    { "name": "Konstantin", "value": 93 },
    { "name": "Boris", "value": 23 },
    { "name": "Ivan", "value": 34 },
    { "name": "Anton", "value": 31 },
    { "name": "Volga", "value": 1 },
    { "name": "Samuil", "value": 19 }
];

people.sort(compareAge);

for (var i = 0; i < people.length; i++) {
    // Method 1 through alert
    alert('{"name":' + '"' + people[i].name + '", ' + '"value":' + '"' + people[i].value + '"}');
    // Method 2 through console
    console.log(people[i])
}

// metod 3

var desc, arr;

desc = function(field) { // function to sort in reverse (descending)
    return function(x, y) {
        return x[field] < y[field];
    }
};

arr = [
    { "name": "Alexey", "value": 74 },
    { "name": "Konstantin", "value": 93 },
    { "name": "Boris", "value": 23 },
    { "name": "Ivan", "value": 34 },
    { "name": "Anton", "value": 31 },
    { "name": "Volga", "value": 1 },
    { "name": "Samuil", "value": 19 }

];

console.log(arr.sort(desc('value')));