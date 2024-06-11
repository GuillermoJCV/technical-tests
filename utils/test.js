import assert from 'node:assert';

function test(id, input, expected) {

	if(input.constructor.name !== expected.constructor.name) throw new TypeError("Input and Expected input must be the same")

	let received = {};
	let expect = {};

	switch(input.constructor.name) {
		case(input.constructor.name === "Array"): {
			received = input.join("\n------\n")
			expect = expected.join("\n------\n")
		}
		default: {
			received = input.toString()
			expect = expected.toString()
		}
	}

	try {
		assert.equal(received, expect, `\nReceived \n"${received}"\nand it was expected\n"${expect}"`)
		console.log("\x1b[32m", `${id} passed :\n input:\n"${received}"\n expected:\n"${expect}"\n`)
	} catch(err) {
		console.error(`${id} : ${err}`)
	}
	console.log("\x1b[0m")
}

export { 
	test 
}

"S..|...|..,.S.|...|..,..S|...|..,..S|...|..,..S|...|..,..S*...*..,...S...*..,...*S..*..,...*.S.*..,...*..S*.."

"S..|...|..,.S.|...|..,..S|...|..,..S|...|..,..S|...|..,...S...*..,...*S..*..,...*.S.*..,...*..S*..,...*...S.."




























