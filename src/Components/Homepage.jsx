import { useEffect, useState } from "react"
import "../styles/Homepage.css"
import { saveLocal } from "../Helpers/LocalStorage"
import CardElement from "./Cards"
import { SimpleGrid } from "@chakra-ui/react"

function Homepage() {
	const [products, setProducts] = useState([])
	const [sending, setSending] = useState(false)

	async function getProducts() {
		const fetchedProducts = []

		const response = await fetch("https://fakestoreapi.com/products")
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

	function addedToCart(index) {
		const sendable = [...products]
		sendable[index].toSend = true
		setProducts(sendable)
	}

	function sendToCart(index) {
		setSending(true)
		addedToCart(index)
		saveLocal(products[index - 1])
	}

	useEffect(() => getProducts)

	return (
		<SimpleGrid
			my={8}
			mx={16}
			spacing={4}
			templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
		>
			{products.map((product) => {
				return (
					<CardElement
						key={product.id}
						title={product.title}
						image={product.image}
						price={product.price}
						onClick={() => sendToCart(product.id)}
					/>
				)
			})}
		</SimpleGrid>
	)
}

export default Homepage
