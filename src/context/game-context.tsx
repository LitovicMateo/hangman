import { createContext, useCallback, useState } from "react";
import { getHiddenWord } from "../lib/get-hidden-word";
import { getUniqueChars } from "../lib/get-unique-chars";

type GameContextType = {
	gameStatus: "Won" | "Loss" | "Ongoing";
	guesses: string[];
	correct: string[];
	wrong: string[];
	word: string;
	message: string;
	initialLoad: boolean;
	handleKeyPress: (key: string) => void;
	resetGame: () => void;
};

export const GameContext = createContext<GameContextType>({
	gameStatus: "Ongoing",
	guesses: [],
	correct: [],
	wrong: [],
	message: "",
	word: "",
	initialLoad: true,
	handleKeyPress: () => {},
	resetGame: () => {},
});

export const GameContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [gameStatus, setGameStatus] = useState<"Won" | "Loss" | "Ongoing">("Ongoing");
	const [guesses, setGuesses] = useState<string[]>([]);
	const [initialLoad, setInitialLoad] = useState<boolean>(true)
	const [word, setWord] = useState<string>(getHiddenWord());
	const [correct, setCorrect] = useState<string[]>([]);
	const [wrong, setWrong] = useState<string[]>([]);
	const [message, setMessage] = useState<string>("");

	const handleKeyPress = useCallback((key: string) => {
			setGuesses((prev) => [...prev, key.toLowerCase(), key.toUpperCase()]);

			const unique = getUniqueChars(word);
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
		[word, correct.length, wrong.length]
	);

	const resetGame = () => {
		// cleanup to initial values
		setGameStatus("Ongoing");
		setGuesses([]);
		setCorrect([]);
		setWrong([]);
		setMessage('');
		setInitialLoad(false)
	
		// set new word
		setWord(getHiddenWord())
	}

	return (
		<GameContext.Provider
			value={{ gameStatus, guesses, correct, wrong, word, message, initialLoad, handleKeyPress, resetGame }}
		>
			{children}
		</GameContext.Provider>
	);
};
