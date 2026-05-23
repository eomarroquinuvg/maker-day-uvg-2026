let participante = {
  nombre: "",
  correo: "",
  puntaje: 0
};

let nivelActual = 0;
let retos = [];
let tiempo = 60;
let temporizador = null;
let juegoFinalizado = false;

const bancoRetos = [
  { respuesta: "UVG", desplazamiento: 3, pista: "Universidad donde ocurre el evento" },
  { respuesta: "HOLA", desplazamiento: 3, pista: "Saludo inicial" },
  { respuesta: "CIBER", desplazamiento: 4, pista: "Área que protege sistemas" },
  { respuesta: "DATOS", desplazamiento: 2, pista: "La IA aprende usando esto" },
  { respuesta: "SEGURIDAD", desplazamiento: 5, pista: "Protección de información" },

  { respuesta: "ROBOT", desplazamiento: 3, pista: "Máquina inteligente" },
  { respuesta: "IA", desplazamiento: 4, pista: "Tecnología que aprende de datos" },
  { respuesta: "MODELO", desplazamiento: 2, pista: "La IA usa uno" },
  { respuesta: "PROMPT", desplazamiento: 6, pista: "Instrucción dada a una IA" },
  { respuesta: "ALGORITMO", desplazamiento: 4, pista: "Conjunto de pasos" },

  { respuesta: "CODIGO", desplazamiento: 3, pista: "Lo escriben programadores" },
  { respuesta: "RED", desplazamiento: 5, pista: "Dispositivos conectados" },
  { respuesta: "LOGIN", desplazamiento: 2, pista: "Entrar a un sistema" },
  { respuesta: "TOKEN", desplazamiento: 4, pista: "Código temporal" },
  { respuesta: "SERVIDOR", desplazamiento: 3, pista: "Atiende solicitudes y guarda información" },

  { respuesta: "HASH", desplazamiento: 4, pista: "Huella digital" },
  { respuesta: "BACKUP", desplazamiento: 3, pista: "Copia de seguridad" },
  { respuesta: "FIREWALL", desplazamiento: 2, pista: "Protege tráfico" },
  { respuesta: "MALWARE", desplazamiento: 5, pista: "Software malicioso" },
  { respuesta: "PHISHING", desplazamiento: 4, pista: "Engaño digital" },

  { respuesta: "VIRUS", desplazamiento: 3, pista: "Amenaza informática" },
  { respuesta: "ANTIVIRUS", desplazamiento: 5, pista: "Detecta amenazas informáticas" },
  { respuesta: "ENCRIPTAR", desplazamiento: 2, pista: "Proteger información" },
  { respuesta: "CIFRAR", desplazamiento: 4, pista: "Ocultar mensaje" },
  { respuesta: "CESAR", desplazamiento: 6, pista: "Cifrado clásico" },

  { respuesta: "PATRON", desplazamiento: 3, pista: "La IA busca esto" },
  { respuesta: "PREDICCION", desplazamiento: 4, pista: "Resultado probable" },
  { respuesta: "ENTRENAR", desplazamiento: 2, pista: "Proceso de reconocer patrones en Aprendizaje automático" },
  { respuesta: "CHATBOT", desplazamiento: 5, pista: "En IA, habla con personas" },
  { respuesta: "SCRATCH", desplazamiento: 4, pista: "Programación por bloques" },

  { respuesta: "BLOQUES", desplazamiento: 2, pista: "Se usan en Scratch" },
  { respuesta: "JUEGO", desplazamiento: 3, pista: "Actividad interactiva" },
  { respuesta: "NUBE", desplazamiento: 4, pista: "Guardar datos virtualmente" },
  { respuesta: "CORREO", desplazamiento: 3, pista: "Dato solicitado" },
  { respuesta: "PERFIL", desplazamiento: 5, pista: "Información personal" },

  { respuesta: "PRIVADO", desplazamiento: 3, pista: "No visible" },
  { respuesta: "PUBLICO", desplazamiento: 4, pista: "Visible para todos" },
  { respuesta: "ATAQUE", desplazamiento: 2, pista: "Comprometer sistema" },
  { respuesta: "DEFENSA", desplazamiento: 3, pista: "Protección" },
  { respuesta: "RIESGO", desplazamiento: 5, pista: "Posible problema" },

  { respuesta: "ALERTA", desplazamiento: 3, pista: "Aviso" },
  { respuesta: "PUERTO", desplazamiento: 4, pista: "Canal de red" },
  { respuesta: "SCRIPT", desplazamiento: 2, pista: "Automatiza usando código" },
  { respuesta: "CONSOLA", desplazamiento: 3, pista: "Escribir comandos" },
  { respuesta: "SISTEMA", desplazamiento: 5, pista: "Conjunto de componentes" },

  { respuesta: "MAKER", desplazamiento: 4, pista: "Persona creadora" },
  { respuesta: "CLAVE", desplazamiento: 3, pista: "Protege acceso" },
  { respuesta: "USUARIO", desplazamiento: 2, pista: "Usa sistema/programa" },
  { respuesta: "ACCESO", desplazamiento: 5, pista: "Permiso" },
  { respuesta: "COMPUTADORA", desplazamiento: 4, pista: "Equipo electrónico" },

  { respuesta: "INTERNET", desplazamiento: 3, pista: "Red mundial de información" },
  { respuesta: "PASSWORD", desplazamiento: 5, pista: "Protege una cuenta" },
  { respuesta: "HACKER", desplazamiento: 2, pista: "Experto en sistemas" },
  { respuesta: "TECLADO", desplazamiento: 4, pista: "Sirve para escribir" },
  { respuesta: "MOUSE", desplazamiento: 3, pista: "Controla el cursor" },

  { respuesta: "PANTALLA", desplazamiento: 6, pista: "Muestra información visual" },
  { respuesta: "MONITOR", desplazamiento: 2, pista: "Dispositivo de salida" },
  { respuesta: "CAMARA", desplazamiento: 4, pista: "Captura imágenes" },
  { respuesta: "MICROFONO", desplazamiento: 3, pista: "Captura sonido" },
  { respuesta: "AUDIO", desplazamiento: 5, pista: "Relacionado con sonido" },

  { respuesta: "VIDEO", desplazamiento: 2, pista: "Imágenes en movimiento" },
  { respuesta: "ARCHIVO", desplazamiento: 4, pista: "Documento digital" },
  { respuesta: "CARPETA", desplazamiento: 3, pista: "Organiza archivos" },
  { respuesta: "DESCARGA", desplazamiento: 5, pista: "Bajar información de internet" },
  { respuesta: "SUBIR", desplazamiento: 2, pista: "Enviar archivo a internet" },

  { respuesta: "MEMORIA", desplazamiento: 4, pista: "Guarda información temporal" },
  { respuesta: "DISCO", desplazamiento: 3, pista: "Almacena información" },
  { respuesta: "USB", desplazamiento: 5, pista: "Conector portátil" },
  { respuesta: "TABLET", desplazamiento: 2, pista: "Dispositivo táctil portátil" },
  { respuesta: "CELULAR", desplazamiento: 4, pista: "Teléfono inteligente" },

  { respuesta: "ANDROID", desplazamiento: 3, pista: "Sistema operativo móvil" },
  { respuesta: "WINDOWS", desplazamiento: 6, pista: "Sistema operativo popular" },
  { respuesta: "LINUX", desplazamiento: 2, pista: "Sistema operativo libre" },
  { respuesta: "PYTHON", desplazamiento: 4, pista: "Lenguaje de programación" },
  { respuesta: "JAVA", desplazamiento: 3, pista: "Lenguaje usado en muchas aplicaciones" },

  { respuesta: "VARIABLE", desplazamiento: 5, pista: "Guarda un valor en programación" },
  { respuesta: "FUNCION", desplazamiento: 2, pista: "Bloque reutilizable de código" },
  { respuesta: "BUCLE", desplazamiento: 4, pista: "Repite instrucciones" },
  { respuesta: "ERROR", desplazamiento: 3, pista: "Problema en código" },
  { respuesta: "DEBUG", desplazamiento: 5, pista: "Buscar errores en código" },

  { respuesta: "BIT", desplazamiento: 2, pista: "Unidad mínima de información" },
  { respuesta: "BYTE", desplazamiento: 4, pista: "Grupo de bits" },
  { respuesta: "PIXEL", desplazamiento: 3, pista: "Punto de una imagen digital" },
  { respuesta: "DRON", desplazamiento: 5, pista: "Vehículo aéreo no tripulado" },
  { respuesta: "SENSOR", desplazamiento: 2, pista: "Detecta cambios del entorno" },

  { respuesta: "SATELITE", desplazamiento: 4, pista: "Orbita la Tierra" },
  { respuesta: "ENERGIA", desplazamiento: 3, pista: "Hace funcionar dispositivos" },
  { respuesta: "BATERIA", desplazamiento: 6, pista: "Almacena energía" },
  { respuesta: "CABLE", desplazamiento: 2, pista: "Conecta dispositivos" },
  { respuesta: "WIFI", desplazamiento: 4, pista: "Conexión inalámbrica" },

  { respuesta: "BLUETOOTH", desplazamiento: 3, pista: "Conexión inalámbrica de corto alcance" },
  { respuesta: "NAVEGADOR", desplazamiento: 5, pista: "Permite visitar sitios web" },
  { respuesta: "BUSCADOR", desplazamiento: 2, pista: "Encuentra información en internet" },
  { respuesta: "GOOGLE", desplazamiento: 4, pista: "Motor de búsqueda famoso" },
  { respuesta: "YOUTUBE", desplazamiento: 3, pista: "Plataforma de videos" },

  { respuesta: "STREAM", desplazamiento: 5, pista: "Transmisión en línea" },
  { respuesta: "GAMER", desplazamiento: 2, pista: "Persona que juega videojuegos" },
  { respuesta: "AVATAR", desplazamiento: 4, pista: "Representación digital de usuario" },
  { respuesta: "METAVERSO", desplazamiento: 3, pista: "Mundo virtual interactivo" },
  { respuesta: "INNOVACION", desplazamiento: 6, pista: "Crear algo nuevo y útil" },

  { respuesta: "MACHINELEARNING", desplazamiento: 3, pista: "Campo donde las computadoras aprenden de datos" },
  { respuesta: "INTELIGENCIA", desplazamiento: 5, pista: "Capacidad de aprender y resolver problemas" },
  { respuesta: "ARTIFICIAL", desplazamiento: 2, pista: "Hecho por humanos, no natural" },
  { respuesta: "NEURONAL", desplazamiento: 4, pista: "Tipo de red inspirada en el cerebro" },
  { respuesta: "REDNEURONAL", desplazamiento: 3, pista: "Modelo inspirado en conexiones cerebrales" },

  { respuesta: "DEEPLEARNING", desplazamiento: 6, pista: "Aprendizaje profundo" },
  { respuesta: "CLASIFICACION", desplazamiento: 2, pista: "Separar datos por categorías" },
  { respuesta: "REGRESION", desplazamiento: 4, pista: "Predice valores numéricos" },
  { respuesta: "ETIQUETA", desplazamiento: 3, pista: "Valor correcto usado para entrenar" },
  { respuesta: "DATOS", desplazamiento: 5, pista: "Materia prima de la IA" },

  { respuesta: "ENTRENAMIENTO", desplazamiento: 2, pista: "Proceso de aprendizaje de un modelo" },
  { respuesta: "VALIDACION", desplazamiento: 4, pista: "Comprobar desempeño del modelo" },
  { respuesta: "PRUEBA", desplazamiento: 3, pista: "Evaluar si el modelo funciona" },
  { respuesta: "PREDICCION", desplazamiento: 5, pista: "Resultado estimado por un modelo" },
  { respuesta: "PATRONES", desplazamiento: 2, pista: "Relaciones encontradas en datos" },

  { respuesta: "SUPERVISADO", desplazamiento: 4, pista: "Aprendizaje con respuestas correctas" },
  { respuesta: "NOSUPERVISADO", desplazamiento: 3, pista: "Aprendizaje sin respuestas correctas" },
  { respuesta: "CLUSTER", desplazamiento: 5, pista: "Grupo de datos similares" },
  { respuesta: "KMEANS", desplazamiento: 2, pista: "Algoritmo popular de agrupamiento" },
  { respuesta: "ARBOL", desplazamiento: 4, pista: "Modelo con decisiones en ramas" },

  { respuesta: "BOSQUE", desplazamiento: 3, pista: "Conjunto de árboles de decisión" },
  { respuesta: "RANDOMFOREST", desplazamiento: 6, pista: "Modelo formado por muchos árboles" },
  { respuesta: "VECTOR", desplazamiento: 2, pista: "Representación numérica de información" },
  { respuesta: "FEATURE", desplazamiento: 4, pista: "Característica usada por un modelo" },
  { respuesta: "VARIABLE", desplazamiento: 3, pista: "Dato que puede cambiar" },

  { respuesta: "INSTANCIA", desplazamiento: 5, pista: "Ejemplo individual de datos" },
  { respuesta: "MODELO", desplazamiento: 2, pista: "Sistema entrenado para aprender" },
  { respuesta: "PARAMETRO", desplazamiento: 4, pista: "Valor interno ajustado en entrenamiento" },
  { respuesta: "HIPERPARAMETRO", desplazamiento: 3, pista: "Configuración definida antes de entrenar" },
  { respuesta: "EXACTITUD", desplazamiento: 5, pista: "Qué tan correcto es un modelo" },

  { respuesta: "PRECISION", desplazamiento: 2, pista: "Métrica de aciertos positivos" },
  { respuesta: "RECALL", desplazamiento: 4, pista: "Capacidad de encontrar positivos reales" },
  { respuesta: "FUNO", desplazamiento: 3, pista: "Métrica que combina precisión y recall" },
  { respuesta: "SESGO", desplazamiento: 5, pista: "Error causado por preferencias en datos" },
  { respuesta: "SOBREAJUSTE", desplazamiento: 2, pista: "Modelo que memoriza demasiado" },

  { respuesta: "GENERALIZAR", desplazamiento: 4, pista: "Funcionar bien con nuevos datos" },
  { respuesta: "GPT", desplazamiento: 3, pista: "Modelo de lenguaje generativo" },
  { respuesta: "CHATGPT", desplazamiento: 5, pista: "Asistente conversacional basado en IA" },
  { respuesta: "TOKEN", desplazamiento: 2, pista: "Fragmento de texto usado por modelos" },
  { respuesta: "LLM", desplazamiento: 4, pista: "Modelo grande de lenguaje" },

  { respuesta: "TRANSFORMER", desplazamiento: 3, pista: "Arquitectura moderna de IA" },
  { respuesta: "EMBEDDING", desplazamiento: 5, pista: "Representación numérica de palabras" },
  { respuesta: "VISION", desplazamiento: 2, pista: "Área de IA que analiza imágenes" },
  { respuesta: "GENERATIVA", desplazamiento: 4, pista: "IA que crea contenido nuevo" },
  { respuesta: "PROMPTING", desplazamiento: 3, pista: "Arte de escribir instrucciones para IA" },

  { respuesta: "CHATBOT", desplazamiento: 5, pista: "Sistema que conversa automáticamente" },
  { respuesta: "AUTOMATIZACION", desplazamiento: 2, pista: "Realizar tareas sin intervención humana" },
  { respuesta: "RECOMENDADOR", desplazamiento: 4, pista: "Sugiere contenido o productos" },
  { respuesta: "ANOMALIA", desplazamiento: 3, pista: "Dato fuera de lo normal" },
  { respuesta: "SIMULACION", desplazamiento: 5, pista: "Imitación de situaciones reales" },

  { respuesta: "OPTIMIZACION", desplazamiento: 2, pista: "Mejorar resultados minimizando errores" },
  { respuesta: "PROBABILIDAD", desplazamiento: 4, pista: "Posibilidad de que ocurra algo" },
  { respuesta: "ESTADISTICA", desplazamiento: 3, pista: "Ciencia de analizar datos" },
  { respuesta: "PYTORCH", desplazamiento: 5, pista: "Framework popular de deep learning" },
  { respuesta: "TENSORFLOW", desplazamiento: 2, pista: "Biblioteca usada para inteligencia artificial" }
];

