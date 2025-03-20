function modal () {


    // Modal 

    const modalTrigger = document.querySelectorAll('[data-modal]'),
          modal = document.querySelector('.modal')
        //   modalCloseBtn = document.querySelector('[data-close]');


    function openModal () { // функция открытия модального окна
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        clearInterval(modalTimerId); // если пользователь сам открыл окно , мы его не вызываем больше , и очищаем интервал
    }

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    function closeModal () { // функция закрытия модального окна , выносим ее отдельно так как мы ее повторяем 2 раза
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';  // браузер по дефолту возращает значение которое было до hidden
    }
    
    // modalCloseBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    //  mod modal window 

    const modalTimerId = setTimeout(openModal,5000)

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);
}
module.exports = modal;