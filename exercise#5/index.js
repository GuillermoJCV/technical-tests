import { test } from "../utils/test.js"



function cyberReindeer(road, time) {
  

  return []
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

test("Road map", cyberReindeer(road, time), expectedResults)

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/