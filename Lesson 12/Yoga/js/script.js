window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let info = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };
    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //Timer

    let deadline = '2019-01-01';

    let getTimeRemaining = (endtime) => {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / 1000 / 60 / 60));

        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (t <= 0) {
            hours = '0' + '0';
            minutes = '0' + '0';
            seconds = '0' + '0';
        }
        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    };

    let setClock = (id, endtime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    };
    setClock('timer', deadline);

    //Modal window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        btn = document.querySelectorAll('.description-btn');

    function func() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    };
    more.addEventListener('click', func);

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', func);
    }
    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });

    //Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с Вами свяжемся!',
        failure: 'Что-то не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input')[0],
        statusMessage = document.createElement('div'),
        formBF = document.getElementById('form'),
        inputBF = formBF.getElementsByTagName('input'),
        statusMessageBF = document.createElement('div');

    statusMessage.classList.add('status');
    statusMessageBF.classList.add('status');

    function valid() {
        this.value = this.value.replace(/[^0-9+]/g, '');
    }
    input.addEventListener('input', valid);
    inputBF[1].addEventListener('input', valid);

    function sendForm(elem) {
        elem.addEventListener('submit', function (event) {
            event.preventDefault();
            elem.appendChild(statusMessage);

            function postData(data) {
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

                    let formData = new FormData(elem);
                    let obj = {};
                    formData.forEach(function (value, key) {
                        obj[key] = value;
                    });
                    let json = JSON.stringify(obj);
                    request.addEventListener('readystatechange', function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                    request.send(json);
                });
            }

            function clearInput(e) {
                for (let i = 0; i < e.length; i++) {
                    e[i].value = '';
                }
            }
            postData(form)
                .then(() => statusMessage.textContent = message.loading)
                .then(() => statusMessage.textContent = message.success)
                .catch(() => statusMessage.textContent = message.failure)
                .then(clearInput(elem))
        });
    }
    sendForm(form);
    sendForm(formBF);
});