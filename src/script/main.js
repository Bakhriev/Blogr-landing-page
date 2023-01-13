function burgerMenu() {
	const burger = document.querySelector(".burger")
	const menu = document.querySelector(".menu")
	const popup = document.querySelector(".popup")

	burger.addEventListener("click", () => {
		if (!menu.classList.contains("menuActive")) {
			menu.classList.add("menuActive")
			burger.classList.add("burgerActive")
			popup.classList.toggle("popupActive")
		} else {
			menu.classList.remove("menuActive")
			burger.classList.remove("burgerActive")
			popup.classList.remove("popupActive")
		}
	})

	window.addEventListener("resize", () => {
		if (window.innerWidth > 991.98) {
			menu.classList.remove("menuActive")
			burger.classList.remove("burgerActive")
			popup.classList.remove("popupActive")
		}
	})
}
burgerMenu()

const popupDropdownButtons = document.querySelectorAll(".popup-menu-toggle")
popupDropdownButtons.forEach(popupDropdownButton => {
	popupDropdownButton.addEventListener("click", () => {
		const popupSubMenu = popupDropdownButton.nextElementSibling
		if (popupSubMenu.style.maxHeight) {
			popupSubMenu.style.maxHeight = null
		} else {
			popupSubMenu.style.maxHeight = popupSubMenu.scrollHeight + "px"
		}
	})
})

document.addEventListener("click", e => {
	const isDropdownButton = e.target.matches("[data-dropdown-button]")

	// if clicked element === dropdown item don't close dropdown
	if (!isDropdownButton && e.target.closest("[data-dropdown]") !== null) return

	// and if clicked element is dropdownButton so then add active class
	let currentDropdown
	if (isDropdownButton) {
		currentDropdown = e.target.closest("[data-dropdown]")
		currentDropdown.classList.toggle("active")
	}
	//If  clicked another drop-down, then delete the active class from the current drop-down
	document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
		if (dropdown === currentDropdown) return
		dropdown.classList.remove("active")
	})
})
