export const getWordArr = (word: string) => {

	const wordToArr = word.split(' ')
	const arr: string[][] = [];
	for (let i = 0; i < wordToArr.length; i++) {
		const arr1 = wordToArr[i].split("")
		arr.push(arr1)
		
	}
	console.log(arr);
	
return arr

}