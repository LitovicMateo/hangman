import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
	array: string[];
	size: "sm" | "md" | "lg";
	fontStyle: "bold" | "italic" | "normal";
	game: boolean;
};

const TitleRow: React.FC<Props> = ({ array, size, fontStyle, game }) => {

	
	return (
		<div className="flex flex-row gap-2">
			<AnimatePresence>
				{!game &&
					array.map((el, i) => {
						const delay = i % 3 === 0 ? 2.2 : i % 2 === 0 ? 1.7 : 2.9;
						return (
							<motion.div
								key={i}
								initial={{
									opacity: 0,
								}}
								animate={{
									opacity: 1,
									transition: {
										duration: 5,
										delay: 0.5 + 1.2 * delay,
									},
								}}
								exit={{
									opacity: 0,
									transition: {
										duration: 2,
										delay: 0.5 + 1.2 * delay
									}
								}}
								className={`
					${size === "lg" && "text-2xl "}
					${size === "md" && "text-md"}
					${size === "sm" && "text-sm pt-2 pb-4"}
					${fontStyle === "bold" && "font-bold font-magic "}
					${fontStyle === "italic" && "italic"}
					
					`}
							>
								{el}
							</motion.div>
						);
					})}
			</AnimatePresence>
		</div>
	);
};

export default TitleRow;
