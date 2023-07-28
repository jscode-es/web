---
objectID: 13ee57ef-dd3d-42ab-be7f-2eb4f31a1f3d
subtitle: Novedades en javascript
title: ¿ Que es ecmascript 6 y que novedades tiene?
date: '2023-01-05'
description: Novedades que nos ofrece el nuevo estándar de programación
topic: me
toc: true
type: post
tags:
    - javascript
    - ecmascript 6
    - junior
    - senior
    - básico
icon: javascript
---

**ECMAScript 6**, también conocido como ECMAScript 2015, es la sexta versión del estándar de lenguaje de programación ECMAScript. Fue lanzado en junio de 2015 y es compatible con la mayoría de los navegadores modernos.

Una de las **principales características de ECMAScript 6** es la introducción de clases de objetos, lo que permite a los programadores escribir código de una manera más clara y concisa. También se ha añadido el soporte para módulos, lo que permite a los programadores dividir su código en módulos más pequeños y reutilizarlos en diferentes partes de su aplicación.

---

```js
// Importar modulo
import fs from 'fs';

// Directorio del documento
const filePath = '/download/test.txt';

// Función para evaluar el contenido del documento
const getData = (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(data);
};

// Leer documento
fs.readFile(filePath, 'utf8', getData);
```

---

Otras características incluyen la **introducción de promesas**, lo que permite a los programadores manejar de manera más eficiente las **operaciones asíncronas**, y el soporte para la sintaxis de la **destructuración**, lo que permite a los programadores extraer valores de arreglos y objetos de manera más sencilla.

---

```js
// Declaración de la función
async function getUser() {
	return Promise.resolve({ name: 'Sergio', surname: 'González' });
}

// Uso de la promesa
getUser().then(({ name }) => {
	console.log(name);
});
```

---

En resumen, ECMAScript 6 es una gran mejora en el lenguaje de programación JavaScript y proporciona a los programadores una serie de nuevas herramientas y características para escribir código más eficiente y mantenible. Si estás interesado en aprender más sobre ECMAScript 6, hay muchos recursos disponibles en línea que pueden ayudarte a comenzar.
