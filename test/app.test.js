import assert from "node:assert/strict";
import {
  crearResumen,
  despedir,
  dividir,
  estadoSistema,
  healthCheck,
  multiplicar,
  restar,
  saludar,
  sumar,
  VERSION
} from "../src/app.js";

const pruebas = [];

function test(nombre, ejecutar) {
  pruebas.push({ nombre, ejecutar });
}

test("saludar devuelve un saludo personalizado", () => {
  assert.equal(saludar("Angel"), "Hola Angel");
  assert.equal(saludar("  "), "Hola Angel");
});

test("despedir devuelve una despedida personalizada", () => {
  assert.equal(despedir("Angel"), "Adiós Angel");
});

test("estadoSistema devuelve OK", () => {
  assert.equal(estadoSistema(), "OK");
});

test("operaciones matemáticas funcionan con números y strings numéricos", () => {
  assert.equal(sumar(5, 10), 15);
  assert.equal(restar(20, "8"), 12);
  assert.equal(multiplicar(4, 3), 12);
  assert.equal(dividir(10, 2), 5);
});

test("dividir protege contra división entre cero", () => {
  assert.throws(() => dividir(10, 0), /cero/);
});

test("sumar valida entradas no numéricas", () => {
  assert.throws(() => sumar("hola", 2), /número válido/);
});

test("healthCheck retorna estado UP y versión actual", () => {
  const resultado = healthCheck();

  assert.equal(resultado.status, "UP");
  assert.equal(resultado.service, "FlowCodeAngel");
  assert.equal(resultado.version, VERSION);
  assert.match(resultado.timestamp, /^\d{4}-\d{2}-\d{2}T/);
});

test("crearResumen arma una respuesta completa", () => {
  const resumen = crearResumen("Angel", 12, 4);

  assert.equal(resumen.saludo, "Hola Angel");
  assert.equal(resumen.estado, "OK");
  assert.equal(resumen.operaciones.suma, 16);
  assert.equal(resumen.operaciones.division, 3);
});

let fallidas = 0;

for (const prueba of pruebas) {
  try {
    prueba.ejecutar();
    console.log(`✅ ${prueba.nombre}`);
  } catch (error) {
    fallidas += 1;
    console.error(`❌ ${prueba.nombre}`);
    console.error(error);
  }
}

if (fallidas > 0) {
  console.error(`\n${fallidas} prueba(s) fallaron.`);
  process.exit(1);
}

console.log(`\n🎉 ${pruebas.length} pruebas pasaron correctamente.`);
