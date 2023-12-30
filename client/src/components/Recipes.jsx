import React from "react";

const Recipes = ({ data }) => {
	return (
		<>
			<div>
				<h3 className="text-lg font-bold mb-2">{data.length} Recipes</h3>
			</div>
			<section className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{data}
			</section>
		</>
	);
};

export default Recipes;
