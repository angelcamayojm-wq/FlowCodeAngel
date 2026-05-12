const VERSION = "1.3.0";
const DEFAULT_NAME = "Angel";

const $ = (selector) => document.querySelector(selector);

function normalizarNombre(nombre = DEFAULT_NAME) {
  const nombreLimpio = String(nombre ?? "").trim();
  return nombreLimpio.length > 0 ? nombreLimpio : DEFAULT_NAME;
}

function convertirNumero(valor, etiqueta) {
  const numero = Number(valor);

  if (!Number.isFinite(numero)) {
    throw new TypeError(`${etiqueta} debe ser un número válido`);
  }

  return numero;
}

function saludar(nombre) {
  return `Hola ${normalizarNombre(nombre)} 👋`;
}

function despedir(nombre) {
  return `Adiós ${normalizarNombre(nombre)}. Sigue con ese flow 🚀`;
}

function healthCheck() {
  return {
    status: "UP",
    version: VERSION,
    timestamp: new Date().toLocaleString("es-CO"),
    mensaje: "Sistema funcionando correctamente"
  };
}

function sumar(a, b) {
  return convertirNumero(a, "a") + convertirNumero(b, "b");
}

function restar(a, b) {
  return convertirNumero(a, "a") - convertirNumero(b, "b");
}

function multiplicar(a, b) {
  return convertirNumero(a, "a") * convertirNumero(b, "b");
}

function dividir(a, b) {
  const divisor = convertirNumero(b, "b");

  if (divisor === 0) {
    throw new RangeError("No se puede dividir entre cero");
  }

  return convertirNumero(a, "a") / divisor;
}

function escribirMensaje(texto) {
  const salida = $("#mensaje");
  salida.textContent = "";

  [...texto].forEach((letra, index) => {
    window.setTimeout(() => {
      salida.textContent += letra;
    }, index * 18);
  });
}

function mostrarSistema() {
  const resultado = healthCheck();
  escribirMensaje(`💚 ${resultado.mensaje} | ${resultado.status} | v${resultado.version} | ${resultado.timestamp}`);
}

function calcular() {
  const a = $("#numeroA").value;
  const b = $("#numeroB").value;
  const resultados = $("#resultados");

  try {
    const datos = [
      `➕ Suma: ${sumar(a, b)}`,
      `➖ Resta: ${restar(a, b)}`,
      `✖️ Multiplicación: ${multiplicar(a, b)}`,
      `➗ División: ${dividir(a, b)}`
    ];

    resultados.innerHTML = datos.map((item) => `<span>${item}</span>`).join("");
  } catch (error) {
    resultados.innerHTML = `<span>⚠️ ${error.message}</span>`;
  }
}

function crearParticulas() {
  const total = 18;

  for (let index = 0; index < total; index += 1) {
    const particula = document.createElement("span");
    particula.className = "particle";
    particula.style.left = `${Math.random() * 100}%`;
    particula.style.animationDelay = `${Math.random() * 6}s`;
    particula.style.animationDuration = `${4 + Math.random() * 5}s`;
    document.body.appendChild(particula);
  }
}

function iniciarDemo() {
  $("#version").textContent = `v${VERSION}`;

  $("#btnSaludar").addEventListener("click", () => {
    escribirMensaje(saludar($("#nombre").value));
  });

  $("#btnDespedir").addEventListener("click", () => {
    escribirMensaje(despedir($("#nombre").value));
  });

  $("#btnSistema").addEventListener("click", mostrarSistema);
  $("#btnCalcular").addEventListener("click", calcular);

  crearParticulas();
  mostrarSistema();
  calcular();
}

document.addEventListener("DOMContentLoaded", iniciarDemo);
