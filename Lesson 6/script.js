let questionOne = +prompt('Задайте 1 число.'),
    questionTwo = +prompt('Задайте 2 число.');
    a:
for (var i = questionOne; i < questionTwo; i++) {
    for (var j = 2; j < i; j++) {
        if (i % j == 0) continue a;       
    }
    document.write(i + " : имеет делители 1 и " + j + '<br>');
}