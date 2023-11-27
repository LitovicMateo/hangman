import React from "react";
import { getWordArr } from "../lib/get-word-arr";

type Props = {
	guesses: string[];
	word: string;
	game: "Won" | "Loss" | undefined
}

const WordDisplay: React.FC<Props> = ({guesses, word, game}) => {

	const wordArr = getWordArr(word);

	return (
		<section>
			<div className="flex flex-col gap-4 justify-center items-center">
				{wordArr.map((arr: string[], index: number) => {
					return (
						<div key={index} className="flex flex-row gap-2">
							{arr.map((letter: string, i: number) => {
								return <div key={letter + i.toString()} className="font-magic font-semibold w-6 h-12 text-2xl pb-1 text-center border-b-2 border-gray-900">
									<p>
										{guesses.includes(letter) ? letter : (game === "Loss") ? <span className="text-red-500 font-bold">{letter}</span> : ""}
									</p>
								</div>;
							})}
						</div>
					);
				})}
			</div>
		</section>
	)
};

export default React.memo(WordDisplay);
