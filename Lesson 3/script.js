'use strict';

let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let questionOne = prompt("Введите обязательную статью расходов в этом месяце", ''),
            questionTwo = prompt("Во сколько обойдется?", '');

        if ((typeof (questionOne)) === 'string' && (typeof (questionOne)) != null && (typeof (questionTwo)) != null &&
            questionOne != '' && questionTwo != '') {
            appData.expenses[questionOne] = questionTwo;
        } else {
            i--;
        }
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let optional = prompt("Статья необязательных расходов.", "");
        appData.optionalExpenses[i] = optional;
    }
}
//chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка!');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка!");
    } else {
        console.log("Что-то тут не так...");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?!", ''),
            percent = +prompt("Под какой процент?!", "");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed(1));
    }
}
checkSavings();