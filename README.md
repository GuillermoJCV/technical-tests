# Repositorio para pruebas

Este repositorio sirve para guardar las pruebas que haga para poner a prueba mi forma de solucionar problemas <br>
El proposito de este proyecto es aprender a manejar estructuras de datos grandes sin perder rendimiento utilizando métodos como la memoización, y también mejorar mi lógica de programación

Para iniciar cada uno de los proyectos hay que utilizar `npm run nombre:del:proyecto`, el nombre viene en las instrucciones de cada carpeta <br>
Por ejemplo, el primer proyecto se llama "¡Primer Regalo repetido!" por lo que para iniciarlo se escribe lo siguiente en la terminal<br>

```bash
npm run primer:regalo:repetido
```

Para cada uno de los test hice una funcion muy sencilla utilizando la api de Assertion de Node y así no tener que repetir tanto código.
Esta funcion toma como parametro **el nombre**, **el valor obtenido** y **el valor esperado**:

```js
import { test } from "../utils/test.js"

const obtenido = ""
const esperado = ""

test("Nombre", obtenido, esperado)
```

Y el formato de cada test es el mismo que viene en la página de adventus, exceptuando por la sintaxis del código anterior, que se agrega para cada uno de los test.

## Tecnologías esperadas

* Node
* Node Assertion Api

## Tecnologías complementarias

* Sublime Text 4
* Git bash
