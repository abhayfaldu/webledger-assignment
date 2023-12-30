import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Recipes from "../components/Recipes";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [recipes, setRecipes] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6;
	const api_url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=cde305f3c7994b328b42e09db5b96881`;

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(api_url, {
				headers: { "content-type": "application/json" },
			});
			setRecipes(response.data.results);
		} catch (error) {
			console.error("Error fetching data:", error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	const [query, setQuery] = useState("");
	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};

	const filteredItems = recipes?.filter(
		(recipe) => recipe.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
	);

	const calculatePageRange = () => {
		const startIndex = (currentPage - 1) * itemsPerPage;
		const endIndex = startIndex + itemsPerPage;
		return { startIndex, endIndex };
	};

	const nextPage = () => {
		if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
			setCurrentPage(currentPage + 1);
		}
	};

	const prevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const filteredData = (recipes) => {
		let filteredRecipes = recipes;
		const { startIndex, endIndex } = calculatePageRange();
		filteredRecipes = filteredRecipes?.slice(startIndex, endIndex);
		return filteredRecipes.map((data) => <Card data={data} key={data.id} />);
	};

	const data = filteredData(filteredItems);

	return (
		<div className="bg-[#fafafa] ">
			<Banner value={query} handleInputChange={handleInputChange} />
			<div className="container max-w-screen-2xl mx-auto md:grid grid-cols-4 gap-8 lg:pr-24 py-12">
				{/* // Recipe card */}
				<div className="col-span-4 bg-white p-4 rounded-sm">
					{isLoading ? (
						<p className="font-medium">Loading...</p>
					) : data.length > 0 ? (
						<Recipes data={data} />
					) : (
						<>
							<h3 className="text-lg font-bold mb-2">
								{filteredItems.length} Recipes
							</h3>
							<p>Not Found!</p>
						</>
					)}

					{data.length > 0 && (
						<div className="flex justify-center mt-4 space-x-8">
							<button
								className="py-2 px-5 rounded border"
								onClick={prevPage}
								disabled={currentPage === 1}
							>
								Previous
							</button>
							<span className="py-2 px-5 rounded border">
								Page {currentPage} of{" "}
								{Math.ceil(filteredItems.length / itemsPerPage)}
							</span>
							<button
								className="py-2 px-5 rounded border"
								onClick={nextPage}
								disabled={
									currentPage === Math.ceil(filteredItems.length / itemsPerPage)
								}
							>
								Next
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
