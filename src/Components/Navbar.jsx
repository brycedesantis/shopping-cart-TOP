import { Outlet } from "react-router"
import "../styles/Navbar.css"
import { Link } from "react-router-dom"
import {
	Button,
	ButtonGroup,
	Heading,
	Icon,
	IconButton,
	useColorMode,
} from "@chakra-ui/react"
import { MoonIcon } from "@chakra-ui/icons"
import { GiShoppingCart } from "@react-icons/all-files/gi/GiShoppingCart"

function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<>
			<header>
				<div className="header-div">
					<Link to="/">
						<Heading as={"h1"} noOfLines={1} color="blue.600">
							I.T.S
						</Heading>
					</Link>

					<ButtonGroup variant={"ghost"} colorScheme="blue">
						<IconButton
							onClick={toggleColorMode}
							aria-label="Toggle light/dark mode"
							icon={<MoonIcon w={7} h={7} />}
						/>
						<Button variant={"ghost"} colorScheme="blue">
							<Link to={"homepage"}>
								<Heading as={"h2"} noOfLines={1}>
									Shop
								</Heading>
							</Link>
						</Button>

						<Button variant={"ghost"}>
							<Link to="shopping-cart">
								<Icon as={GiShoppingCart} w={9} h={9} />
							</Link>
						</Button>
					</ButtonGroup>
				</div>
			</header>
			<main className="main-content">
				<Outlet />
			</main>
		</>
	)
}

export default Navbar
