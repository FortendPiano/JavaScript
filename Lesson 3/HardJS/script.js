//1е и 2е задание
let str = "урок - 3 - был слишком легким",
    firstUpper = (str[0].toUpperCase() + str.slice(1, 30)),
    replacement = (firstUpper.replace(/-/g, " ")),
    cut = (replacement.slice(0, 23)),
    cutUp = (replacement.replace("им", "оо"));
console.log(replacement);

//3е задание
console.log(cut);
console.log(cutUp);

//4е задание
let arr = [20, 33, 1, "Человек", 2, 3],
    sum = 0;
arr.splice(3, 1);

function sqrt() {
    for (let i = 0; i < arr.length; i++) {
        Math.pow(arr[i], 3);
        sum += Math.pow(arr[i], 3);
    }
    console.log("Сам массив: [" + arr + "]");
    console.log("Сумма кубов элементов массива: " + sum);
    console.log("Квадратный корень суммы кубов элементов массива: " + Math.sqrt(sum).toFixed(1));
}
sqrt();

//5е задание
function myLife(text) {
    alert(text = prompt("Введите число!", ''));
    if (text != "" || text != isNaN) {
        document.write(text.trim() + '<br>');
    } else {
        alert("Вы ввели строку! Перезагрузите страницу!");
    }
    let string = text.slice(0, 50),
        mass = string.split(' ');
    mass.splice(mass.length - 1, 1 + '...');
    string = mass.join(' ');
    document.write(string + '...');
    //console.log(text != "isNaN");
}
myLife();