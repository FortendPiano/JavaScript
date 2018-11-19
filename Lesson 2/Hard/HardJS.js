/*Необходимо выполнить в отдельном js файле, подключенному к отдельной HTML странице

1) Создать массив week и записать в него дни недели в виде строк
    Вывести на экран все дни недели
Каждый из них с новой строчки
    Выходные дни - жирным шрифтом·
Текущий день - курсивом(пока можно задать текущий день вручную, без работы с объектом даты)*/



let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
document.write(week[0] + '<br>' + week[1] + '<br>' + week[2] + '<br>' + week[3]
 + '<br>' + week[4].italics() + '<br>' + week[5].bold() + '<br>' + week[6].bold());

//Второй вариант через цикл.
/*let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'.italics(), 'Суббота'.bold(), 'Воскресенье'.bold()];
for(let i = 0; i < week.length; i++) {
    document.write(week[i] + "<br>");
};*/

//Этот алерт выводит в окне браузера, но не применяя методов, а просто заключая в html теги.
//alert(week[0] + '\n' + week[1] + '\n' + week[2] + '\n' + week[3] + '\n' + week[4] + '\n' + week[5] + '\n' + week[6]);



/*2) Создать массив arr = []
    Записать в него 7 любых многозначных чисел в виде строк
        Вывести в консоль только те, что начинаются с цифры 3 или 7(Должны присутствовать в массиве)*/

let arr = ['13412', '74366', '57535', '734676', '365785', '8725472',
     '23572385 ', '37895 ', '794850 ', '25255 ', '7934025'];
console.log("Полный массив: " + arr);

for(let i = 0; i < arr.length; i++) {
    if(arr[i][0] == 3 || arr[i][0] == 7){
    console.log("Числа, начинающиеся с 3 или 7: \n\n" + arr[i] + '\n');
    }
};

//Прототипная версия только с тройкой(3), но тоже рабочая))
/*let arr = ['3782', '24534', '5656', '3656', '546', '3546'];
//console.log(typeof(arr));
for(let i = 0; i < arr.length; i++) {
    if(arr[i][0] == 3){
    console.log(arr[i]);
    }
};*/