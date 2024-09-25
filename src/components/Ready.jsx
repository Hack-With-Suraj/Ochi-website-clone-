/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";

function Eyes() {
	const [rotate, setrotate] = useState(0);
	useEffect(() => {
		window.addEventListener("mousemove", (e) => {
			let mouseX = e.clientX;
			let mouseY = e.clientY;

			let deltaX = mouseX - window.innerWidth / 2;
			let deltaY = mouseY - window.innerHeight / 2;

			var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
			setrotate(angle - 180);
		});
	});

	return (
		<div className="eyes w-full h-screen overflow-hidden  rounded-xl">
			<div
				data-scroll
				data-scroll-section
				data-scroll-speed="-.7"
				className="relative w-full h-full bg-white"
			>
				<div className="">
					{["Ready", "to start", "the project?"].map((item, index) => {
						return (
							<div className="flex items-center leading-[12vw] text-black justify-center font-['Anton'] text-[200px] tracking-tight uppercase">
								{item}
							</div>
						);
					})}
					<div className="relative mt-[1vw] font-['Bebas Neue']">
						<div className="flex items-center justify-center">
							<button className="flex gap-10 uppercase items-center justify-center px-5 py-4 mt-[2vw] rounded-full text-white bg-zinc-900">
								Start the project
								<div className="w-2 h-2 bg-zinc-200 rounded-full"></div>
							</button>
						</div>

						<p className="flex justify-center items-center p-[1vw] uppercase">
							or
						</p>
						<div className="flex items-center justify-center">
							<button className="flex gap-10 uppercase items-center justify-center px-4 py-3  rounded-full text-black bg-[#cdea68] border-2 border-black">
								hello@ochi.design
								<div className="w-2 h-2 bg-zinc-900 rounded-full"></div>
							</button>
						</div>
					</div>
				</div>
                <div data-scroll
                    data-scroll-section
                    data-scroll-speed=".4"
                    className="absolute top-[35%] left-[35%] -translate-x-[50%] -translate-y-[50%] flex gap-10">
					<div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
						<div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
							<div
								style={{
									transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
								}}
								className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
							>
								<div className="w-10 h-10 rounded-full bg-zinc-100"></div>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
						<div className="relative w-2/3 h-2/3 rounded-full bg-zinc-900">
							<div
								style={{
									transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
								}}
								className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
							>
								<div className="w-10 h-10 rounded-full bg-zinc-100"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Eyes;
