---
objectID: bd166d62-1bca-4acb-85c3-40f017944284
subtitle: Cosas de backend
title: Instalación Nginx para tus aplicaciones web
date: '2023-01-19'
description: Despliega cualquier aplicación web en un servidor personal
topic: me
toc: true
type: post
tags:
    - backend
    - nginx
    - pm2
    - expressjs
    - senior
    - nivel medio
icon: nginx
---

En el día de hoy aprenderemos a configurar nuestros servidor personal para arrancar un servicio web.

## Primero de todo

Tenemos que instalar **nginx** (Ubuntu 22.04), que es un servidor web de código abierto y un proxy inverso. Se utiliza comúnmente para manejar las solicitudes HTTP y HTTPS, y también puede ser utilizado como un balanceador de carga para distribuir el tráfico entre varios servidores. Además, NGINX también puede ser utilizado como un proxy para aplicaciones, permitiendo a los usuarios acceder a aplicaciones alojadas en un servidor o en la nube a través de un único punto de acceso.

---

```shell
sudo apt update
sudo apt install nginx
```

---

### Después de la instalación

Antes de probar Nginx, el software de firewall debe configurarse para permitir el acceso al servicio.

---

```shell
sudo ufw app list
```

---

Eso te dará una salida similiar

```shell
Available applications:
  Nginx Full
  Nginx HTTP
  Nginx HTTPS
  OpenSSH
```

---

Como lo demuestra el resultado, hay tres perfiles disponibles para Nginx:

-   Nginx Full : este perfil abre tanto el puerto 80 (tráfico web normal y sin cifrar) como el puerto 443 (tráfico cifrado con TLS/SSL)
-   Nginx HTTP : este perfil abre solo el puerto 80 (tráfico web normal, sin cifrar)
-   Nginx HTTPS : este perfil abre solo el puerto 443 (tráfico cifrado con TLS/SSL)

Se recomienda que habilite el perfil más restrictivo que seguirá permitiendo el tráfico que ha configurado. En este momento, solo necesitaremos permitir el tráfico en el puerto 80.

```shell
sudo ufw allow 'Nginx HTTP'
```

---

### Y para finalizar esta parte

Podemos verificar que el sistema funciona correctamente con la siguiente linea de comandos.

```shell
systemctl status nginx
```

---

```shell
● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Mon 2023-01-02 12:18:19 UTC; 1 days ago
     Docs: man:nginx(8)
 Main PID: 2369 (nginx)
    Tasks: 2 (limit: 1153)
   Memory: 3.5M
   CGroup: /system.slice/nginx.service
           ├─2369 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
           └─2380 nginx: worker process
```
