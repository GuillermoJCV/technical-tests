import assert from 'node:assert';

function test(id, input, expected) {
	console.time("Test time")
	try {
		assert.equal(input, expected, `Received "${input}" and it was expected "${expected}"`)
		console.log("\x1b[32m", `${id} passed : input:"${input}" expected:"${expected}"`)
	} catch(err) {
		console.log("\x1b[31m", `${id} : ${err}`)
	}
	console.log("\x1b[0m")
	console.timeEnd("Test time")

}
export { 
	test 
}