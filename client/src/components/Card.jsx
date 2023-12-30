import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { base_url, config } from "../utils/fetchConfig";

const Card = ({ data }) => {
	const { title, image, id } = data;
	const { pathname } = useLocation();

	const handleSaveAndUnSave = async (id) => {
		try {
			const recipeId = id;
			await axios.post(`${base_url}/recipe/save`, { recipeId }, config);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section className="card bg-indigo-100 p-4">
			<div className="flex gap-4 flex-col md:flex-row items-start">
				<Link to={`/recipe/${id}`} className="w-fit flex-1">
					<img
						src={image}
						alt="logo"
						className="h-fit min-w-[100%] object-contain"
					/>
				</Link>
				<div className="flex flex-col flex-1">
					<Link to={`/recipe/${id}`} className="flex-1">
						<div>
							<h3 className="text-lg font-semibold mb-2 ">{title}</h3>
						</div>
					</Link>
					<button
						onClick={() => handleSaveAndUnSave(id)}
						className="bg-indigo-500 text-white px-8 py-2 mt-4 w-56"
					>
						{pathname === "/saved-recipe/" ? "Remove from Save" : "Save"}
					</button>
				</div>
			</div>
		</section>
	);
};

export default Card;
