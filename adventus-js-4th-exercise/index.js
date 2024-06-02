import { test } from "../utils/test.js"

function decode(message) {

	

	return ""
}

const result1 = decode('hola (odnum)')
const expected1 = "hola mundo"

const result2 = decode('(olleh) (dlrow)!')
const expected2 = "hello world!"

const result3 = decode('sa(u(cla)atn)s')
const expected3 = "santaclaus"

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus