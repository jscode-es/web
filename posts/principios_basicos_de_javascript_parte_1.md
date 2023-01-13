---
objectID: be319731-dd02-409b-95d7-f3a2864c0ce1
subtitle: Conceptos iniciales
title: Principios básicos de javascript<br>( Parte 1 )
date: '2023-01-06'
description: Aprende los principales conceptos de la programación en pocas lineas
topic: me
type: post
toc: true
tags:
    - javascript
    - ecmascript 6
    - junior
    - básico
icon: javascript
---

A día de hoy la mayoría de los lenguajes se componente de los mismo elementos. En JavaScript los principales elementos son los siguientes:

## Variables

Son unos contenedores que se utilizan para almacenar y referenciar datos en JavaScript.

```js
var nombre_variable_0 = false;
let nombre_variable_1 = 'Esto es un string';
const nombre_variable_2 = 13;
```

---

## Tipos de datos

JavaScript tiene diferentes tipos de datos, como números, cadenas de texto, valores lógicos (verdadero o falso) y objetos.

```js
const age = 37;
const fullName = 'Sergio González';
const isAdmin = false;
const user = {
	age: age,
	fullName: fullName,
	isAdmin: isAdmin,
};

const user_2 = {
	age,
	fullName,
	isAdmin: true,
	alias: 'JSCode',
};
```

---

## Operadores

Son símbolos especiales que nos permiten realizar operaciones matemáticas y lógicas en JavaScript.

```js
const currentYear = 2023;
const birthdayYear = 1985;

const age = currentYear - birthdayYear;

console.log('Mi edad es:' + age); // Mi edad es 38
```

---

## Condicionales

Nos permiten ejecutar cierto código solo si se cumple una condición específica.

```js
const age = 38;

if (age >= 18) {
	console.log('Soy mayor de edad');
} else {
	console.log('Soy menor de edad');
}

//  Otra manera
const isAdult = age >= 18;
const message = isAdult ? 'Soy mayor de edad' : 'Soy menor de edad';

console.table({
	isAdult,
	message,
});
```

---

## Bucles

Nos permiten ejecutar cierto código varias veces de manera consecutiva. Existe varios modos, como por ejemplo: for, foreach, forIn, forOf ..

```js
let str = '';

for (let i = 0; i < 9; i++) {
	str = str + i;
}

console.log(str); // Salida: "012345678"
```

---

Para que no se haga larga la lectura; en la parte dos continuamos con el resto de los aspectos del lenguaje.
