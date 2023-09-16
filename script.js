// function add(x, y) {
//     console.log(x + y);
// }
// add(3, 4);
// console.log(add);

arr = [1, 2, 3, 4, 5, 6]

var odd = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            console.log(arr[i]);
        }
    }
}
odd(arr);

function toTitleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' ');
}
console.log(toTitleCase('we are the rebels'));

var str = ('we are the rebels');

console.log(str.split(' ').map(function (x) {
    // return (x.charAt(0).toUpperCase() +
    return (x.slice(1));
}));