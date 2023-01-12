---
objectID: be319731-dd02-409b-95d7-f3a2864c0ce1
subtitle: Arquitectura hexagonal
title: Crear una app de notas en React y Vite
date: '2023-01-11'
description: Crea una aplicación con conceptos avanzado de la programación y completamente funcional
topic: me
type: tutorial
toc: true
tags:
    - senior
    - arquitectura hexagonal
    - typescript
    - nextjs
icon: nextjs
---

En el dia de hoy vamos a crear una aplicación de gestión de notas. Para ello lo realizaremos con React en NextJS ( y Typescript ).

## Creación del proyecto

Para iniciar el proyecto base hay que ejecutar el siguiente comando en la consola del terminal.

```shell
npx create-next-app@latest --ts --use-npm
```

---

En el proceso de la instalación te pedirá en nombre que tendrá el proyecto y si necesita esLint. En mi caso el nombre del proyecto lo he llamado 'note'. Me dirijo al directoria del proyecto y ejecuto el script de desarrollo. Este te dará la url del proyecto.

```shell
npm run dev
```

---

## Estructura de carpeta ( básico )

Para gestionar y programar este proyecto vamos a tomar como concepto la **arquitectura hexagonal**. Para ello crearemos una carpeta src con su subcarpetas: app, domain, infrastruture

```shell
📁 .next
📁 public
📁 pages
📁 styles
📂 src
	📁 app
	📁 domain
	📁 infrastructure
```

---

## Dominio de la aplicación

El "dominio" se refiere a la lógica de negocio de la aplicación, es decir, las reglas y los procesos que definen cómo se comporta y cómo se realizan las tareas en la aplicación. Este dominio se encuentra en el centro de la arquitectura hexagonal, rodeado por otras capas que interactúan con él.

Asi que vamos a crear la interface que llevará la funciones básica para su funcionamiento.

```shell
📂 src
	📁 app
	📂 domain
        📄 note.ts
	📁 infrastructure
```

---

La primera función que añadiremos a la interface es "save" o guardado. Esta retornará un promesa, que determinará con un booleano si se añadió la nota correctamente.

```typescript
export interface Note {
	save(): Promise<boolean>;
}
```

---

## Infraestructura de la aplicación

A continuación vamos a implementar la interface que hemos creado. Por lo general, yo creo 2 carpetas ( interface y repository ) en la carpeta de infrastructure.

```shell
📂 src
	📁 app
	📁 domain
	📂 infrastructure
        📂 interface
             📄 note.ts
        📂 repository
             📄 note.ts
```

---

Primero preparamos la interface de los datos que aceptará nuestro repositorio

```typescript
// FilePath: src/infrastructure/interface/note.ts

export interface NoteData {
	id: string;
	content: string;
	date: string;
	color: string;
}
```

---

Y justo después crearemos la lógica, que la envolveremos en una clase.

```typescript
// FilePath: src/infrastructure/repository/note.ts

import { Note } from '../../domain/note';
import { NoteData } from '../interface/note';

export class NoteRepository implements Note {
	private note: NoteData;

	constructor(note: NoteData) {
		this.note = note;
	}

	async save(): Promise<boolean> {
		const { note } = this;

		const isExist = localStorage.getItem(note.id);

		if (isExist) return false;

		localStorage.setItem(note.id, JSON.stringify(note));

		return true;
	}
}
```

---
