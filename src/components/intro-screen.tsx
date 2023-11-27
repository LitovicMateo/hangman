import React, { useState } from "react";
import { motion } from "framer-motion";
import TitleScreen from "./title-screen";

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

	const wandVariants = {
		initial: {
			rotateZ: 215,
			transformOrigin: "bottom"
		},
		clicked: {
			rotateZ: [215, 200, 200, 215],
			transformOrigin: "bottom",
			transition: {
				duration: 2,
			}
		}
	}

	return (
		<div onClick={openMapHandler} className="relative flex h-screen w-full overflow-hidden">
			<motion.div
				initial="closed"
				animate={openMap ? "openLeft" : "closed"}
				variants={variants}
				className="bg-[url('https://www.filterforge.com/filters/11294.jpg')] bg-blend-overlay bg-cover w-[50%] h-full border-r-2 border-gray-700 drop-shadow-lg"
			></motion.div>
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
			<motion.div 
				initial="initial"
				animate={openMap ? "clicked" : "initial"}
				variants={wandVariants}
				className="fixed bottom-[250px] left-[calc(50%-50px)] translate-x-[-50%] rotate-[225deg] h-[200px] aspect-square">
				<img src="https://pngimg.com/uploads/wand/wand_PNG1.png" alt="wand" />
			</motion.div>

		</div>
	);
};

export default IntroScreen;
