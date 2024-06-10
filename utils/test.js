import assert from 'node:assert';

function test(id, input, expected) {

	if(input.constructor.name !== expected.constructor.name) throw new TypeError("Input and Expected input must be the same")

	let received = {};
	let expect = {};

	switch(input.constructor.name)
	{
		case(input.constructor.name): {
			received = input.join("\n")
			expect = expected.join("\n")
		}
		default: {
			received = input
			expect = expected
		}
	}

	
	try {
		assert.equal(received, expect, `\nReceived "\n${received}"\nand it was \nexpected\n"${expect}"`)
		console.log("\x1b[32m", `${id} passed : input:"${received}" expected:"${expect}"`)
	} catch(err) {
		console.log("\x1b[31m", `${id} : ${err}`)
	}
	console.log("\x1b[0m")
}

export { 
	test 
}