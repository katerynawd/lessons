"use strict"
/*Задача №1
Отримати в константу елемент <body>
*/
const bodyElement = document.body;
console.log(bodyElement);
//=================================================================================
/*Задача №2
Написати функцію, яка додає в <body> список UL
з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням)
*/
function someList(value = 5){
	//створення ul
let ulElement = document.createElement (`ul`);
//додавання до body елементу ul
document.body.appendChild(ulElement);
//додавання li до елементу ul
for (let i=1; i<=value; i++){
	let liElement = document.createElement (`li`);
	liElement.textContent = `Item ${i}`;
	ulElement.appendChild(liElement);
}
}
someList();
//==============================================================================
/*
Задача №3
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тексту зелений.
*/
const bodyElementTwo = document.querySelector(`body`);
bodyElementTwo.classList.add(`loaded`);
if (bodyElementTwo.classList.contains(`loaded`)){
	bodyElementTwo.style.color = `green`;
}
//=============================================================================
/*Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №
(тут порядковий номер елементу починаючи з 1)".
*/
//щтримання елементів з класом item
const itemElements = document.querySelectorAll(`.item`);
itemElements.forEach((item, index) =>{
	//додавання класу active
item.classList.add(`active`);
//Зміна контенту 
item.textContent = `Елемент№`+ (index + 1);
})

/*
Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки
*/
const button = document.querySelector(`.button`);
function scrollToButton(element){
	const block = element.dataset.scroll;
	element.scrollIntoView({
		//управління з html за допомогою scrollIntoView
		block: block,
		inline: "nearest",
		behavior:"smooth"
	});
}
scrollToButton(button);
//========================================================================================
/*Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Потім отримати значення трибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний
*/
//отримання посилання за класом
const link = document.querySelector(`.link`);
//додавання дата-атрибута зі значенням 100
link.setAttribute (`data-value`, `100`);
// отримання значення дата-атрибута
let dataValue = link.getAttribute(`data-value`);
//перевірка чи значення менше 200 та зміна кольору
if (parseInt (dataValue) < 200){
	link.style.color = `red`;
}



