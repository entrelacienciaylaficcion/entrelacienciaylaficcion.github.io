# Entre la Ciencia y la Ficción — Landing page

Página web del podcast **Entre la Ciencia y la Ficción**: lista los capítulos
publicados en YouTube y, bajo cada uno, los libros que comentamos con su
enlace de compra (afiliado de Buscalibre).

Es un sitio **100 % estático** (HTML + CSS + JS), sin frameworks ni paso de
compilación, pensado para alojarse gratis en **GitHub Pages**.

---

## ✍️ Cómo agregar un capítulo nuevo

Solo se edita **un archivo**: [`data/episodes.js`](data/episodes.js).

1. Abre `data/episodes.js`.
2. Copia un bloque `{ ... }` completo de un capítulo existente.
3. Pégalo **al inicio** de la lista `EPISODIOS` (justo después del `[`).
4. Edita sus campos:

   ```js
   {
     numero: 6,                 // número del capítulo
     temporada: 1,
     titulo: "Nombre del capítulo",
     autor: "Autor/a de la obra",
     fecha: "2026-07-15",       // AAAA-MM-DD
     youtube: "ABC123xyz",      // el ID del video (lo que va tras watch?v=)
     resumen: "Una o dos frases sobre el capítulo.",
     libros: [
       {
         titulo: "Título del libro",
         autor: "Autor/a",
         enlace: "https://www.buscalibre.cl/...?afiliado=9e32f901bc34a4172ee5"
       }
       // puedes agregar más libros separados por coma
     ]
   },
   ```

5. Guarda y sube los cambios (ver más abajo). ¡Listo!

> **El ID de YouTube** es la parte final de la URL del video.
> Ejemplo: en `https://www.youtube.com/watch?v=RNJEKx2gYos` el ID es `RNJEKx2gYos`.

> **La miniatura** se obtiene automáticamente desde YouTube; no hay que subir
> imágenes.

> Si todavía no tienes el enlace de compra de un libro, pon `enlace: null` y
> aparecerá la etiqueta "Enlace pronto".

Las redes sociales (YouTube, Spotify, Instagram, TikTok, Patreon) también se
editan al final de ese mismo archivo, en el bloque `ENLACES`.

---

## 🚀 Publicar en GitHub Pages

1. Sube esta carpeta a un repositorio de GitHub.
2. En el repo: **Settings → Pages**.
3. En *Build and deployment* elige **Deploy from a branch**.
4. Branch: `main` (o `master`) y carpeta `/ (root)`. Guarda.
5. En 1–2 minutos la página estará en
   `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

Cada vez que subas cambios a esa rama, la página se actualiza sola.

---

## 👀 Ver la página en tu computador

Puedes abrir `index.html` directamente con doble clic (funciona porque los
datos están en un archivo `.js`, no se cargan por red).

---

## 🗂 Estructura

```
index.html            Página principal
assets/styles.css     Estilos (paleta y diseño)
assets/app.js         Genera las tarjetas desde los datos
data/episodes.js      👉 Aquí editas los capítulos y enlaces
images/logo.jpeg      Logo del proyecto
.nojekyll             Le dice a GitHub Pages que no procese el sitio con Jekyll
```
