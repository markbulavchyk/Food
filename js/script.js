'use strict';

window.addEventListener('DOMContentLoaded', () => {

    // Tabs 
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) { // параметр по умолчанию 
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent(); // показываем самый первый слайд , в виде аргумента 

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) { // если єлемент который мы сейчас перебираем в цикле будет совпадать с элетементом на который мы кликнули , если один и тот же элемент мы скрывает осальные и показываем только нужный таб 
                    hideTabContent();
                    showTabContent(i);
                } 
            });
        }
    }) 

    // Timer 

    const deadline = '2025-03-01';

    function getTimeRemaining(endtime) {
        let days,hours,minutes,seconds;

        const t = Date.parse(endtime) - Date.parse(new Date());
        if (t <= 0) {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        } else {
            days = Math.floor(t / (1000 * 60 * 60 * 24)),
            hours = Math.floor((t / (1000 * 60 * 60) % 24)),
            minutes = Math.floor((t / 1000 / 60) % 60),
            seconds =  Math.floor((t / 1000) % 60);
        }

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }


    // функция которая будет устанавливать таймер уже на страницу 

    function setClock (selector , endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000); // запускаться будет функция каждую секунду 

        // функция будет обновлять наш таймер каждую секунду 
        updateClock();

        function updateClock () {

            // расчет того времени на эту секунду , возращает объект со всеми данными / total ,days и так далее 
            const t = getTimeRemaining(endtime); // endtime тот дедлайн который мы будем передавать в setClock в качестве аргумента
            
            // помещаем рассчетные велечины на страницу 


            // немного не понятно что такое t.days ? вызов функции ?
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }


    setClock('.timer',deadline);

    console.log(new Date());

    // Modal 

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal'),
          modalCloseBtn = document.querySelector('[data-close]');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden'
        });
    });

    function closeModal () { // функция закрытия модального окна , выносим ее отдельно так как мы ее повторяем 2 раза
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';  // браузер по дефолту возращает значение которое было до hidden
    }
    
    modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
});
