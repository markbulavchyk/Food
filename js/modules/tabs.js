function tabs(tabsSelector, tabsContentSelector, tabsPerentSelector, activeClass) {
	let tabs = document.querySelectorAll(tabsSelector),
	tabsContent = document.querySelectorAll(tabsContentSelector),
	tabsParent = document.querySelector(tabsPerentSelector);

  function hideTabContent() {
	  tabsContent.forEach(item => {
		  item.classList.add('hide');
		  item.classList.remove('show', 'fade');
	  });

	  tabs.forEach(item => {
		  item.classList.remove(activeClass);
	  });
  }

  function showTabContent(i = 0) { // параметр по умолчанию 
	  tabsContent[i].classList.add('show', 'fade');
	  tabsContent[i].classList.remove('hide');
	  tabs[i].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent(); // показываем самый первый слайд , в виде аргумента 

  tabsParent.addEventListener('click', (event) => {
	  const target = event.target;

	  if (target && target.classList.contains(tabsSelector.slice(1))) {
		  tabs.forEach((item, i) => {
			  if (target == item) { // если єлемент который мы сейчас перебираем в цикле будет совпадать с элетементом на который мы кликнули , если один и тот же элемент мы скрывает осальные и показываем только нужный таб 
				  hideTabContent();
				  showTabContent(i);
			  } 
		  });
	  }
  }) 
}

export default tabs;