# 🌊 FlowCodeAngel

**FlowCodeAngel** es un proyecto en **Node.js + HTML/CSS/JavaScript** creado para practicar flujo de trabajo con **Git, GitHub, ramas, pruebas y automatización**.

La idea es simple: un módulo con funciones básicas, una demo web con colores y animaciones, pruebas en consola y un pipeline de CI para validar el proyecto como todo un repo con casco y botas. 😎🚀

---

## ✨ Mejoras incluidas

- 🎨 Interfaz web más moderna con degradados, tarjetas, brillos y animaciones.
- ⚡ Demo interactiva para saludar, despedir, verificar estado y hacer operaciones.
- 🧠 Código JavaScript más ordenado, reutilizable y validado.
- 🧪 Pruebas con `node:assert/strict`, sin instalar librerías externas.
- 🧰 CLI con colores en la terminal.
- 🤖 GitHub Actions para ejecutar pruebas automáticamente.
- 🧾 README más completo y presentable.

---

## 🖼️ Demo web

Abre el archivo `index.html` con **Live Server** o publícalo con **GitHub Pages**.

La página incluye:

- Hero visual con animaciones.
- Tarjetas de funciones.
- Panel de estado del sistema.
- Calculadora rápida.
- Terminal simulada.

---

## 🧰 Tecnologías

| Tecnología | Uso |
|---|---|
| Node.js | Ejecutar funciones y pruebas |
| ES Modules | Importar/exportar código moderno |
| HTML5 | Estructura de la demo |
| CSS3 | Colores, responsive design y animaciones |
| JavaScript | Interactividad del sitio |
| GitHub Actions | Integración continua |

---

## 📁 Estructura del proyecto

```text
FlowCodeAngel/
├── .github/workflows/ci.yml
├── public/
│   ├── app.js
│   └── styles.css
├── src/
│   ├── app.js
│   └── cli.js
├── test/
│   └── app.test.js
├── .editorconfig
├── .gitignore
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Instalación y uso

Clona el repositorio:

```bash
git clone https://github.com/angelcamayojm-wq/FlowCodeAngel.git
cd FlowCodeAngel
```

Ejecuta la demo en consola:

```bash
npm start
```

Ejecuta las pruebas:

```bash
npm test
```

Verifica todo:

```bash
npm run check
```

---

## 🧪 Funciones principales

| Función | Descripción |
|---|---|
| `saludar(nombre)` | Retorna un saludo personalizado |
| `despedir(nombre)` | Retorna una despedida personalizada |
| `estadoSistema()` | Retorna el estado general del sistema |
| `sumar(a, b)` | Suma dos valores numéricos |
| `restar(a, b)` | Resta dos valores numéricos |
| `multiplicar(a, b)` | Multiplica dos valores numéricos |
| `dividir(a, b)` | Divide dos valores numéricos con validación |
| `healthCheck()` | Retorna información del sistema |
| `crearResumen()` | Genera un resumen para la demo CLI |

---

## 🤖 Automatización con GitHub Actions

Cada vez que hagas `push` o abras un `pull request` hacia `main` o `develop`, el workflow ejecutará:

1. Instalación limpia con `npm ci`.
2. Pruebas con `npm test`.
3. Validación de sintaxis con `node --check`.

---

## 🧭 Flujo recomendado de Git

```bash
git checkout -b feature/mejoras-visuales
git add .
git commit -m "Mejora interfaz, pruebas y documentación"
git push -u origin feature/mejoras-visuales
```

Luego abre un **Pull Request** hacia `main`.

---

## 💡 Próximas mejoras

- Agregar capturas de pantalla al README.
- Publicar la demo con GitHub Pages.
- Añadir más operaciones matemáticas.
- Crear una versión con formulario de contacto.
- Agregar modo oscuro/manual.

---

## 👨‍💻 Autor

**Angel Rivera**

Proyecto creado para practicar desarrollo, Git, GitHub y buenas prácticas de documentación.
