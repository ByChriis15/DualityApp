# DualityApp

Base inicial mobile-first para una app de pareja en formato PWA, lista para GitHub Pages.

## Incluye

- Onboarding con nombres, idioma, estilo y modo
- Personalizacion persistente con localStorage
- Temas por genero: masculino y femenino
- Modos: dark y light
- Idiomas: es y en
- UI responsive (mobile-first)
- Service Worker para cache offline
- Manifest PWA

## Estructura

- index.html
- styles.css
- app.js
- manifest.json
- sw.js
- icons/icon.svg
- icons/maskable.svg
- .nojekyll

## Publicar en GitHub Pages

1. Sube esta carpeta al repositorio (branch main o gh-pages).
2. En Settings > Pages, selecciona el branch y carpeta raiz.
3. Abre la URL de Pages y verifica instalacion PWA.

## Nota

Esta version es la base visual y de configuracion. Los modulos funcionales se pueden agregar encima de esta arquitectura sin romper la personalizacion.
