import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../utils/fetchConfig";

const SavedRecipe = () => {
	const [user, setUser] = useState();
	const [userWishlist, setUserWishlist] = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
	// 	const fetchData = async () => { // 		try {
	// 			setIsLoading(true);
	// 			const response = await axios.get(
	// 				`http://localhost:5000/api/user/wishlist`,
	// 				config
	// 			);

	// 			setUser((prevUser) => {
	// 				if (
	// 					response.data &&
	// 					response.data.wishlist &&
	// 					response.data.wishlist[0]
	// 				) {
	// 					const fetchRece = async () => {
	// 						try {
	// 							const recipeResponse = await axios.get(
	// 								`https://api.spoonacular.com/recipes/informationBulk?ids=${response.data.wishlist.toString()}&apiKey=109372c243a54659902b861f188df5db`,
	// 								config
	// 							);
	// 							setUserWishlist(recipeResponse.data);
	// 							setIsLoading(false);
	// 						} catch (error) {}
	// 					};

	// 					fetchRece();
	// 				}

	// 				return response.data;
	// 			});
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};

	// 	fetchData();
	}, []);

	return (
		<>
			{userWishlist &&
				userWishlist.map((item, index) => (
					<section className="card" key={index}>
						<div className="flex gap-4 flex-col sm:flex-row items-start">
							<img src={item.image} alt="logo" />
							<div>
								<Link to={`/recipe/${item.id}`}>
									<h3 className="text-lg font-semibold mb-2 ">{item.title}</h3>
								</Link>
							</div>
						</div>
					</section>
				))}
		</>
	);
};

export default SavedRecipe;
