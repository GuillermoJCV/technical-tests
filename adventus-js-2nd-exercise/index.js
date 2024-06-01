import { test } from "../utils/test.js"

/*function test(id, input, expected) {
	try {
		assert.equal(input, expected, `Recibido ${input} y se esperaba ${expected}`)
		console.log("\x1b[32m", `${id} : Passed`)
	} catch(err) {
		console.log("\x1b[31m", `${id} : ${err}`)
	}
}*/

function manufacture(gifts, materials) {
	const materialsArray = materials.split("")
	const resultArray = []


	for(const gift of gifts) {
		let canUse = true
		gift.split("").forEach((material, index) => {
			if(materialsArray.lastIndexOf(material) !== -1 && canUse === true) {
				if (index === gift.length - 1) {
					resultArray.push(gift)
				}
			} else {
				canUse = false
			}
		})
	}
	return resultArray
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

const result1 = manufacture(gifts, materials).toString()
const expected1 = [ "tren" , "oso" ].toString()
test(1, result1, expected1)

// ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'

/* ___________________________________________________*/

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

const result2 = manufacture(gifts2, materials2).toString()
const expected2 = ["puzzle"].toString()
test(2, result2, expected2)

/* ___________________________________________________*/

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

const result3 = manufacture(gifts3, materials3).toString()
const expected3 = [].toString()
test(3, result3, expected3)
// []