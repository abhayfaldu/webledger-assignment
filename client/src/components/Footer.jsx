import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { RiRecordCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="mx-auto xl:px-24 px-4 mt-5 bg-indigo-100 ">
			<div className="container max-w-screen-2xl mx-auto py-5 flex flex-col flex-1 gap-4">
				<div className="flex items-center">
					<RiRecordCircleFill className="text-5xl" />
					<p className="text-2xl font-bold mx-3">Food Recipes</p>
				</div>
				<p className="">
					A recipe serves as a detailed guide outlining the steps to prepare or
					create a particular dish. Within this culinary framework, a sub-recipe
					refers to a set of instructions specifically dedicated to crafting an
					individual ingredient. This sub-recipe is subsequently referenced in
					the main recipe's instructions as part of the overall culinary
					composition.
				</p>
				<div className="flex gap-5 mt-3">
					<Link href="/">
						<FaTwitter />
					</Link>
					<Link href="/">
						<FaFacebook />
					</Link>
					<Link href="">
						<FaLinkedin />
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
