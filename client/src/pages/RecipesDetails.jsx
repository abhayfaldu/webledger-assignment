import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const RecipesDetails = () => {
	const { id } = useParams();
	const [recipes, setRecipes] = useState([]);
	console.log(recipes);
	useEffect(() => {
		fetch(
			`https://api.spoonacular.com/recipes/${id}/information?apiKey=109372c243a54659902b861f188df5db`
		)
			.then((res) => res.json())
			.then((data) => setRecipes(data));
	}, []);

	return (
		<div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
			<PageHeader title={"Recipe Details Page"} path={"single recipes"} />
			<h2>RecipeDetails: {id}</h2>
			<h1 className="text-5xl font-bold mt-5 mb-5">
				Recipe name: {recipes.title}
			</h1>
			<img src={recipes.image} alt="" />
			<h3 className="font-semibold text-2xl">Instructions :</h3>
			<p className="mt-2 mb-2">{recipes.instructions}</p>
			<div>
				<h3 className="font-semibold mt-2 text-2xl">Ingredients :</h3>
				{recipes?.extendedIngredients?.map((item, index) => (
					<div key={index}>
						<li className="flex flex-col">
							<h2>{index + 1}.</h2>
							<h3 className="font-semibold">name: {item.name}</h3>
							<h3 className="font-semibold">aisle: {item.aisle}</h3>
							<img src={item.image} alt="" />
						</li>
					</div>
				))}
			</div>
			<div>
				<h1 className="font-semibold mt-2 text-2xl">Dites :</h1>
				{recipes?.diets?.map((item, index) => (
					<div key={index}>
						<li className="flex flex-col">
							<h3 className="font-semibold list-disc">{item}</h3>
						</li>
					</div>
				))}
			</div>
			<div>
				<h1 className="font-semibold mt-2 text-2xl">Dites :</h1>
				{recipes?.dishTypes?.map((item, index) => (
					<div key={index}>
						<li className="flex flex-col">
							<h3 className="font-semibold list-disc">{item}</h3>
						</li>
					</div>
				))}
			</div>
		</div>
	);
};

export default RecipesDetails;
