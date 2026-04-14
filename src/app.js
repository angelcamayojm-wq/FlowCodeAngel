function saludar(nombre) {
  return `Hola ${nombre}`;
}

function estadoSistema() {
  return "OK";
}

function sumar(a, b) {
  return a + b;
}

function healthCheck() {
  return {
    status: "UP"
  };
}

module.exports = {
  saludar,
  estadoSistema,
  sumar,
  healthCheck
};