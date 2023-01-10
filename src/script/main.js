const headerMenuItems = document.querySelectorAll(".menuItem")

headerMenuItems.forEach(item => {
	const itemSubMenu = item.querySelector(".subMenu")
	item.addEventListener("click", () => {
		itemSubMenu.classList.toggle("subMenuActive")
		item.classList.toggle("menuItemRotate")
	})
})
