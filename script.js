"use strict";

// переключение элементов главного меню

const MENU = document.getElementById("main-nav");

MENU.addEventListener("click",event =>
{
	MENU.querySelectorAll("a").forEach(el =>
		el.classList.remove("main-nav__link--active")
	);
	event.target.classList.add("main-nav__link--active");
});

// переключение слайдов

let sliderButtonLeft = document.querySelector(".slider-button--left");
let sliderButtonRight = document.querySelector(".slider-button--right");
let sliderItemsSet = document.querySelectorAll(".slider-image__wrapper");

sliderButtonLeft.addEventListener("click",function ()
{
	for (let i = 0; i < sliderItemsSet.length; i++)
	{
		sliderItemsSet[i].classList.toggle("visually-hidden");
	}
});

sliderButtonRight.addEventListener("click",function ()
{
	for (let i = 0; i < sliderItemsSet.length; i++)
	{
		sliderItemsSet[i].classList.toggle("visually-hidden");
	}
});

// Выключение экранов

let sliderPhoneScreenOne = document.querySelector(".slider-image--vertical");
let sliderPhoneScreenTwo = document.querySelector(".slider-image--horizontal");
let sliderPhoneScreenOne_Off = document.querySelector(
	".slider__screen-off--vertical"
);
let sliderPhoneScreenTwo_Off = document.querySelector(
	".slider__screen-off--horizontal"
);

sliderPhoneScreenOne.addEventListener("click",function ()
{
	sliderPhoneScreenOne_Off.classList.toggle("visually-hidden");
});

sliderPhoneScreenOne_Off.addEventListener("click",function ()
{
	sliderPhoneScreenOne_Off.classList.add("visually-hidden");
});

sliderPhoneScreenTwo.addEventListener("click",function ()
{
	sliderPhoneScreenTwo_Off.classList.toggle("visually-hidden");
});

sliderPhoneScreenTwo_Off.addEventListener("click",function ()
{
	sliderPhoneScreenTwo_Off.classList.add("visually-hidden");
});

// интерактив кнопок галлереи

let galleryMenu = document.querySelector(".portfolio-nav");

galleryMenu.addEventListener("click",event =>
{
	event.preventDefault();
	galleryMenu
		.querySelectorAll(".portfolio-nav__link")
		.forEach(el => el.classList.remove("portfolio-nav__link--active"));

	event.target.classList.add("portfolio-nav__link--active");
});

// переключение  рамок картинок в галлерее

let gallery = document.querySelector(".gallery");
let galleryImageSet = gallery.querySelectorAll(".gallery img");

gallery.addEventListener("click",function ()
{
	let target = event.target;
	for (let i of galleryImageSet)
	{
		i !== target ?
			i.classList.remove("gallery__image") :
			event.target.classList.toggle("gallery__image");
	}
});

// перемешивание картинок в галлерее

galleryMenu.addEventListener("click",function ()
{
	for (var i = gallery.children.length; i >= 0; i--)
	{
		if (event.target.classList.contains("portfolio-nav__link"))
		{
			gallery.appendChild(gallery.children[(Math.random() * i) | 0]);
		}
	}
});

let submitForm = document.querySelector(".communication-block__about-us");
let modalBlock = submitForm.querySelector(".modal-window-wrapper");

let modalSubmitButton = submitForm.querySelector(
	".modal-window__submit-button"
);

let subjectField = document.querySelector(".communication-block__input--subject");
let describeField = document.querySelector(".communication-block__text-area");
let nameField = document.querySelector(".communication-block__input--name");
let mailField = document.querySelector(".communication-block__input--mail");

let modalSubject = modalBlock.querySelector(".modal-window__subject");
let modalDescribe = modalBlock.querySelector(".modal-window__describe");

// появление модального окна и обработка формы
submitForm.addEventListener("submit",function (el)
{
	el.preventDefault();
	modalBlock.classList.remove("visually-hidden");

	subjectField.value.length > 0 ?
		(modalSubject.innerHTML = "Тема: " + subjectField.value) :
		"Без темы";

	describeField.value.length > 0 ?
		(modalDescribe.innerHTML = "Описание: " + describeField.value) :
		"Без описания";
});

//закрытие модального окна
modalSubmitButton.addEventListener("click",function ()
{
	subjectField.value = '';
	describeField.value = '';
	nameField.value = '';
	mailField.value = '';
	modalBlock.classList.add("visually-hidden");
});
