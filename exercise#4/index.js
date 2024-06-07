import { test } from "../utils/test.js"

function decode(message) {
	let recursiveCount = 0
	const open = message.indexOf("(")
	let close = message.indexOf(")")
	let result = message

	const nextOpen = message.indexOf("(", open + 1)
	const nextClose = message.indexOf(")", close + 1)
	
	if(nextOpen !== open && nextOpen !== -1 && nextOpen < close) {
		result = message
			.replace(")", "(")
			.replace(
				result.substring(nextOpen - 1, nextOpen + 1),
				result.substring(nextOpen - 1, nextOpen) + ")") 
		close = nextClose
	}

	const before = message.substring(0, open)
	const after = message.substring(close + 1)

	if(open !== -1 && close !== -1 && recursiveCount < 20) {
		let newMessage = result.substring(open + 1, close)
		const newMessageArr = newMessage.split("")
		newMessageArr.reverse()
		newMessage = newMessageArr.join("")
		recursiveCount += 1
		return decode(before + newMessage + after)
	} else {
		return result
	}
}

/*______________________________1______________________________*/
	const result1 = decode('hola (odnum)')
	const expected1 = "hola mundo"
	test("First", result1, expected1)
/*______________________________2______________________________*/
	const result2 = decode('(olleh) (dlrow)!')
	const expected2 = "hello world!"
	test("Second", result2, expected2)
/*______________________________3______________________________*/
	const result3 = decode('sa(u(cla)atn)s')
	const expected3 = "santaclaus"
	test("Third", result3, expected3)

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus