/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import React from "react";

function Marquee() {
	return (
		<div
			data-scroll
			data-scroll-section
			data-scroll-speed="-.1"
			className="w-full py-10 bg-white rounded-tl-3xl rounded-tr-3xl"
		>
			<div className="text leading-none font-['Anton'] uppercase text-[25vw] text-black border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
				<motion.h1
					initial={{ x: "0" }}
					animate={{ x: "-100%" }}
					transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
					className="-mb-[7vw] pb-20 pr-20"
				>
					we are ochi
				</motion.h1>
				<motion.h1
					initial={{ x: "0" }}
					animate={{ x: "-100%" }}
					transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
					className="-mb-[7vw] pb-20 pr-20"
				>
					we are ochi
				</motion.h1>
				<motion.h1
					initial={{ x: "0" }}
					animate={{ x: "-100%" }}
					transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
					className="-mb-[7vw] pb-20 pr-20"
				>
					we are ochi
				</motion.h1>
			</div>
		</div>
	);
}

export default Marquee;
