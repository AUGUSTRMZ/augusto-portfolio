# Portafolio de Augusto Ramírez

Portafolio profesional desarrollado con HTML, CSS y JavaScript puro.

## Estructura

```text
portfolio-augusto/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── projects/
│       ├── wos/
│       ├── habitree/
│       ├── lumbre/
│       └── altura/
└── README.md
```

## Agregar capturas de proyectos

Cada proyecto ya está preparado para mostrar tres capturas automáticamente.

1. Exporta o toma las capturas en formato PNG.
2. Renómbralas como `01.png`, `02.png` y `03.png`.
3. Colócalas en la carpeta correspondiente:

```text
assets/projects/wos/01.png
assets/projects/wos/02.png
assets/projects/wos/03.png

assets/projects/habitree/01.png
assets/projects/habitree/02.png
assets/projects/habitree/03.png

assets/projects/lumbre/01.png
assets/projects/lumbre/02.png
assets/projects/lumbre/03.png

assets/projects/altura/01.png
assets/projects/altura/02.png
assets/projects/altura/03.png
```

No es necesario modificar el HTML. Si una imagen no existe, la galería simplemente no la muestra.

Para cambiar textos y descripciones de las capturas, edita la propiedad `screenshots` de cada proyecto en `js/main.js`.

### Recomendaciones para las imágenes

- Usa capturas horizontales de aproximadamente 1600 × 1000 px.
- Evita mostrar datos personales, contraseñas o información privada de clientes.
- Mantén una proporción similar entre todas las capturas.
- Comprime los PNG si pesan demasiado o conviértelos a WebP y actualiza la extensión en `js/main.js`.

## Ejecutar localmente

Puedes abrir `index.html` directamente en el navegador.

También puedes usar la extensión **Live Server** de VS Code:

1. Abre la carpeta en VS Code.
2. Instala la extensión Live Server.
3. Haz clic derecho sobre `index.html`.
4. Selecciona **Open with Live Server**.

## Publicar en GitHub

```bash
cd portfolio-augusto
git init
git add .
git commit -m "Initial portfolio version"
git branch -M main
git remote add origin URL_DE_TU_REPOSITORIO
git push -u origin main
```

## Publicar en Vercel

1. Crea una cuenta en Vercel usando GitHub.
2. Selecciona **Add New > Project**.
3. Importa el repositorio del portafolio.
4. En Framework Preset elige **Other**.
5. No agregues Build Command.
6. Deja Output Directory vacío.
7. Presiona **Deploy**.

Cada nuevo `git push` en la rama principal actualizará el sitio.

## Datos que puedes editar

- Nombre y presentación: `index.html`
- Proyectos: tarjetas en `index.html`
- Casos de estudio y galerías: objeto `projects` en `js/main.js`
- Colores y diseño: variables al inicio de `css/styles.css`
- WhatsApp, Instagram y GitHub: sección `#contacto` de `index.html`


## Perfil tecnológico incluido

La sección de tecnologías presenta el perfil por áreas:

- Backend y web: Python, Django, DRF, JavaScript, PostgreSQL, Supabase y APIs REST.
- Desarrollo iOS: Swift y SwiftUI.
- Automatización: chatbots, integraciones y scripting con Python.
- Ciberseguridad ética: Kali Linux, Linux, redes, seguridad de aplicaciones y scripting con Python/C.
- Lenguajes adicionales: C++ y C.

La expresión “hacking ético” se usa únicamente para pruebas autorizadas y prácticas defensivas.
