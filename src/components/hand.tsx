import React from "react";

const Hand = () => {
	const DUMMY_MISSES = ["A", "F", "P", "R", "L", "H"];

	return (
		<div className="relative rounded-xl overflow-hidden">
			<img
				src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Hands-PNG/Holding_Hand_PNG_Clipart.png?m=1572597324"
				alt=""
			/>
			<div className=" absolute left-[35%] bottom-[30%] rotate-[-35deg] flex gap-2 font-magic">
				<span className="font-semibold text-red-800 text-2xl">
					{DUMMY_MISSES[0]}
				</span>
				<span className="font-semibold text-red-800 text-2xl">
					{DUMMY_MISSES[0]}
				</span>
				<span className="font-semibold text-red-800 text-2xl">
					{DUMMY_MISSES[0]}
				</span>
				<span className="font-semibold text-red-800 text-2xl">
					{DUMMY_MISSES[0]}
				</span>
				<span className="font-semibold text-red-800 text-2xl">
					{DUMMY_MISSES[0]}
				</span>
			</div>
		</div>
	);
};

export default Hand;
