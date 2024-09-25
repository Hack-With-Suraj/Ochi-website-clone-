/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";
import React from "react";

function About() {

	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed=".05"
			className="w-full p-20 text-white bg-black rounded-tl-3xl rounded-tr-3xl"
		>
			<h1 className="font-['Bebas Neue'] text-[3.7vw] leading-[3.5vw] tracking-tight">
				Ochi is a strategic partner for fast-growing tech businesses that need
				to raise funds, sell products,
				<br />
				explain complex ideas, and hire great people.
			</h1>
			<div className="w-full border-t-[1px] border-zinc-400 mt-10 mb-15 text-base font-normal flex justify-between items-center font-['Bebas Neue'] leading-[1.5vw]">
				<div className="flex  w-1/2  mt-[-11vw]">
					<p>What you can expect:</p>
				</div>
				<div className="flex items-center justify-between w-1/2 mt-5 pr-[5vw]">
					<p className="flex-col w-1/2">
						<h1>
							We create tailored presentations to help you persuade your
							colleagues, clients, or investors. Whether its live or digital,
							delivered for one or a hundred people.
						</h1>
						<h1 className="mt-[2vw]">
							We believe the mix of strategy and design (with a bit of coffee)
							is what makes your message clear, convincing, and captivating.
						</h1>
					</p>
					<p className="underline underline-offset-1 w-1/2 pt-[7vw] pl-[10vw]">
						S:
						<br />
						<br />
						Instagram
						<br />
						Behance
						<br />
						FaceBook
						<br />
						Linkedin{" "}
					</p>
				</div>
			</div>
			<div className="w-full flex gap-5 pt-[1.5vw] border-t-[1px] border-zinc-400 mt-20 mb-[-2vw]">
				<div className="w-1/2">
					<h1 className="text-5xl">Our approach:</h1>
					<button className="flex gap-10 uppercase items-center px-5 py-4 mt-[2vw] rounded-full text-white bg-zinc-900">
						Read More
						<div className="w-2 h-2 bg-zinc-200 rounded-full"></div>
					</button>
				</div>
				<div className="w-[65%] h-[70vh] ">
					<img
						className="w-full h-full bg-cover bg-center rounded-3xl"
						src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default About;
