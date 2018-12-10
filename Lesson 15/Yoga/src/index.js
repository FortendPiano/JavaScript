window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let tabs = require('./parts/tabs'),
        timer = require('./parts/timer'),
        form = require('./parts/form'),
        calc = require('./parts/calc'),
        modal = require('./parts/modal'),
        slider = require('./parts/slider');

    tabs();
    timer();
    form();
    calc();
    modal();
    slider();

});