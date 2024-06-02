import { test } from "../utils/test.js"

function decode(message) {



	return ""
}

/*______________________________1______________________________*/
	const result1 = decode('hola (odnum)')
	const expected1 = "hola mundo"
	test("First", result1, expected1)

/*______________________________2______________________________*/
	const result2 = decode('(olleh) (dlrow)!')
	const expected2 = "hello world!"
	test("First", result2, expected2)

/*______________________________3______________________________*/
	const result3 = decode('sa(u(cla)atn)s')
	const expected3 = "santaclaus"
	test("First", result3, expected3)

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus