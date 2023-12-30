import React, { useEffect, useState } from "react";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { RiRecordCircleFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
	const [user, setUser] = useState({});
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const handleMenuToggler = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handelLogout = () => {
		localStorage.removeItem("user");
		localStorage.removeItem("token");
		localStorage.removeItem("savedRecipes");
		setUser({});
	};

	const navItems = [
		{ path: "/", title: "Start a search" },
		{ path: `/saved-recipe/`, title: "Saved Recipes" },
		{ path: "/add-recipe", title: "Add Recipe" },
	];

	useEffect(() => {
		setUser(JSON.parse(localStorage.getItem("user")) || {});
	}, []);

	return (
		<header className="xl:px-24 px-4 bg-indigo-100">
			<nav className="container max-w-screen-2xl mx-auto flex justify-between items-center py-6">
				{/* logo */}
				<Link className="flex items-center text-2xl text-black" to="/">
					<RiRecordCircleFill className="text-5xl" />
					<span className="font-bold mx-3">Food Recipes</span>
				</Link>

				{/* Nav links */}
				<ul className="hidden md:flex gap-12">
					{navItems.map(({ path, title }) => (
						<li key={path} className="text-base text-primary">
							<NavLink
								to={path}
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								{title}
							</NavLink>
						</li>
					))}
				</ul>

				{/* login and signup */}
				{user?.firstName ? (
					<div className="text-base text-primary font-medium space-x-5 hidden lg:block">
						<button>
							<Link to="" className="py-2 px-5 rounded border">
								{user?.firstName} {user?.lastName}
							</Link>
						</button>
						<button onClick={handelLogout}>
							<Link
								to=""
								className="py-2 px-5 rounded border text-white bg-indigo-500"
							>
								Log Out
							</Link>
						</button>
					</div>
				) : (
					<div className="text-base text-primary font-medium space-x-5 hidden lg:block">
						<button>
							<Link to="/login" className="py-2 px-5 rounded border">
								Log in
							</Link>
						</button>
						<button>
							<Link
								to="/signup"
								className="py-2 px-5 rounded border text-white bg-indigo-500"
							>
								Sign up
							</Link>
						</button>
					</div>
				)}

				{/* small screen menu button */}
				<div className="md:hidden block">
					<button onClick={handleMenuToggler}>
						{isMenuOpen ? (
							<FaXmark className="w-5 h-5 text-primary" />
						) : (
							<FaBarsStaggered className="w-5 h-5 text-primary" />
						)}
					</button>
				</div>
			</nav>

			<div
				className={`px-4 bg-black py-5 rounded-sm ${
					isMenuOpen ? "" : "hidden"
				}`}
			>
				<ul>
					{navItems.map(({ path, title }) => (
						<li
							key={path}
							className="text-base text-white first:text-white py-1"
						>
							<NavLink
								to={path}
								className={({ isActive }) => (isActive ? "active" : "")}
							>
								{title}
							</NavLink>
						</li>
					))}
					<li className="text-white py-1">
						<Link to={"/login"}>Log in</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Navbar;
