function saveLocal(index) {
	let cartItems
	if (localStorage.getItem("userCart") === null) {
		cartItems = []
	} else {
		cartItems = JSON.parse(localStorage.getItem("userCart"))
	}

	cartItems.push(index)
	localStorage.setItem("userCart", JSON.stringify(cartItems))
}

export { saveLocal }
