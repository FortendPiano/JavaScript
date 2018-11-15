'use strict';

let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    oneQuestion = prompt("Введите обязательную статью расходов в этом месяце"),
    twoQuestion = prompt("Во сколько обойдется?"),
    threeQuestion = prompt("Введите обязательную статью расходов в этом месяце"),
    forQuestion = prompt("Во сколько обойдется?"),

    appData = {
        budget: money,
        timeData: time,
        expenses: {
            oneQuestion: twoQuestion,
            threeQuestion: forQuestion
        },
        optionalExpenses: {},
        income: [],
        savings: false
    };

    console.log(appData.expenses);
    alert("Бюджет на 1 день: " + (money/30).toFixed());