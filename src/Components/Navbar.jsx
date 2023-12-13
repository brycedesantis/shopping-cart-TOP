import { Outlet } from "react-router"
import "../styles/Navbar.css"
import { Link } from "react-router-dom"
import { Button, Heading } from "@chakra-ui/react"

function Navbar() {
	return (
		<>
			<header>
				<div className="header-div">
					<Link to="/">
						<Heading as={"h1"} noOfLines={1} color="blue.600">
							I.T.S
						</Heading>
					</Link>

					<div className="links">
						<Button variant={"ghost"} colorScheme="blue">
							<Link to={"homepage"}>
								<Heading as={"h2"} noOfLines={1}>
									Shop
								</Heading>
							</Link>
						</Button>

						<Button variant={"ghost"}>
							<Link to="shopping-cart">
								<span className="material-symbols-outlined">shopping_cart</span>
							</Link>
						</Button>
					</div>
				</div>
			</header>
			<main className="main-content">
				<Outlet />
			</main>
		</>
	)
}

export default Navbar