function cifrarCesar(texto, desplazamiento) {
  const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  let resultado = "";

  texto = texto.toUpperCase();

  for (const letra of texto) {
    const posicion = alfabeto.indexOf(letra);

    if (posicion === -1) {
      resultado += letra;
    } else {
      const nuevaPosicion = (posicion + desplazamiento) % alfabeto.length;
      resultado += alfabeto[nuevaPosicion];
    }
  }

  return resultado;
}

function seleccionarRetosAleatorios() {
  retos = bancoRetos
    .map((reto) => ({
      ...reto,
      mensaje: cifrarCesar(reto.respuesta, reto.desplazamiento)
    }))
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
}

function iniciarJuego() {

    const nombre = document
        .getElementById("nombre")
        .value
        .trim();

    const correo = document
        .getElementById("correo")
        .value
        .trim();

    // Verificar campos vacíos
    if (nombre === "" || correo === "") {

        alert(
            "Por favor completa todos los campos."
        );

        return;
    }

    // Validar formato de correo
    const expresionCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!expresionCorreo.test(correo)) {

        alert(
            "Por favor escribe un correo válido.\n\nEjemplo:\ncorreo@ejemplo.com"
        );

        document
            .getElementById("correo")
            .focus();

        return;
    }

    participante.nombre = nombre;
    participante.correo = correo;
    participante.puntaje = 0;

    nivelActual = 0;
    tiempo = 60;
    juegoFinalizado = false;

    seleccionarRetosAleatorios();

    document
        .getElementById("registro")
        .classList.add("hidden");

    document
        .getElementById("juego")
        .classList.remove("hidden");

    document
        .getElementById("final")
        .classList.add("hidden");

    mostrarReto();

}

