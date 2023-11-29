import { useCallback, useContext, useEffect } from "react";
import { keyboardValidator } from "../lib/keydown-validator";
import WordDisplay from "./word-display";
import { motion } from "framer-motion";
import { GameContext } from "../context/game-context";

const GameScreen = () => {
	const gameCtx = useContext(GameContext)

	const handleKeyPress = useCallback(
		(ev: KeyboardEvent) => {
			const key = ev.key;
			const keyIsValid = keyboardValidator(ev);

			if (!keyIsValid) {
				return;
			}

			// check if game is won or lost
			if (gameCtx.gameStatus === "Loss" || gameCtx.gameStatus === "Won") {
				return;
			}

			// check if key is already pressed
			const isAlreadyPressed = gameCtx.guesses.includes(key);
			if (isAlreadyPressed) {
				return;
			}

			gameCtx.handleKeyPress(key)
		},
		[gameCtx]
	);

	const playAgainHandler = () => {
		gameCtx.resetGame()
	}

	useEffect(() => {
		const key = document.addEventListener("keydown", handleKeyPress);
		console.log(key);

		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [handleKeyPress]);

	return (
		<motion.div
			className="absolute z-10 flex flex-col gap-8 justify-center items-center w-screen h-screen"
		>
			{/* <Hand /> */}
			<WordDisplay game={gameCtx.gameStatus} guesses={gameCtx.guesses} word={gameCtx.word} />
			<p>{`Misses: ${gameCtx.wrong.length}/5`}</p>
			<p>{gameCtx.message}</p>
			{gameCtx.gameStatus !== "Ongoing" && <button onClick={playAgainHandler}>Play again?</button>}
		</motion.div>
	);
};

export default GameScreen;
