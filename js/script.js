const headerNavBar = document.querySelector("section#header .navbar");
const navbarMenu = document.getElementById("navbarMenu");

/**
 * When the hamburger menu is opened/closed, change the background of the menu
 */
navbarMenu.addEventListener("transitionstart", () => {
	headerNavBar.classList.toggle("opened");
});
