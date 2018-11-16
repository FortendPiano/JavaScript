'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    //Переменные при переходе на цикл while
/*let i = 0,
    questionOne = prompt("Введите обязательную статью расходов в этом месяце", ''),
    questionTwo = prompt("Во сколько обойдется?", '');*/

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let questionOne = prompt("Введите обязательную статью расходов в этом месяце", ''),
        questionTwo = prompt("Во сколько обойдется?", '');

    if ((typeof (questionOne)) === 'string' && (typeof (questionOne)) != null && (typeof (questionTwo)) != null &&
        questionOne != '' && questionTwo != '') {
        appData.expenses[questionOne] = questionTwo;
    } else {
        i--;
    }
};

//Первый дополнительный цикл проверки.
/*while(i < 2 && (typeof (questionOne)) === 'string' && (typeof (questionOne)) != null && (typeof (questionTwo)) != null &&
questionOne != '' && questionTwo != '') {
    appData.expenses[questionOne] = questionTwo;
    i++;
};*/

//Второй дополнительный цикл проверки.
/*do { 
    console.log(i);
    appData.expenses[questionOne] = questionTwo;
    i++;
} while(i < 2 && (typeof (questionOne)) === 'string' && (typeof (questionOne)) != null && (typeof (questionTwo)) != null &&
questionOne != '' && questionTwo != '');*/


appData.moneyPerDay = (appData.budget / 30).toFixed();
alert("Бюджет на 1 день: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка!');
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка!");
} else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка!");
} else {
    console.log("Что-то тут не так...");
};