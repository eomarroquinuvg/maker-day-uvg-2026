const GAME_URL =
  "https://eomarroquinuvg.github.io/maker-day-uvg-2026/";

const scriptURL =
    "https://script.google.com/macros/s/AKfycbxDoHD1Z_ygX8VdJMimuqcTuFXPnN_WPIm3a_UN9F7MEW0Ts020iV1XC80gx8WGubI_gw/exec";  

function cargarQR() {
  const qr = document.getElementById("qr-img");
  const urlTexto = document.getElementById("game-url");

  qr.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=" +
    encodeURIComponent(GAME_URL);

  urlTexto.textContent = GAME_URL;
}

function cargarRanking() {
  const nombreCallback = "recibirRanking_" + Date.now();

  window[nombreCallback] = function (ranking) {
    mostrarRanking(ranking);
    actualizarHora();

    delete window[nombreCallback];
    script.remove();
  };

  const script = document.createElement("script");

  script.src =
    SCRIPT_URL +
    "?callback=" +
    nombreCallback +
    "&t=" +
    Date.now();

  document.body.appendChild(script);
}

function mostrarRanking(ranking) {
  const lista = document.getElementById("ranking-list");

  lista.innerHTML = "";

  if (!ranking || ranking.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Esperando participantes...";
    lista.appendChild(item);
    return;
  }

  ranking.forEach((fila, index) => {
    const nombre = fila[1];
    const puntaje = fila[3];

    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${nombre} - ${puntaje} pts`;

    lista.appendChild(item);
  });
}

function actualizarHora() {
  const ahora = new Date();

  document.getElementById("last-update").textContent =
    "Última actualización: " + ahora.toLocaleTimeString();
}

cargarQR();
cargarRanking();

setInterval(() => {
  cargarRanking();
}, 30000);