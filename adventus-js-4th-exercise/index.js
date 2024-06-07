import { test } from "../utils/test.js"

function decode(message) {
	const open = message.indexOf("(")
	let close = message.indexOf(")")

	if(message.indexOf("(", open + 1) < close && message.indexOf("(", open + 1) !== -1) {
		const lastClose = close
		close = message.indexOf(")", close + 1)
		test("Close", lastClose, close)
	}

	const before = message.substring(0, open)
	const after = message.substring(close + 1)
	let result = message

	if(open !== -1 && close !== -1) {
		let newMessage = result.substring(open + 1, close)
		const newMessageArr = newMessage.split("")
		newMessageArr.reverse()
		newMessage = newMessageArr.join("")
		return decode(before + newMessage + after)
	} else {
		return result
	}
}

/*______________________________1______________________________*/
	/*const result1 = decode('hola (odnum)')
	const expected1 = "hola mundo"
	test("First", result1, expected1)*/

/*______________________________2______________________________*/
	/*const result2 = decode('(olleh) (dlrow)!')
	const expected2 = "hello world!"
	test("Second", result2, expected2)*/

/*______________________________3______________________________*/
	const result3 = decode('sa(u(cla)atn)s')
	const expected3 = "santaclaus"
	test("Third", result3, expected3)

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus