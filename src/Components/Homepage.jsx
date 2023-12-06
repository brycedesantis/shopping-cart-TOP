import { useEffect, useState } from "react"
import Card from "./Cards"
import "../styles/Homepage.css"

function Homepage() {
	const [products, setProducts] = useState([])

	async function getProducts() {
		const fetchedProducts = []

		const response = await fetch("https://fakestoreapi.com/products")
		// const { id, title, description, price, image } = await response.json()
		const data = await response.json()
		for (let i = 0; i < data.length; i++) {
			const { id, title, price, image } = data[i]
			fetchedProducts.push({
				id: id,
				title: title,
				price: price,
				image: image,
			})
		}
		setProducts([...fetchedProducts])
	}

	useEffect(() => getProducts)

	return (
		<div className="products-main-section">
			{products.map((product) => {
				return (
					<Card
						key={product.id}
						title={product.title}
						image={product.image}
						price={product.price}
					/>
				)
			})}
		</div>
	)
}

export default Homepage