function decirDragon(mensaje, tipo = "normal") {
  const caja = document.getElementById("dragon-message");

  caja.className = "dragon-message";

  if (tipo !== "normal") {
    caja.classList.add(tipo);
  }

  caja.textContent = "🐉 " + mensaje;
}

function generarDesplazamientoVisual(desplazamiento) {
  const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  const contenedor = document.getElementById("shift-visual");

  contenedor.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const letraCifrada = alfabeto[i];
    const posicionOriginal =
      (i - desplazamiento + alfabeto.length) % alfabeto.length;

    const letraOriginal = alfabeto[posicionOriginal];

    const item = document.createElement("div");
    item.className = "shift-item";
    item.innerHTML =
      `${letraCifrada} <span class="shift-arrow">→</span> ${letraOriginal}`;

    contenedor.appendChild(item);
  }
}

function mostrarReto() {
  clearInterval(temporizador);
  tiempo = 60;

  const reto = retos[nivelActual];

  document.getElementById("nivel").textContent =
    `Reto ${nivelActual + 1} de ${retos.length}`;

  document.getElementById("tiempo").textContent =
    `⏰ Tiempo: ${tiempo} segundos`;

  document.getElementById("tiempo").style.color = "#ffffff";
  document.getElementById("mensaje").textContent = reto.mensaje;
  document.getElementById("pista").textContent =
    `${reto.pista} | Desplazamiento: ${reto.desplazamiento}`;

  generarDesplazamientoVisual(reto.desplazamiento);

    decirDragon(
    "Para descifrar, mueve cada letra " +
    reto.desplazamiento +
    " posiciones hacia atrás.",
    "normal"
    );  

  document.getElementById("respuesta").value = "";
  document.getElementById("resultado").textContent = "";
  document.getElementById("puntaje").textContent =
    `Puntaje: ${participante.puntaje}`;

  iniciarTemporizador();
}

