"use strict"
/*Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас 
*/
const bodyElement = document.body
document.addEventListener('click', documentActive);
function documentActive(e){
   // константі призначується подія
const targetElement = e.target;
// перевірка,чи відбувся клік саме на елемент з класом "item"
if (targetElement.classList.contains (`item`)){
// додавання класу "active" на клікнутому елементі
targetElement.classList.toggle(`active`);
//console.log(`Element: ${targetElement.textContent}, Class active: ${targetElement.classList.contains('active')}`);
}
}
//==============================================================================
/*Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.
*/
window.addEventListener(`load`, bodyLoaded);
function bodyLoaded(e){
   document.body.classList.add(`loaded`);
   //console.log('Body loaded class added');
}
//===================================================================================
/*Задача №3
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.
*/
//отримання елементів header, footer
const headerElement = document.querySelector('.header');
    const footerElement = document.querySelector('.footer');

    // додавання обробників подій при наведенні і прибиранні миші
    headerElement.addEventListener('mouseenter', changeFooterColor);
    headerElement.addEventListener('mouseleave', resetFooterColor);

    // зміна кольору фону у footer при наведенні на header
    function changeFooterColor() {
      footerElement.style.backgroundColor = 'yellow';
    }

    // повернення початкового фону footer при виході з header
    function resetFooterColor() {
      footerElement.style.backgroundColor = '#adc5e5';
    }
    
//==================================================================================
/*Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
*/
 // функція, яка викликається при зміні вмісту елемента
 function updateContent(element, start, end) {
	let currentNumber = start;

	// функція для оновлення числа та виведення його в елемент
	function updateNumber() {
	  if (currentNumber <= end) {
		 element.textContent = currentNumber;
		 currentNumber++;
	  }
	}

	// інтервал для оновлення числа через заданий проміжок часу
	const intervalId = setInterval(updateNumber, 1000); 
	// перебирання, чи елемент ще видимий
	const observer = new IntersectionObserver((entries) => {
	  entries.forEach((entry) => {
		 if (entry.isIntersecting) {
			// при з'яві елемента у в'юпорті викликання оновлення числа
			updateNumber();
		 } else {
			// зупинка інтервалу
			clearInterval(intervalId);
		 }
	  });
	});

	// спостереження за елементом
	observer.observe(element);
 }

 // отримання елементу
 const itemElement = document.querySelector('.item-main');

 // отримання данних з дата атрибутів
 const startNumber = parseInt(itemElement.getAttribute('data-start'));
 const endNumber = parseInt(itemElement.getAttribute('data-end'));

 // запускання функції оновлення контенту
 updateContent(itemElement, startNumber, endNumber);

