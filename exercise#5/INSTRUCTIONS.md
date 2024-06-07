Esta prueba fue sacada de [AdventusJS](https://adventjs.dev/es#retos)

5ta prueba<br>

# El CyberTrunk de Santa

Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

* . = Carretera
* S = Trineo de Santa
* \* = Barrera abierta
* | = Barrera cerrada
* Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:

## Notas:

* El resultado es un array donde cada elemento muestra la carretera en cada unidad de tiempo.
* Ten en cuenta que si el trineo está en la misma posición que una barrera, entonces toma su lugar en el array.
* Los elfos se inspiraron en este reto de Code Wars.