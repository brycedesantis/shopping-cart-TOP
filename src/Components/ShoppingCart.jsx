import { useEffect, useState } from "react"
import Card from "./Cards"

function ShoppingCart() {
	const [cartItems, setCartItems] = useState([])

	async function getUserCart() {
		const cartResponse = await fetch("https://fakestoreapi.com/carts/1")
		const data = await cartResponse.json()
		const fetchedProducts = []
		const toRender = []

		for (let i = 0; i < data.products.length; i++) {
			const productResponse = await fetch(
				`https://fakestoreapi.com/products/${data.products[i].productId}`
			)
			const pro = await productResponse.json()
			const { id, title, price, image } = pro
			fetchedProducts.push({
				id: id,
				title: title,
				price: price,
				image: image,
			})
		}

		setCartItems([...fetchedProducts])
	}

	useEffect(() => getUserCart)

	return (
		<div className="shopping-cart-products">
			{cartItems.map((item) => {
				return (
					<Card
						key={item.id}
						title={item.title}
						image={item.image}
						price={item.price}
						inCart={true}
					/>
				)
			})}
		</div>
	)
}

export default ShoppingCart
