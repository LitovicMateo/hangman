import React from "react";
import TitleRow from "./title-row";
import { AnimatePresence } from "framer-motion";

type Props = {
	startGame: () => void;
	game: boolean;
};

const TitleScreen: React.FC<Props> = ({ startGame, game }) => {
	const screenClickHandler = () => {
		startGame();
	};

	const title1 = "Messers";
	const title2 = "Moony Wormtail";
	const title3 = "Padfoot & Prongs";
	const title4 = "are proud to present";
	const title5 = "THE";
	const title6 = "Hangman game";
	const arr1 = title1.split("");
	const arr2 = title2.split("");
	const arr3 = title3.split("");
	const arr4 = title4.split("");
	const arr5 = title5.split("");
	const arr6 = title6.split("");
	return (
		<div
			onClick={screenClickHandler}
			className="w-full h-screen flex flex-col justify-center items-center gap-2 text-lg font-semibold flex-wrap"
		>
						<TitleRow game={game} key={1} size="sm" fontStyle="italic" array={arr1} />
						<TitleRow game={game} key={2} size="lg" fontStyle="bold" array={arr2} />
						<TitleRow game={game} key={3} size="lg" fontStyle="bold" array={arr3} />
						<TitleRow game={game} key={4} size="sm" fontStyle="italic" array={arr4} />
						<TitleRow game={game} key={5} size="lg" fontStyle="bold" array={arr5} />
						<TitleRow game={game} key={6} size="lg" fontStyle="bold" array={arr6} />
		</div>
	);
};

export default TitleScreen;