function iniciarTemporizador() {
  clearInterval(temporizador);

  temporizador = setInterval(() => {
    tiempo--;

    document.getElementById("tiempo").textContent =
      `⏰ Tiempo: ${tiempo} segundos`;

    if (tiempo === 10) {
    decirDragon("¡Quedan 10 segundos! Piensa rápido.", "warning");
    }

    if (tiempo <= 10) {
    document.getElementById("tiempo").style.color = "#ff4d4d";
    }

    if (tiempo <= 0) {
      clearInterval(temporizador);

      document.getElementById("resultado").textContent =
        "⏰ Tiempo agotado. Pasando al siguiente reto...";

      setTimeout(() => {
        avanzarReto();
      }, 1000);
    }
  }, 1000);
}

function validarRespuesta() {

  clearInterval(temporizador);

  const respuesta = document
    .getElementById("respuesta")
    .value
    .trim()
    .toUpperCase();

  const reto = retos[nivelActual];

  if (respuesta === reto.respuesta) {

    let puntosGanados = 10;

    if (tiempo > 50) {
      puntosGanados = 100;
    }
    else if (tiempo > 40) {
      puntosGanados = 80;
    }
    else if (tiempo > 30) {
      puntosGanados = 60;
    }
    else if (tiempo > 20) {
      puntosGanados = 40;
    }
    else if (tiempo > 10) {
      puntosGanados = 20;
    }

    participante.puntaje += puntosGanados;

    document.getElementById(
      "resultado"
    ).textContent =
      `✅ Correcto +${puntosGanados} pts`;

    decirDragon(
      `¡Excelente! Ganaste ${puntosGanados} puntos.`,
      "success"
    );

  } else {

    document.getElementById(
      "resultado"
    ).textContent =
      `❌ Incorrecto. Respuesta: ${reto.respuesta}`;

    decirDragon(
      "Casi. Observa el desplazamiento y vuelve a intentarlo.",
      "error"
    );

  }

  document.getElementById(
    "puntaje"
  ).textContent =
    `Puntaje: ${participante.puntaje}`;

  setTimeout(() => {

    avanzarReto();

  },1200);

}

