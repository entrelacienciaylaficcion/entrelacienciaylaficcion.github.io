/* =========================================================================
   ENTRE LA CIENCIA Y LA FICCIÓN — Lógica del sitio
   Renderiza los capítulos desde data/episodes.js. No requiere editar
   este archivo para agregar capítulos.
   ========================================================================= */

(function () {
  "use strict";

  const MESES = [
    "ene", "feb", "mar", "abr", "may", "jun",
    "jul", "ago", "sep", "oct", "nov", "dic",
  ];

  function formatoFecha(iso) {
    const [a, m, d] = iso.split("-").map(Number);
    if (!a || !m || !d) return iso;
    return `${d} ${MESES[m - 1]} ${a}`;
  }

  function codigoEpisodio(ep) {
    const s = String(ep.temporada).padStart(2, "0");
    const e = String(ep.numero).padStart(2, "0");
    return `S${s}E${e}`;
  }

  function esc(str) {
    return String(str).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));
  }

  /* ---------- Render de un capítulo ---------- */
  function tarjetaEpisodio(ep) {
    const watch = `https://www.youtube.com/watch?v=${encodeURIComponent(ep.youtube)}`;
    const thumb = `https://i.ytimg.com/vi/${encodeURIComponent(ep.youtube)}/hqdefault.jpg`;

    const libros = (ep.libros || []).map((libro) => {
      const accion = libro.enlace
        ? `<a class="book__buy" href="${esc(libro.enlace)}" target="_blank" rel="noopener sponsored">Comprar libro →</a>`
        : `<span class="book__soon">Enlace pronto</span>`;
      return `
        <div class="book">
          <div class="book__info">
            <p class="book__title">${esc(libro.titulo)}</p>
            <p class="book__author">${esc(libro.autor || ep.autor)}</p>
          </div>
          ${accion}
        </div>`;
    }).join("");

    const article = document.createElement("article");
    article.className = "episode";
    article.innerHTML = `
      <div class="episode__media">
        <a class="episode__thumb" href="${watch}" target="_blank" rel="noopener" aria-label="Ver ${esc(ep.titulo)} en YouTube">
          <img src="${thumb}" alt="Portada del capítulo ${esc(ep.titulo)}" loading="lazy" />
          <span class="episode__play"><span></span></span>
        </a>
      </div>
      <div class="episode__body">
        <div class="episode__meta">
          <span class="episode__code">${esc(codigoEpisodio(ep))}</span>
          <span>${esc(formatoFecha(ep.fecha))}</span>
        </div>
        <h3 class="episode__title">${esc(ep.titulo)}</h3>
        <p class="episode__author">${esc(ep.autor)}</p>
        <p class="episode__summary">${esc(ep.resumen)}</p>
        <div class="books">
          <p class="books__label">Libros del capítulo</p>
          ${libros}
        </div>
      </div>`;

    /* brillo que sigue al cursor */
    article.addEventListener("pointermove", (e) => {
      const r = article.getBoundingClientRect();
      article.style.setProperty("--mx", `${e.clientX - r.left}px`);
      article.style.setProperty("--my", `${e.clientY - r.top}px`);
    });

    return article;
  }

  /* ---------- Pintar capítulos (orden descendente por nº) ---------- */
  function renderEpisodios() {
    const cont = document.getElementById("episode-list");
    if (!cont || typeof EPISODIOS === "undefined") return;
    const orden = [...EPISODIOS].sort((a, b) => b.numero - a.numero);
    orden.forEach((ep) => cont.appendChild(tarjetaEpisodio(ep)));
  }

  /* ---------- Enlaces de redes ---------- */
  function renderEnlaces() {
    if (typeof ENLACES === "undefined") return;
    const yt = document.getElementById("link-youtube");
    const pat = document.getElementById("link-patreon");
    if (yt && ENLACES.youtube) yt.href = ENLACES.youtube;
    if (pat && ENLACES.patreon) pat.href = ENLACES.patreon;

    const social = document.getElementById("social-links");
    if (!social) return;
    const redes = [
      ["YouTube", ENLACES.youtube],
      ["Spotify", ENLACES.spotify],
      ["Instagram", ENLACES.instagram],
      ["TikTok", ENLACES.tiktok],
      ["Patreon", ENLACES.patreon],
    ];
    redes.forEach(([nombre, url]) => {
      if (!url) return;
      const a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = nombre;
      social.appendChild(a);
    });
  }

  /* ---------- Reveal al hacer scroll ---------- */
  function setupReveal() {
    const items = document.querySelectorAll("[data-reveal], .episode");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    items.forEach((el) => io.observe(el));

    /* el hero se revela de inmediato */
    requestAnimationFrame(() => {
      document.querySelectorAll(".hero [data-reveal]").forEach((el) =>
        el.classList.add("is-in")
      );
    });
  }

  /* ---------- Campo de estrellas ---------- */
  function setupStarfield() {
    const canvas = document.getElementById("starfield");
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let w, h, dpr;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.width = innerWidth * dpr;
      h = canvas.height = innerHeight * dpr;
      canvas.style.width = innerWidth + "px";
      canvas.style.height = innerHeight + "px";
      const count = Math.round((innerWidth * innerHeight) / 9000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: (Math.random() * 1.3 + 0.2) * dpr,
        a: Math.random(),
        tw: Math.random() * 0.02 + 0.004,
        dir: Math.random() > 0.5 ? 1 : -1,
        hue: Math.random() > 0.5 ? "155, 200, 255" : "180, 150, 255",
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        s.a += s.tw * s.dir;
        if (s.a <= 0.05 || s.a >= 1) s.dir *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.hue}, ${s.a})`;
        ctx.fill();
      }
      requestAnimationFrame(draw);
    }

    resize();
    addEventListener("resize", resize);
    if (reduce) {
      draw(); // un solo frame estático
    } else {
      draw();
    }
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
    renderEnlaces();
    renderEpisodios();
    setupReveal();
    setupStarfield();
  });
})();
