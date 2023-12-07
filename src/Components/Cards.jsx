import "../styles/Cards.css"

function Card({ title, image, price, inCart = false, onClick }) {
	return (
		<div className="card">
			<img className="card-image" src={image} alt={title} />
			<div className="card-body">
				<div className="card-head">
					<h2 className="card-title">{title}</h2>
					<h3 className="card-price">
						<span className="material-symbols-outlined">attach_money</span>
						{price}
					</h3>
				</div>
				{inCart ? (
					""
				) : (
					<button onClick={onClick} className="card-button">
						Add to cart
					</button>
				)}
			</div>
		</div>
	)
}

export default Card
