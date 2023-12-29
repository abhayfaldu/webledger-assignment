import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { config } from "../utils/fetchConfig";

const Card = ({ data }) => {
	const { title, image, id } = data;

	// const handleWishlist = async (id) => {
	// 	try {
	// 		const recipeId = id;
	// 		const response = await axios.post(
	// 			`http://localhost:3001/api/recipe/wishlist`,
	// 			{ recipeId },
	// 			config
	// 		);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	return (
		<section className="card">
			<div className="flex gap-4 flex-col sm:flex-row items-start">
				<img src={image} alt="logo" />
				<div>
					<Link to={`/recipe/${id}`}>
						<h3 className="text-lg font-semibold mb-2 ">{title}</h3>
					</Link>
				</div>
			</div>
			<button
				// onClick={() => handleWishlist(id)}
				className="bg-indigo-500 text-white px-8 py-2 mt-4"
			>
				Add to Wishlist
			</button>
		</section>
	);
};

export default Card;
