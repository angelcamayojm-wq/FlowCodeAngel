const VERSION = '1.2.0';

function saludar(nombre){
    return `hola ${nombre}, bienvenido a CodeAngel`;
}

function healcheck(){
    return {
        status: 'ok',
        version: VERSION,
        timestamp: new Date().toISOString(),
        mensaje: 'Sistemas CodeAngel funcionando correctamente'
    };
}

function verificarSistema(){
    const resultado = healcheck();
    const statusDiv = document.getElementById('status');

    statusDiv.textContent = `${resultado.mensaje} | ${resultado.timestamp}`;
    statusDiv.style.color = 'rgba(17, 168, 11, 0.73)';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('version').textContent = `v${VERSION}`;
    verificarSistema();
});