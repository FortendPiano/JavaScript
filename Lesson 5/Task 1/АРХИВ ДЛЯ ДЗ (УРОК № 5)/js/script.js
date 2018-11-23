let part = document.createElement('li'),
    title = document.getElementById('title'),
    ulList = document.querySelector('.menu'),
    li = document.getElementsByClassName('menu-item'),
    adv = document.querySelector('.adv'),
    column = document.querySelectorAll('.column')[1],
    qestion = document.getElementById('prompt');

ulList.appendChild(part);
part.classList.add('menu-item');
part.textContent = 'Пятый пункт';
ulList.insertBefore(li[2], li[1]);

document.body.style.backgroundImage = 'url(img/apple_true.jpg';
title.textContent = 'Мы продаем только подлинную технику Apple';
column.removeChild(adv);
qestion.textContent = prompt("Напишите ваше отношение к технике Apple.");