function timer()  {
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
}
module.exports = timer;