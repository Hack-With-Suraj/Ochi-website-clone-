/* eslint-disable no-unused-vars */

import React from "react";

function Cards() {
	return (
		<div className="w-full h-[80vh] bg-black flex items-center px-[2.5vw] gap-5 font-['Bebas Neue']">
			<div className="cardcontainer h-[50vh] w-1/2">
				<div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
					<img
						className="w-32"
						src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
					/>
					<button className="absolute px-4 left-10 bottom-10 py-1 rounded-full border-2 text-[#cdea68] border-[#cdea68]">
						&copy;2019-2024
					</button>
				</div>
			</div>
			<div className="cardcontainer flex gap-5 h-[50vh] w-1/2 text-white">
				<div className="card relative w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center">
					<img
						className="w-32"
						src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
					/>
					<button className="absolute px-3 left-10 bottom-10 py-1 rounded-full border-2">
						Rating 5.0 on Clutch
					</button>
				</div>
				<div className="card relative w-1/2 rounded-xl h-full bg-[#212121] flex items-center justify-center">
					<img
						className="w-32"
						src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
					/>
					<button className="absolute px-3 left-10 bottom-10 py-1 rounded-full border-2">
						Business BootCamp Alumini
					</button>
				</div>
			</div>
		</div>
	);
}

export default Cards;
