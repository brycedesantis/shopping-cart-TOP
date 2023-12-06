import "../styles/Navbar.css"

function Navbar() {
	return (
		<>
			<header>
				<div className="header-div">
					<h1 className="title">Shopping App</h1>
					<button className="shopping-icon">
						<span className="material-symbols-outlined">shopping_cart</span>
					</button>
				</div>
			</header>
		</>
	)
}

export default Navbar
