function saveLocal(index) {
	let cartItems = JSON.parse(localStorage.getItem("userCart")) || []
	let toAdd = index
	let alreadyInCart = cartItems.some((item) => item.id === toAdd.id)
	if (!alreadyInCart) {
		cartItems.push(toAdd)
		localStorage.setItem("userCart", JSON.stringify(cartItems))
	}
}

function getLocal() {
	let cartItems
	if (localStorage.getItem("userCart") === null) {
		cartItems = []
	} else {
		cartItems = JSON.parse(localStorage.getItem("userCart"))
	}
	return cartItems
}

function removeFromLocal(index) {
	let cartItems
	if (localStorage.getItem("userCart") === null) {
		cartItems = []
	} else {
		cartItems = JSON.parse(localStorage.getItem("userCart"))
	}

	cartItems.splice(index, 1)
	localStorage.setItem("userCart", JSON.stringify(cartItems))
}

export { saveLocal, getLocal, removeFromLocal }
