import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Wand = () => {
	const [moveWand, setMoveWand] = useState<boolean>(false);

	const moveWandHandler = () => {
		setMoveWand(true);
	};

	useEffect(() => {
		document.addEventListener("click", moveWandHandler);
	}, [moveWandHandler]);

	const wandVariants = {
		initial: {
			rotateZ: 215,
			transformOrigin: "bottom",
		},
		clicked: {
			rotateZ: [215, 200, 200, 215],
			transformOrigin: "bottom",
			transition: {
				duration: 2,
			},
		},
	};

	return (
		<motion.div
			onAnimationComplete={() => setMoveWand(false)}
			initial="initial"
			animate={moveWand ? "clicked" : "initial"}
			variants={wandVariants}
			className="fixed bottom-[250px] left-[calc(50%)] translate-x-[-50%] rotate-[225deg] h-[100px] md:h-[150px] aspect-square"
		>
			<img src="https://pngimg.com/uploads/wand/wand_PNG1.png" alt="wand" />
		</motion.div>
	);
};

export default Wand;
