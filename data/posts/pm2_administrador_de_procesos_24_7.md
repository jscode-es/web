---
objectID: 26398b57-ae7c-42dd-a32b-bcde4e5c580a
subtitle: Cosas de backend
title: PM2 administrador de procesos 24 / 7
date: '2023-01-021'
description: Gestiona todos los medios de su aplicación
topic: me
toc: true
type: post
tags:
    - nodejs
    - backend
    - mid
    - express
    - expressjs
icon: pm2
---

PM2 es un **administrador de procesos en tiempo real** para aplicaciones Node.js. Permite a los desarrolladores manejar y monitorear procesos en un sistema operativo, incluyendo la capacidad de iniciar, detener, reiniciar y eliminar procesos de forma automatizada. También proporciona características avanzadas como el registro de eventos, balanceo de carga, y la posibilidad de ejecutar aplicaciones en modo cluster.

## Instalación de PM2

Por lo generar es recomendable realizar la instalación de manera global.

---

```shell
npm install pm2 -g
```

---

## Uso básico

Una vez instalado el modulo, ya puede ejecutar a cualquier archivo de Node JS.

---

```shell
pm2 start app.js
```

---

## Funciones avanzadas de este gestor

Lo mejor de este módulos, es que puedes ver en tiempo real el estado de la ejecución del proceso, en un 'interface' básica en linea de comandos.

---

```shell
pm2 monit
```

---

Aunque PM2 también tiene un gestor web, con muy buena pinta.

---

```shell
pm2 open
```

---

## Ejemplo real

### Servicio web en Express JS

Por lo general PM2 lo podemos usar para un servidor web de Express. Para ello hay que crear un archivos llamado **ecosystem.config.js**.

```js
module.exports = {
	apps: [
		// Puedes tener más te un tipo de aplicación corriendo en paralelo
		{
			name: 'NOMBRE_IDENTIFICATIVO', // Nombre identificativo único
			script: 'dist/server.js', // Ruta de la ejecución
			exec_mode: 'cluster', // 'cluster' o 'fork'
			instance_var: 'INSTANCE_ID', // Instancia variable
			instances: 1, // Cantidad de instancias de la aplicación
			autorestart: true, // Auto restart en caso de crash
			watch: false, // Reiniciar en caso que cambie algún archivo
			ignore_watch: ['node_modules', 'logs'], // Directorios que se deben ignorar
			max_memory_restart: '1G', // Reiniciar en caso que se supere la memoria establecida
			merge_logs: true, // si es verdadero, stdout y stderr se fusionarán y se enviarán al registro de pm2
			output: './logs/access.log', // Registros de salida
			error: './logs/error.log', // Registros de errores
			env: {
				// Variables de entorno
				PORT: 3001,
				NODE_ENV: 'production',
			},
		},
	],
};
```

---

I para inicializar esta configuración, se puede hacer de la siguiente manera.

```shell
pm2 start ecosystem.config.js --only NOMBRE_IDENTIFICATIVO
```

---

Del mismo modo, también puede pausar, reiniciar, recargar y eliminar.

```shell
pm2 stop NOMBRE_IDENTIFICATIVO
pm2 restart NOMBRE_IDENTIFICATIVO
pm2 reload NOMBRE_IDENTIFICATIVO
pm2 delete NOMBRE_IDENTIFICATIVO
```

---

Para más información, [acceda a su documentación](https://pm2.keymetrics.io/docs/usage/quick-start/)
