export const getUniqueChars = (word: string) => {
	// remove whitespace
	const trimmed = word.toLowerCase().replaceAll(" ", "");
	
	// split into arr
	const split = trimmed.split('');
	
	// create a set
	const newSet = new Set(split)
	
	// retur arr
	const arr = Array.from(newSet.values())

	return arr
}