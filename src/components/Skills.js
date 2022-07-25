import React from "react";
import {
	DiHtml5,
	DiCss3,
	DiJavascript,
	DiReact,
	DiMongodb,
	DiNodejs,
	DiGithubBadge
} from "react-icons/di";
import { SiExpress } from "react-icons/si";

const Skills = () => {
	return (
		<div
			name="skills" id="skills"
			className="w-full h-full bg-[#0a192f] text-gray-300 pt-20">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="text-center pb-8 pl-4">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600">
						My Skills.
					</p>
				</div>
				<p>These are the technologies I worked with till date.</p>

				<div className="px-20 w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-y-5">
					<div className="mx-auto justify-center items-center">
						<DiHtml5 size={50} className='w-full'/>
						<p className="py-2">HTML</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiCss3 size={50} className='w-full'/>
						<p className="py-2">CSS</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiJavascript size={50} className='w-full'/>
						<p className="py-2">JS</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiGithubBadge size={50} className='w-full'/>
						<p className="py-2">Github</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiNodejs size={50} className='w-full'/>
						<p className="py-2">NodeJS</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<SiExpress size={50} className='w-full'/>
						<p className="py-2">Express</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiMongodb size={50} className='w-full'/>
						<p className="py-2">MongoDB</p>
					</div>
					<div className="mx-auto justify-center items-center">
						<DiReact size={50} className='w-full'/>
						<p className="py-2">ReactJS</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
