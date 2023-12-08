import { useEffect, useState } from "react"
import Card from "./Cards"
import { getLocal, removeFromLocal } from "../Helpers/LocalStorage"

function ShoppingCart() {
	const [cartItems, setCartItems] = useState([])

	function getUserCart() {
		const storage = [...JSON.parse(localStorage.getItem("userCart"))]
		setCartItems([...storage])
	}

	function removeFromCart(index) {
		const cart = [...getLocal()]
		let cartIndex = cartItems.at(index)
		if (JSON.stringify(cartIndex) === JSON.stringify(cart[index])) {
			removeFromLocal(index)
			setCartItems(getLocal())
		}
	}

	useEffect(() => getUserCart, [])

	return (
		<div className="shopping-cart-products">
			{cartItems.map((item, index) => {
				return (
					<Card
						key={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
						onClick={() => removeFromCart(index)}
						inCart={true}
					/>
				)
			})}
		</div>
	)
}

export default ShoppingCart
