let data = new Date(),
    day = data.getDay(),
    hours = data.getHours(),
    minutes = data.getMinutes(),
    seconds = data.getSeconds(),
    date = data.getDate(),
    month = data.getMonth() + 1,
    year = data.getFullYear();

let addZero = () => {
    if (date < 10) {
        date = `0${date}`;
    }
    if (month < 10) {
        month = `0${month}`;
    }
};
addZero();
let showDay = () => {
    document.write(data.toLocaleString('ru', {
        weekday: 'long'
    }));
};
showDay();
document.write(` ${hours}:${minutes}:${seconds} ${date}.${month}.${year} <br>`);

let input = document.querySelectorAll('input'),
    btn = document.querySelector('button'),
    div = document.querySelector('div'),
    end = '2019-03-31';
let showDifference = () => {
    let dif = Date.parse(end) - Date.parse(new Date()),
        days = Math.floor((dif / 1000 / 60 / 60 / 24));
    document.write(`Разница ${days} дней`);

    btn.addEventListener('click', function () {
        let a = Date.parse(input[1].value) - Date.parse(input[0].value);
        inputDays = Math.floor((a / 1000 / 60 / 60 / 24));
        div.textContent = inputDays + ' дней.';
    });
};
showDifference();