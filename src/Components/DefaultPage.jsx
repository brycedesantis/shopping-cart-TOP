import { Heading, VStack, StackDivider } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import "../styles/DefaultPage.css"

export default function DefaultPage() {
	return (
		<VStack
			h={"500px"}
			direction={"row"}
			m={"0 auto"}
			justifyContent={"center"}
			alignItems={"center"}
			divider={<StackDivider />}
		>
			<VStack
				direction={"column"}
				alignItems={"flex-start"}
				mt={10}
				spacing={6}
			>
				<Heading className="slide-in-heading-first" as={"h1"} size={"4xl"}>
					Welcome
				</Heading>

				<Heading className="slide-in-heading-second" as={"h2"} size={"4xl"}>
					to the
				</Heading>
				<Heading className="slide-in-heading-third" as={"h3"} size={"4xl"}>
					I.T.S <Link to={"homepage"}>shop</Link>!
				</Heading>
			</VStack>
		</VStack>
	)
}
