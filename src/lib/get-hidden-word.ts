import { gameData } from "../data/word-data";

export const getHiddenWord = () => {
	const wordIndex = Math.floor(Math.random() * gameData.length);
	const hiddenPhrase = gameData[wordIndex];

	return hiddenPhrase;
}