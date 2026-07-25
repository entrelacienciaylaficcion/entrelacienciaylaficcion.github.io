/* =========================================================================
   ENTRE LA CIENCIA Y LA FICCIÓN — Datos del podcast
   =========================================================================

   👉 PARA AGREGAR UN CAPÍTULO NUEVO:
   Copia un bloque { ... } completo, pégalo al INICIO de la lista EPISODIOS
   (justo después del corchete "[") y edita sus campos. El sitio se ordena
   solo: el de número de episodio más alto aparece primero.

   Campos de cada episodio:
     numero    -> número de capítulo (ej: 6). Solo el número.
     temporada -> número de temporada (ej: 1).
     titulo    -> nombre del capítulo (sin el "S01E0X").
     autor     -> autor(a) de la obra tratada.
     fecha     -> fecha de publicación en formato "AAAA-MM-DD".
     youtube   -> el ID del video de YouTube (lo que va después de "watch?v=").
     resumen   -> 1 o 2 frases que describan el capítulo.
     libros    -> lista de libros tratados. Cada libro:
                    { titulo, autor, enlace }
                  "enlace" es el link de afiliado de Buscalibre.
                  Si todavía no hay link, deja enlace: null.

   Nada más que tocar. Guarda el archivo y súbelo a GitHub.
   ========================================================================= */

const EPISODIOS = [
  {
    numero: 1,
    temporada: 2,
    titulo: "¿Sueñan los androides con ovejas eléctricas?",
    autor: "Philip K. Dick",
    fecha: "2026-07-25",
    youtube: "bXBzcQLugcY",
    resumen:
      "¿Puede una máquina sentir empatía? Philip K. Dick pone esa pregunta en el centro de la novela que inspiró Blade Runner. Diseccionamos la obra y la ciencia que late bajo sus páginas: qué es la empatía, si puede medirse y dónde termina lo humano y empieza lo artificial.",
    libros: [
      {
        titulo: "¿Sueñan los androides con ovejas eléctricas?",
        autor: "Philip K. Dick",
        enlace:
          "https://www.buscalibre.cl/libro-suenan-los-androides-con-ovejas-electricas/9786287624313/p/64601733?afiliado=9e32f901bc34a4172ee5",
      },
    ],
  },
  {
    numero: 5,
    temporada: 1,
    titulo: "Ecotopia",
    autor: "Ernest Callenbach",
    fecha: "2025-03-02",
    youtube: "RNJEKx2gYos",
    resumen:
      "Imaginamos la vida en un país donde la armonía entre la naturaleza y la tecnología lo es todo. ¿Es posible cambiar nuestro estilo de vida por un mundo más sustentable?",
    libros: [
      {
        titulo: "Ecotopia",
        autor: "Ernest Callenbach",
        enlace:
          "https://www.buscalibre.cl/libro-ecotopia/9788412254709/p/53080176?afiliado=9e32f901bc34a4172ee5",
      },
    ],
  },
  {
    numero: 4,
    temporada: 1,
    titulo: "La Parábola del Sembrador",
    autor: "Octavia Butler",
    fecha: "2025-01-05",
    youtube: "EyDXewfY8Qk",
    resumen:
      "Nos sumergimos en un mundo en caos social de la mano de Octavia Butler. ¿Cómo serían los efectos del cambio global según su visión? ¿Es Dios cambio?",
    libros: [
      {
        titulo: "La Parábola del Sembrador",
        autor: "Octavia Butler",
        enlace:
          "https://www.buscalibre.cl/libro-la-parabola-del-sembrador/9788412281781/p/53176976?afiliado=9e32f901bc34a4172ee5",
      },
    ],
  },
  {
    numero: 3,
    temporada: 1,
    titulo: "El Alquimista y El color que cayó del cielo",
    autor: "H.P. Lovecraft",
    fecha: "2024-11-10",
    youtube: "-CntOmB5YOY",
    resumen:
      "La otra cara de Lovecraft. ¿Cuál es su relación con el ocultismo? ¿Qué función cumplen los científicos en su obra?",
    libros: [
      {
        titulo: "El Alquimista y otros relatos terroríficos",
        autor: "H.P. Lovecraft",
        enlace:
          "https://www.buscalibre.cl/libro-el-alquimista-y-otros-relatos-terrorificos/9788418765001/p/53697724?afiliado=9e32f901bc34a4172ee5",
      },
      {
        titulo: "El color que cayó del cielo",
        autor: "H.P. Lovecraft",
        enlace:
          "https://www.buscalibre.cl/libro-el-color-que-cayo-del-cielo/9789563342222/p/52889185?afiliado=9e32f901bc34a4172ee5",
      },
    ],
  },
  {
    numero: 2,
    temporada: 1,
    titulo: "La llamada de Cthulhu y El horror de Dunwich",
    autor: "H.P. Lovecraft",
    fecha: "2024-10-22",
    youtube: "1n7Ii0PFBww",
    resumen:
      "Exploramos el horror cósmico de Lovecraft. ¿Qué elementos de la biología aparecen en su obra? ¿Cuál era su faceta de científico?",
    libros: [
      {
        titulo: "La llamada de Cthulhu y otros relatos",
        autor: "H.P. Lovecraft",
        enlace:
          "https://www.buscalibre.cl/libro-la-llamada-de-cthulhu-y-otros-relatos/9788415089568/p/45430362?afiliado=9e32f901bc34a4172ee5",
      },
    ],
  },
  {
    numero: 1,
    temporada: 1,
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    fecha: "2024-10-06",
    youtube: "9CRM6FYUbDw",
    resumen:
      "La influyente obra de Mary Shelley. ¿Cómo dejó huella en la ciencia? Y la gran pregunta: ¿estamos cerca de poder crear seres sintéticos hoy?",
    libros: [
      {
        titulo: "Frankenstein",
        autor: "Mary Shelley",
        enlace: null,
      },
    ],
  },
];

/* Redes sociales y enlaces del proyecto.
   Edita aquí si cambia alguna red. */
const ENLACES = {
  youtube: "https://www.youtube.com/@Entrelacienciaylaficcion",
  patreon: "https://www.patreon.com/c/entrelacienciaylaficcion/membership",
  instagram: "https://www.instagram.com/entrelacienciaylaficcion/",
  spotify: "https://open.spotify.com/show/2LQ0xhFTdH6oiShbJt13p2",
  tiktok: "https://www.tiktok.com/@entrelacienciaylaficcion",
};
