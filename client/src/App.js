import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SavedRecipe from "./pages/SavedRecipe";
import RecipesDetails from "./pages/RecipesDetails";
import Signup from "./pages/Signup";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/login" element={<Login />} />
					<Route path="/recipe/:id" element={<RecipesDetails />} />
					<Route path="/saved-recipe" element={<SavedRecipe />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
