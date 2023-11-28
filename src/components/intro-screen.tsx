import React, { useState } from "react";
import { motion } from "framer-motion";

import TitleScreen from "./title-screen";
import Wand from "./wand";

type Props = {
	startGame: () => void;
	game: boolean;
};

const IntroScreen: React.FC<Props> = ({ startGame, game }) => {
	const [openMap, setOpenMap] = useState<boolean>(false);

	const openMapHandler = () => {
		setOpenMap(true);
	};

	const variants = {
		closed: {
			x: 0,
		},
		openLeft: {
			rotateY: -180,
			transformOrigin: "left",
			transition: {
				delay: 0.5,
				duration: 5,
				type: "easeInOut",
			},
		},
		openRight: {
			rotateY: 180,
			transformOrigin: "right",
			transition: {
				delay: 0.5,
				duration: 5,
				type: "easeInOut",
			},
		},
	};

	return (
		<div onClick={openMapHandler} className="relative flex h-screen w-full overflow-hidden">
			<motion.div
				initial="closed"
				animate={openMap ? "openLeft" : "closed"}
				variants={variants}
				className="bg-[url('https://www.filterforge.com/filters/11294.jpg')] bg-blend-overlay bg-cover w-[50%] h-full border-r-2 border-gray-700 drop-shadow-lg"
			>
				<img src="https://i.pngimg.me/thumb/f/720/m2i8K9m2H7Z5H7d3.jpg" alt="" />
			</motion.div>
			<motion.div
				initial="closed"
				animate={openMap ? "openRight" : "closed"}
				variants={variants}
				className="bg-[url('https://www.filterforge.com/filters/11294.jpg')] bg-cover w-[50%] h-full border-l-2 border-gray-700 shadow-sm"
			>
				<div className="w-full h-full backdrop-brightness-95"></div>
			</motion.div>
			<div className="absolute z-10 flex justify-center items-center w-full h-full backdrop-brightness-95">
				{openMap && <TitleScreen game={game} startGame={startGame} />}
			</div>
			<Wand />
		</div>
	);
};

export default IntroScreen;
