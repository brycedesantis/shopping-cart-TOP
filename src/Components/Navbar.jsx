import { Outlet } from "react-router"
import "../styles/Navbar.css"
import { Link } from "react-router-dom"

function Navbar() {
	return (
		<>
			<header>
				<div className="header-div">
					<Link to="homepage">
						<h1 className="title">Shopping App</h1>
					</Link>
					<button className="shopping-icon">
						<Link to="shopping-cart">
							<span className="material-symbols-outlined">shopping_cart</span>
						</Link>
					</button>
				</div>
			</header>
			<main className="main-content">
				<Outlet />
			</main>
		</>
	)
}

export default Navbar
