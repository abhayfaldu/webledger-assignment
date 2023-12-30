import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { base_url } from "../utils/fetchConfig";

const SavedRecipe = () => {
	const [userSavedRecipes, setUserSavedRecipes] = useState(
		JSON.parse(localStorage.getItem("savedRecipes")) || []
	);
	const [isLoading, setIsLoading] = useState(true);
	const [authToken, setAuthToken] = useState(
		localStorage.getItem("token") || ""
	);

	useEffect(() => {
		setAuthToken(localStorage.getItem("token") || "");
		const fetchData = async () => {
			setIsLoading(true);
			try {
				// Fetch user saved recipes Ids
				const savedRecipesIds = await axios.get(
					`${base_url}/user/saved-recipes`,
					{
						headers: {
							Authorization: `Bearer ${authToken}`,
							Accept: "application/json",
						},
					}
				);

				// Check if saved recipes data exists
				if (savedRecipesIds?.data && savedRecipesIds?.data[0]) {
					const fetchRecipes = async () => {
						try {
							// Fetch recipe information using IDs from savedRecipesIds
							const recipeResponse = await axios.get(
								`https://api.spoonacular.com/recipes/informationBulk?apiKey=cde305f3c7994b328b42e09db5b96881&ids=${savedRecipesIds.data.toString()}`,
								{
									headers: {
										Authorization: `Bearer ${authToken}`,
										Accept: "application/json",
									},
								}
							);
							// Set user saved recipes and update loading state
							setUserSavedRecipes(recipeResponse.data);
							localStorage.setItem(
								"savedRecipes",
								JSON.stringify(recipeResponse.data)
							);
							setIsLoading(false);
						} catch (error) {
							console.log(error);
						}
					};
					// Trigger recipe fetching
					fetchRecipes();
				}

				setIsLoading(false);
			} catch (error) {
				console.log(error);
			}
		};

		// Trigger the fetchData function when the component mounts
		fetchData();
	}, []);

	return (
		<>
			{isLoading ? (
				<h2>Loading...</h2>
			) : (
				<section className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
					{userSavedRecipes?.map((recipe) => (
						<Card data={recipe} key={recipe.id}></Card>
					))}
				</section>
			)}
		</>
	);
};

export default SavedRecipe;
