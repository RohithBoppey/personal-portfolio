import React, { useState } from "react";
import {
	FaBars,
	FaTimes,
	FaFacebook,
	FaInstagram,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const clickHandler = () => setNav(!nav);

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
			{/* Logo */}
			<div>
				<h1 style={{ fontFamily: "Varela Round", fontSize: "30px" }}>
					Rohith Boppey.
				</h1>
			</div>

			{/* Navbar items */}
			{/* If width < 768 px, hide */}
			<ul className="hidden md:flex">
				<li>
					<a href="#home">Home</a>
				</li>
				<li>
					<a href="#about">About Me</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#work">Prev. Work</a>
				</li>
				<li>
					<a href="#contact">Contact Me</a>
				</li>
			</ul>

			{/* Menu button */}
			<div className="md:hidden z-10" onClick={clickHandler}>
				{nav ? <FaTimes /> : <FaBars />}
			</div>

			{/* Remote menu when closed */}

			<ul
				className={
					!nav
						? "hidden"
						: "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
				}>
				<li className="py-6 text-4xl">Home</li>
				<li className="py-6 text-4xl">About</li>
				<li className="py-6 text-4xl">Skills</li>
				<li className="py-6 text-4xl">Prev. Work</li>
				<li className="py-6 text-4xl">Contact me</li>
			</ul>

			{/* Social icons -> On the Left */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
						<a
							href="https://www.facebook.com/profile.php?id=100009060176380"
							className="flex justify-between items-center w-full text-gray-300">
							Facebook <FaFacebook size={20} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
						<a
							href="https://www.instagram.com/ro.hit.h__/"
							className="flex justify-between items-center w-full text-gray-300">
							Instagram <FaInstagram size={20} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
						<a
							href="https://www.linkedin.com/in/rohithboppey/"
							className="flex justify-between items-center w-full text-gray-300">
							Linkedin <FaLinkedin size={20} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
						<a
							href="https://github.com/RohithBoppey"
							className="flex justify-between items-center w-full text-gray-300">
							Github <FaGithub size={20} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
