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

    


});
