import React from "react";

const About = () => {
	return (
		<div
			name="about" id="about"
			className="w-full h-full bg-[#0a192f] pb-20 flex justify-center items-center p-4 text-gray-300 pt-20">
			<div className="flex flex-col w-full justify-center items-center ">
				<div className="w-full">
					<div className="pb-8 pl-4 flex flex-col w-full justify-center items-center ">
						<p className="text-4xl font-bold inline border-b-4 border-pink-600">
							About Me.
						</p>
					</div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>
							Hi. I'm Rohith, nice to meet you. Please take a look
							around.
						</p>
					</div>
					<div>
						<p>
							I am passionate about building excellent software
							that improves the lives of those around me. I
							am keen to gain knowledge in creating software for clients ranging
							from individuals and small-businesses all the way to
							large enterprise corporations. What would you do if
							you had a software expert available at your
							fingertips?
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
