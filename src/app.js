export function saludar(nombre) {
  return `Hola ${nombre}`;
}

export function despedir(nombre) {
  return `Adiós ${nombre}`;
}

export function estadoSistema() {
  return "OK";
}

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}
export function healthCheck() {
  return { status: "UP" };
}

