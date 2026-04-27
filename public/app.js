const VERSION = '1.2.0';

function healcheck() {
    return {
        status: 'ok',
        version: VERSION,
        timestamp: new Date().toISOString(),
        mensaje: 'Sistema funcionando correctamente 🚀'
    };
}

function verificarSistema() {
    const resultado = healcheck();
    const statusDiv = document.getElementById('status');

    statusDiv.textContent = `${resultado.mensaje} | ${resultado.timestamp}`;
    statusDiv.style.color = 'green';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('version').textContent = `v${VERSION}`;
});