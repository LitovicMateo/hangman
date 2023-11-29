import { useContext } from "react";
import { motion } from "framer-motion";
import { GameContext } from "../context/game-context";

const LineSVG = ({index}: {index: number}) => {

	const gameCtx = useContext(GameContext)

	return (
		<motion.svg
			className="absolute bottom-0 "
			width="103"
			height="4"
			viewBox="0 0 103 4"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			// initial={{opacity: 0, x: -100}}
			// animate={{opacity: 1, x: 0, transition:{ duration: 2}}}
		>
			<g filter="url(#filter0_d_1715_2)">
				<motion.path
					initial={{pathLength: 0, opacity: 0}}
					animate={{pathLength: 1, opacity: 1, transition: {duration: 4, delay: gameCtx.initialLoad ? 4.6 + 0.2 * index : 0.8 * index}}}
					d="M2 1.5H102"
					stroke="#666666"
					stroke-linecap="round"
					stroke-linejoin="bevel"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d_1715_2"
					x="0"
					y="0.5"
					width="103"
					height="3"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
						result="hardAlpha"
					/>
					<feOffset dx="-0.5" dy="0.5" />
					<feGaussianBlur stdDeviation="0.5" />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow_1715_2"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow_1715_2"
						result="shape"
					/>
				</filter>
			</defs>
		</motion.svg>
	);
};

export default LineSVG;
