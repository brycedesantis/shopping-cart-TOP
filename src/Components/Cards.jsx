import "../styles/Cards.css"
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Stack,
	Image,
	Heading,
	Text,
	Divider,
	Button,
} from "@chakra-ui/react"

function CardElement({
	title,
	image,
	price,
	inCart = false,
	onClick,
	quantity,
}) {
	return (
		// <div className="card">
		// 	<img className="card-image" src={image} alt={title} />
		// 	<div className="card-body">
		// 		<div className="card-head">
		// 			<h2 className="card-title">{title}</h2>
		// 			<h3 className="card-price">
		// 				<span className="material-symbols-outlined">attach_money</span>
		// 				{price}
		// 			</h3>
		// 		</div>
		// 		{inCart ? (
		// 			<button className="card-button" onClick={onClick}>
		// 				Remove from cart
		// 			</button>
		// 		) : (
		// 			<button onClick={onClick} className="card-button">
		// 				Add to cart
		// 			</button>
		// 		)}
		// 	</div>
		// </div>

		<Card maxW="sm" size="sm" variant="outline">
			<CardBody>
				<Image m={"auto"} h="150px" src={image} alt={title} borderRadius="lg" />
				<Stack mt="6" spacing="3">
					<Heading size="md">{title}</Heading>
					<Text color="blue.600" fontSize="2xl">
						${price}
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				{inCart ? (
					<Button onClick={onClick} variant="solid" colorScheme="blue">
						Remove from cart
					</Button>
				) : (
					<Button onClick={onClick} variant="solid" colorScheme="blue">
						Add to cart
					</Button>
				)}
			</CardFooter>
		</Card>
	)
}

export default CardElement
