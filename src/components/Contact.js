import React from "react";

const Contact = () => {
	return (
		<div
			className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4 pt-20"
			name="contact" id="contact">
			<form
				action="https://getform.io/f/7ca21690-8a8c-4383-981a-97284439bb8a"
				method="POST"
				className="flex flex-col max-w-[600px] w-full"
				autoComplete="off">
				<div className="pb-8">
					<div className="flex flex-col justify-center items-center w-full h-full">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 ">
							Contact Me.
						</p>
					</div>
					<p className="text-gray-300 pt-8">
						Submit the form below or shoot me an email -
						rohithboppey1298@gmail.com
					</p>
				</div>
				<input
					className="bg-[#ccd6f6] p-2"
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className="my-4 p-2 bg-[#ccd6f6]"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="bg-[#ccd6f6] p-2"
					name="message"
					rows="10"
					placeholder="Message"></textarea>
				<button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
					Let's Collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;
