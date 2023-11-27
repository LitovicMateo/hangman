import { useCallback, useEffect, useState } from 'react'
import { getHiddenWord } from '../lib/get-hidden-word';
import { keyboardValidator } from '../lib/keydown-validator';
import { getUniqueChars } from '../lib/get-unique-chars';
import WordDisplay from './word-display';
import { motion } from "framer-motion";


const GameScreen = () => {

	const [gameStatus, setGameStatus] = useState<"Won" | "Loss">();
	const [guesses, setGuesses] = useState<string[]>([]);
	const [word, setWord] = useState<string>(getHiddenWord());
	const [correct, setCorrect] = useState<string[]>([]);
	const [wrong, setWrong] = useState<string[]>([]);
	const [message, setMessage] = useState<string>("");

	const handleKeyPress = useCallback(
		(ev: KeyboardEvent) => {
			const key = ev.key;
			const keyIsValid = keyboardValidator(ev);

			if (!keyIsValid) {
				return;
			}

			// check if game is won or lost
			if (gameStatus === "Loss" || gameStatus === "Won") {
				return;
			}

			// check if key is already pressed
			const isAlreadyPressed = guesses.includes(key);
			if (isAlreadyPressed) {
				return;
			}

			setGuesses((prev) => [...prev, key.toLowerCase(), key.toUpperCase()]);

			const unique = getUniqueChars(word);

			// if key in uniqueChars push it in correct
			// else push it in wrong

			const isCorrect = unique.filter((char) => char === key);

			if (isCorrect.length === 1) {
				const correctLength = correct.length + 1;
				const wordLength = unique.length;

				if (correctLength === wordLength) {
					setGameStatus("Won");
					setMessage("You guessed correctly!");
				}
				setCorrect((prev) => [...prev, ...isCorrect]);
			} else {
				const wrongLength = wrong.length + 1;

				if (wrongLength === 5) {
					setGameStatus("Loss");
					setMessage("Game over!");
				}

				setWrong((prev) => [...prev, key]);
			}
		},
		[gameStatus, guesses, word, correct.length, wrong.length]
	);


	useEffect(() => {
		const key = document.addEventListener("keydown", handleKeyPress);
		console.log(key);

		return () => {
			document.removeEventListener("keydown", handleKeyPress);
		};
	}, [handleKeyPress]);

	return (
		<motion.div 
			initial={{opacity: 0}}
			animate={{
				opacity: 1,
				transition: {
					delay: 2,
					duration: 2
				}
			}}
			className="absolute z-10 flex flex-col gap-8 justify-center items-center w-screen h-screen">
			<WordDisplay game={gameStatus} guesses={guesses} word={word} />
			<p>{`Misses: ${wrong.length}/5`}</p>
			<p>{message}</p>
		</motion.div>
	)
}

export default GameScreen