import { crearResumen } from "./app.js";

const ANSI = {
  reset: "\x1b[0m",
  cyan: "\x1b[36m",
  green: "\x1b[32m",
  magenta: "\x1b[35m",
  yellow: "\x1b[33m",
  bold: "\x1b[1m",
  dim: "\x1b[2m"
};

const puedeUsarColor = Boolean(process.stdout.isTTY);

function pintar(color, texto) {
  if (!puedeUsarColor) return texto;
  return `${ANSI[color] ?? ""}${texto}${ANSI.reset}`;
}

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function escribirLinea(texto, color = "reset", velocidad = 4) {
  const salida = pintar(color, texto);

  for (const caracter of salida) {
    process.stdout.write(caracter);
    await esperar(velocidad);
  }

  process.stdout.write("\n");
}

function imprimirBanner() {
  console.log(pintar("cyan", "╔════════════════════════════════════╗"));
  console.log(pintar("cyan", "║        FlowCodeAngel CLI 🚀        ║"));
  console.log(pintar("cyan", "╚════════════════════════════════════╝"));
}

async function main() {
  const resumen = crearResumen("Angel", 12, 4);

  imprimirBanner();
  await escribirLinea("Preparando demo del proyecto...", "yellow");
  await escribirLinea(`✅ ${resumen.saludo}`, "green");
  await escribirLinea(`🧪 Estado del sistema: ${resumen.estado}`, "magenta");
  await escribirLinea(`➕ Suma: ${resumen.operaciones.suma}`, "green");
  await escribirLinea(`➖ Resta: ${resumen.operaciones.resta}`, "green");
  await escribirLinea(`✖️ Multiplicación: ${resumen.operaciones.multiplicacion}`, "green");
  await escribirLinea(`➗ División: ${resumen.operaciones.division}`, "green");
  await escribirLinea(`💚 HealthCheck: ${resumen.sistema.status} | v${resumen.sistema.version}`, "cyan");
  await escribirLinea(`${resumen.despedida}. Sigue codeando con flow.`, "yellow");
}

main().catch((error) => {
  console.error(pintar("red", "Error ejecutando la demo:"), error.message);
  process.exitCode = 1;
});
