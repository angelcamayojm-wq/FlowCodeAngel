export const VERSION = "1.3.0";
export const DEFAULT_NAME = "Angel";

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

export function saludar(nombre = DEFAULT_NAME) {
  return `Hola ${normalizarNombre(nombre)}`;
}

export function despedir(nombre = DEFAULT_NAME) {
  return `Adiós ${normalizarNombre(nombre)}`;
}

export function estadoSistema() {
  return "OK";
}

export function sumar(a, b) {
  return convertirNumero(a, "a") + convertirNumero(b, "b");
}

export function restar(a, b) {
  return convertirNumero(a, "a") - convertirNumero(b, "b");
}

export function multiplicar(a, b) {
  return convertirNumero(a, "a") * convertirNumero(b, "b");
}

export function dividir(a, b) {
  const divisor = convertirNumero(b, "b");

  if (divisor === 0) {
    throw new RangeError("No se puede dividir entre cero");
  }

  return convertirNumero(a, "a") / divisor;
}

export function healthCheck() {
  return {
    status: "UP",
    service: "FlowCodeAngel",
    version: VERSION,
    message: "Sistema funcionando correctamente",
    timestamp: new Date().toISOString()
  };
}

export function crearResumen(nombre = DEFAULT_NAME, a = 10, b = 5) {
  const primerNumero = convertirNumero(a, "a");
  const segundoNumero = convertirNumero(b, "b");

  return {
    titulo: "Resumen FlowCodeAngel",
    saludo: saludar(nombre),
    despedida: despedir(nombre),
    estado: estadoSistema(),
    operaciones: {
      suma: sumar(primerNumero, segundoNumero),
      resta: restar(primerNumero, segundoNumero),
      multiplicacion: multiplicar(primerNumero, segundoNumero),
      division: dividir(primerNumero, segundoNumero)
    },
    sistema: healthCheck()
  };
}
