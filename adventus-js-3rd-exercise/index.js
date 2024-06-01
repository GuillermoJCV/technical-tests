import { test } from "../utils/test.js"

function findNaughtyStep(original, modified) {
	const originalSet = new Set(...original.split(""))
	let result = ''

	for(const letter of modified.split("")) {
		console.log(letter)
		if(originalSet.delete(letter)) {
			
		}
	}

	return [...originalSet]
}

/* ____________________________1____________________________ */

	const original1 = 'abcd'
	const modified1 = 'abcde'

	const result1 = findNaughtyStep(original1, modified1)// 'e'
	const expected1 = 'e'

	test("First", result1, expected1)

/* ____________________________2____________________________ */

	const original2 = 'stepfor'
	const modified2 = 'stepor'

	const result2 = findNaughtyStep(original2, modified2) // 'f'
	const expected2 = 'f'

	test("Second", result2, expected2)

/* ____________________________3____________________________ */

	const original3 = 'abcde'
	const modified3 = 'abcde'

	const result3 = findNaughtyStep(original3, modified3) // ''
	const expected3 = ''

	test("Third", result3, expected3)
