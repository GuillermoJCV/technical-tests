import { test } from "../utils/test.js"

function findFirstRepeated(gifts) {
  const resultSet = new Set([...gifts])

  for(const gift of gifts) {
  	if(!resultSet.delete(gift)) {
  		return gift
  	}
  }

  return -1
}


const giftIds1 = [2, 1, 3, 5, 3, 2]
const result1 = findFirstRepeated(giftIds1)
const expected1 = 3
test(1, result1, expected1)

// 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
const result2 = findFirstRepeated(giftIds2)
const expected2 = -1
test(2, result2, expected2)
// -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
const result3 = findFirstRepeated(giftIds3)
const expected3 = 5
test(3, result3, expected3) // 5