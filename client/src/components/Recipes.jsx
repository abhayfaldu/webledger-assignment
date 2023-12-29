import React from "react";

const Recipes = ({ result }) => {
	return (
		<>
			<div>
				<h3 className="text-lg font-bold mb-2">{result.length} Recipes</h3>
			</div>
			<section>{result}</section>
		</>
	);
};

export default Recipes;
