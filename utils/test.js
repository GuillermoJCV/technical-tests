import assert from 'node:assert';

function test(id, input, expected) {
	try {
		assert.equal(input, expected, `Received "${input}" and it was expected "${expected}"`)
		console.log("\x1b[32m", `${id} passed : input:"${input}" expected:"${expected}"`)
	} catch(err) {
		console.log("\x1b[31m", `${id} : ${err}`)
	}
	console.log("\x1b[37m")
}
export { 
	test 
}