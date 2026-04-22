import { saludar, estadoSistema, sumar, healthCheck } from "../src/app.js";

function testSaludar() {
  const resultado = saludar("Angel");
  if (resultado === "Hola Angel") {
    console.log("Test 1 Pasado: funcion saludar correcta");
  } else {
    console.log("Test 1 Fallido");
  }
}

function testEstadoSistema() {
  const resultado = estadoSistema();
  if (resultado === "OK") {
    console.log("Test 2 Pasado: estadoSistema funciona");
  } else {
    console.log("Test 2 Fallido");
  }
}

function testSumar() {
  const resultado = sumar(5, 10);
  if (resultado === 15) {
    console.log("Test 3 Pasado: sumar funciona");
  } else {
    console.log("Test 3 Fallido");
  }
}

function testHealthCheck() {
  const resultado = healthCheck();
  if (resultado.status === "UP") {
    console.log("Test 4 Pasado: healthCheck funciona");
  } else {
    console.log("Test 4 Fallido");
  }
}


testSaludar();
testEstadoSistema();
testSumar();
testHealthCheck();