function avanzarReto() {
  nivelActual++;

  if (nivelActual < retos.length) {
    mostrarReto();
  } else {
    finalizarJuego();
  }
}

function finalizarJuego() {
  if (juegoFinalizado) return;

  juegoFinalizado = true;
  clearInterval(temporizador);

  document.getElementById("juego").classList.add("hidden");
  document.getElementById("final").classList.remove("hidden");

  document.getElementById("resumen").textContent =
    `${participante.nombre}, tu puntaje final fue: ${participante.puntaje} puntos.`;

  enviarAGoogleForms();
}

function volverAIntentar() {
  clearInterval(temporizador);
  detenerConfetti();

  document.getElementById("final").classList.add("hidden");
  document.getElementById("juego").classList.add("hidden");
  document.getElementById("registro").classList.remove("hidden");

  document.getElementById("nombre").value = participante.nombre;
  document.getElementById("correo").value = participante.correo;

  document.getElementById("resultado").textContent = "";
  document.getElementById("puntaje").textContent = "Puntaje: 0";
  document.getElementById("respuesta").value = "";

  participante.puntaje = 0;
  nivelActual = 0;
  tiempo = 60;
  juegoFinalizado = false;
}

function enviarAGoogleForms() {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwcViliK4Ch0ssQJQFxJm5eXsqyDqxpXhPgHyQuagECIqV8LpDAMXgNy7vL9357uE3Vww/exec";

  const datos = {
    nombre: participante.nombre,
    correo: participante.correo,
    puntaje: participante.puntaje
  };

  fetch(scriptURL, {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(datos)
  })
    .then((respuesta) => respuesta.json())
    .then((ranking) => {
      mostrarRanking(ranking);
    })
    .catch((error) => {
      console.error("Error al guardar o cargar ranking:", error);
    });
}

function mostrarRanking(ranking) {
  const lista = document.getElementById("ranking-list");

  lista.innerHTML = "";

  ranking.forEach((fila) => {
    const nombre = fila[1];
    const puntaje = fila[3];

    const item = document.createElement("li");
    item.textContent = `${nombre} - ${puntaje} pts`;

    lista.appendChild(item);
  });

  iniciarConfettiContinuo();
}


let intervaloConfetti = null;

function iniciarConfettiContinuo() {
  detenerConfetti();

  lanzarConfetti();

  intervaloConfetti = setInterval(() => {
    lanzarConfetti();
  }, 900);
}

function detenerConfetti() {
  if (intervaloConfetti !== null) {
    clearInterval(intervaloConfetti);
    intervaloConfetti = null;
  }
}

function lanzarConfetti() {
  for (let i = 0; i < 25; i++) {
    const confetti = document.createElement("div");

    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = obtenerColorConfetti();
    confetti.style.animationDelay = Math.random() * 0.5 + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

function obtenerColorConfetti() {
  const colores = [
    "#008D36",
    "#00c853",
    "#8fffc1",
    "#ffffff",
    "#ffcc00"
  ];

  return colores[Math.floor(Math.random() * colores.length)];
}