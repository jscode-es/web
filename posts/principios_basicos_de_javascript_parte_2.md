---
objectID: be319731-dd02-409b-95d7-f3a2864c0ce2
subtitle: Conceptos iniciales
title: Principios básicos de javascript ( Parte 2 )
date: '2023-01-07'
description: Aprende los principales conceptos de la programación en pocas lineas
topic: me
toc: true
type: post
tags:
    - javascript
    - ecmascript 6
    - junior
    - básico
icon: javascript
---

En esta segunda parte, añadiremos otros aspectos del lenguaje.

## Funciones

Son fragmentos de código reutilizables que podemos ejecutar en cualquier momento.

```js
function getConcatFullName(name, surname) {
	return name + ' ' + surname;
}

const fullName = getConcatFullName('Maria', 'Sánchez Martinez');

console.log({ fullName });
```

---

## Objetos

Son estructuras de datos que nos permiten almacenar y organizar información de manera más compleja.

```js
const user = {
	name: 'Sofia',
	surname: 'Martinez',
	getFullName: function () {
		return this.name + ' ' + this.surname;
	},
};

const fullName = user.getFullName();

console.log({ fullName });
```

---

## Arreglos o `array`

Son objetos que nos permiten almacenar y acceder a una lista de valores de manera ordenada.

```js
const listNames = ['Sergio', 'Martina', 'Sofia'];

const firstName = listNames[0];
const secondName = listNames[1];

console.log({ firstName, secondName });
```

---

## Métodos

Son funciones especiales que están asociadas a un objeto y nos permiten manipular y acceder a sus datos de diferentes maneras.

Estos son algunos de los principios básicos de JavaScript, pero hay mucho más que puedes aprender sobre este lenguaje de programación.

```js
const sentence = ' Esto es una      frase  con errores de   espacio';

const sentence_sanitized = sentence.replace(/\s+/g, ' ').trim();

console.log(sentence_sanitized);
```
