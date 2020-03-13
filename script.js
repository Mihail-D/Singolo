"use strict";

const MENU = document.getElementById("main-nav");

MENU.addEventListener("click", (event) => {
	MENU.querySelectorAll("a").forEach(el => el.classList.remove("main-nav__link--active"));

	event.target.classList.add("main-nav__link--active");
});

