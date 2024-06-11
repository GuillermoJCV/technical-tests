import { test } from "../utils/test.js"

function cyberReindeer(road, time) {
  const SANTA_TRUCK = 'S'
  const result = []
  let roadMap = road.split("")
  roadMap[roadMap.indexOf(SANTA_TRUCK)] = '.'
  let delay = 0
  for(let i=0; i < time; i++) {
    /* Verifica si tiene que abrir las barreras o no*/
    let roadCopy
    if (i === 5) {
      delay--
      const newRoad = road.replaceAll(SANTA_TRUCK, '.')
                          .replaceAll('|', '*')
      roadMap = newRoad.split("")
      roadCopy = [...roadMap]
    } else {
      roadCopy = [...roadMap]
    }

    /* Establece la posicion actual y la posicion siguiente */
    const currentPos = i - delay
    const nextStep = roadCopy[currentPos + 1] || ''

    /* Si existe el siguiente paso y este es diferente a una barrera, entonces va a moverse */
    if(nextStep && nextStep !== '|') {
      roadCopy[currentPos] = SANTA_TRUCK
      result.push(roadCopy.join(''))
      continue
    /* Si es una barrera  entonces se va a quedar quieto y va a aumentar el delay en el tiempo*/
    } else if(nextStep === '|') {
      roadCopy[currentPos] = SANTA_TRUCK
      result.push(roadCopy.join(''))
      delay++
      continue
    }

  }

  return result
}

const road = 'S..|...|..'
const time = 10 // unidades de tiempo

const expectedResults = [
  'S..|...|..',
  '.S.|...|..',
  '..S|...|..',
  '..S|...|..',
  '..S|...|..',
  '...S...*..',
  '...*S..*..',
  '...*.S.*..',
  '...*..S*..',
  '...*...S..',
]

console.time("Test time")
test("Road map", cyberReindeer(road, time), expectedResults)
console.timeEnd("Test time")