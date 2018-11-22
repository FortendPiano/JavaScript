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
//start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
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
    },
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {
            let optional = prompt("Статья необязательных расходов.", "");
            appData.optionalExpenses[i] = optional;
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Бюджет на 1 день: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка!');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка!");
        } else {
            console.log("Что-то тут не так...");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?!", ''),
                percent = +prompt("Под какой процент?!", "");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome.toFixed(1));
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет человеку дополнительный доход? (Перечислите через запятую)", '');
        while ((typeof(items)) !== 'string' || items == '' || (typeof(items)) === null || !isNaN(items.split())) {
            items = prompt("Что принесет человеку дополнительный доход? (Перечислите через запятую)", '');
        }
        appData.income = items.split(', ');
        appData.income.sort();
        appData.income.push(prompt("Может что-то еще?!"));

        appData.income.forEach(function (item, i) {
            document.write("Способы доп. заработка: " + (++i) + ": " + item + '<br>');
        });
    }
};
appData.chooseIncome();
for (let keys in appData) {
    document.write("Наша программа включает в себя данные: " + keys + '<br>');
}

/* Написать проверку, что пользователь может:
 Ввести в дополнительных доходах (chooseIncome) только строку
 Не может оставить строку пустой
 Не может отменить вопрос

2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)
Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.
3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)*/