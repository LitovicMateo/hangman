import { useState } from "react";
import GameScreen from "./components/game-screen";
import IntroScreen from "./components/intro-screen";

function App() {
	const [startGame, setStartGame] = useState<boolean>(false);

	const gameHandler = () => {
		setStartGame(true);
	};

	return (
		<main className="h-screen w-full bg-[url('https://www.filterforge.com/filters/11294.jpg')] bg-cover">
			<div className="flex justify-center items-center w-full h-full backdrop-brightness-110">
				<IntroScreen game={startGame} startGame={gameHandler} />
				{startGame && <GameScreen />}
			</div>
		</main>
	);
}

export default App;
