
/* ==========================================
   RENEW - COMPLIANCE
   VIVERO Y ADMINISTRACIÓN
   8 CASOS PRÁCTICOS
========================================== */

const casos = [
  {
    titulo: "Recepción y pago sin evidencias",
    pregunta: "Un transportista entrega 600 plantas, pero el albarán indica 750. El proveedor solicita tramitar la factura completa para no retrasar el pago. ¿Qué debe hacer Administración?",
    opciones: [
      "Pagar la factura y ajustar el stock al cierre del mes.",
      "Registrar las 600 recibidas, documentar la diferencia y conciliar antes de aprobar el pago.",
      "Solicitar un nuevo albarán por 750 y archivarlo.",
      "Autorizar el pago si el transportista confirma verbalmente la cantidad."
    ],
    correcta: 1,
    explicaciones: [
      "No resuelve la discrepancia y deja un pago sin soporte.",
      "La recepción real debe verificarse y la diferencia registrarse antes de dar conformidad a la factura.",
      "Modificar el documento sin acreditar la entrega oculta la incidencia.",
      "Una confirmación verbal no sustituye la evidencia verificable."
    ]
  },
  {
    titulo: "Factura duplicada en un cierre urgente",
    pregunta: "Durante el cierre mensual aparece una factura con el mismo importe y proveedor que otra ya pagada, pero con distinta referencia. ¿Cómo actuar?",
    opciones: [
      "Aprobarla si existe presupuesto disponible.",
      "Dividir el pago en dos importes para reducir el riesgo.",
      "Solicitar al proveedor que confirme por teléfono y pagar.",
      "Bloquear temporalmente el pago, cotejar pedido, albarán y factura y registrar la revisión."
    ],
    correcta: 3,
    explicaciones: [
      "El presupuesto no acredita una operación nueva.",
      "Fraccionar el pago elude el control.",
      "La confirmación telefónica por sí sola no prueba la recepción.",
      "El control documental y la conciliación evitan duplicidades y pagos indebidos."
    ]
  },
  {
    titulo: "Invitación de un proveedor",
    pregunta: "Un suministrador ofrece un viaje de fin de semana al empleado que decide las compras, justo antes de renovar su contrato. ¿Qué respuesta es adecuada?",
    opciones: [
      "Rechazar la ventaja, documentar el ofrecimiento y consultar con Compliance.",
      "Aceptar el viaje, pero abstenerse en la votación final.",
      "Aceptar si también asisten empleados de otros proveedores.",
      "Pedir que la invitación se emita a nombre del departamento."
    ],
    correcta: 0,
    explicaciones: [
      "La ventaja puede influir o parecer que influye en la decisión; debe rechazarse y comunicarse.",
      "Abstenerse no legitima aceptar un beneficio indebido.",
      "La presencia de otros invitados no elimina el riesgo.",
      "Cambiar el destinatario formal no cambia la naturaleza del ofrecimiento."
    ]
  },
  {
    titulo: "Proveedor nuevo y cambio bancario",
    pregunta: "Un vivero recién contratado envía una factura y solicita transferir el pago a una cuenta distinta de la que figura en el contrato. ¿Qué corresponde hacer?",
    opciones: [
      "Pagar porque la factura está emitida correctamente.",
      "Pedir al transportista que confirme la nueva cuenta.",
      "Verificar el cambio por un canal independiente, revisar la documentación y obtener la autorización.",
      "Pagar una parte y verificar después el resto."
    ],
    correcta: 2,
    explicaciones: [
      "La factura no verifica por sí sola la titularidad de la cuenta.",
      "El transportista no es una fuente autorizada para validar el cambio.",
      "La cuenta bancaria y la conformidad deben contrastarse antes del pago.",
      "Un pago parcial también puede ser indebido."
    ]
  },
  {
    titulo: "Familiar en empresa transportista",
    pregunta: "Una persona de Administración participa en la evaluación de ofertas y descubre que una de las transportistas pertenece a su hermana. La oferta es competitiva. ¿Qué debe hacer?",
    opciones: [
      "Continuar porque el precio demuestra objetividad.",
      "Declarar el vínculo y apartarse de la evaluación cuando proceda, dejando constancia.",
      "Pedir a la hermana que reduzca el precio para evitar sospechas.",
      "Comunicarlo solo si finalmente gana el contrato."
    ],
    correcta: 1,
    explicaciones: [
      "El precio no elimina el conflicto de interés.",
      "El conflicto potencial debe declararse antes de decidir, aunque la oferta parezca favorable.",
      "La intervención puede agravar el riesgo de trato preferente.",
      "La comunicación posterior llega demasiado tarde."
    ]
  },
  {
    titulo: "Envío de datos a destinatario erróneo",
    pregunta: "Un empleado envía por error a un proveedor un archivo con datos personales de transportistas y números de cuenta. ¿Cuál es la primera actuación adecuada?",
    opciones: [
      "Esperar a que el proveedor confirme que ha abierto el archivo.",
      "Borrar el correo enviado y no informar para evitar alarma.",
      "Reenviar el archivo correcto sin mencionar el error.",
      "Comunicar inmediatamente el incidente por el canal establecido y conservar las evidencias."
    ],
    correcta: 3,
    explicaciones: [
      "Esperar retrasa la gestión del incidente.",
      "Borrar u ocultar impide su análisis.",
      "Corregir el envío no elimina la exposición previa.",
      "Un envío no autorizado puede constituir una brecha; debe notificarse internamente sin demora."
    ]
  },
  {
    titulo: "Indicios de irregularidad",
    pregunta: "Una empleada observa varios pagos a un proveedor con conceptos genéricos y sin albaranes. Un compañero le propone investigar por su cuenta usando su correo personal. ¿Qué debe hacer?",
    opciones: [
      "Recopilar hechos disponibles, preservar evidencias y comunicarlo por el canal habilitado.",
      "Acceder a las cuentas del proveedor para confirmar sospechas.",
      "Difundir el caso entre el equipo para buscar testigos.",
      "Eliminar los correos dudosos para evitar filtraciones."
    ],
    correcta: 0,
    explicaciones: [
      "Se debe informar de buena fe, sin investigar por cuenta propia ni difundir información.",
      "Investigar sin autorización puede vulnerar controles y derechos.",
      "Difundir el caso compromete la confidencialidad.",
      "Eliminar evidencias impide verificar los hechos."
    ]
  },
  {
    titulo: "Checklist antes de aprobar",
    pregunta: "Se propone pagar una factura por plantas recibidas. El proveedor está autorizado y el pedido existe, pero el ajuste de inventario por una merma no tiene justificación ni aprobación. ¿Qué decisión es correcta?",
    opciones: [
      "Aprobar porque el proveedor ya está homologado.",
      "Pagar y pedir la justificación al finalizar el trimestre.",
      "Detener la aprobación hasta documentar y autorizar el ajuste y verificar la conciliación.",
      "Eliminar la merma del inventario para que cuadren los registros."
    ],
    correcta: 2,
    explicaciones: [
      "La homologación no sustituye los controles de cada operación.",
      "La revisión posterior no corrige la falta de aprobación previa.",
      "El checklist exige soporte, aprobación y coherencia entre inventario, recepción y factura.",
      "Modificar registros para cuadrarlos destruye la trazabilidad."
    ]
  }
];

/* VARIABLES DEL JUEGO */

let casoActual = 0;
let puntos = 0;
let seleccion = null;

/* ELEMENTOS DE LA PÁGINA */

const portada = document.getElementById("portada");
const pantallaPregunta = document.getElementById("pantallaPregunta");
const pantallaResolucion = document.getElementById("pantallaResolucion");
const pantallaFinal = document.getElementById("pantallaFinal");

const btnComenzar = document.getElementById("btnComenzar");
const btnConfirmar = document.getElementById("btnConfirmar");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnReiniciar = document.getElementById("btnReiniciar");

/* CAMBIAR DE PANTALLA */

function mostrarPantalla(pantalla) {
  document.querySelectorAll(".pantalla").forEach(elemento => {
    elemento.classList.remove("activa");
  });

  pantalla.classList.add("activa");
  window.scrollTo(0, 0);
}

/* COMENZAR EL JUEGO */

function comenzarJuego() {
  casoActual = 0;
  puntos = 0;
  seleccion = null;
  mostrarPregunta();
}

/* MOSTRAR PREGUNTA */

function mostrarPregunta() {
  const caso = casos[casoActual];

  seleccion = null;

  document.getElementById("numeroCaso").textContent =
    `CASO ${casoActual + 1} DE ${casos.length}`;

  document.getElementById("puntuacion").textContent =
    `${puntos} PUNTOS`;

  document.getElementById("progreso").style.width =
    `${(casoActual / casos.length) * 100}%`;

  document.getElementById("tituloCaso").textContent =
    caso.titulo;

  document.getElementById("enunciadoCaso").textContent =
    caso.pregunta;

  const contenedorOpciones = document.getElementById("opciones");
  contenedorOpciones.innerHTML = "";

  const letras = ["A", "B", "C", "D"];

  caso.opciones.forEach((opcion, indice) => {
    const boton = document.createElement("button");

    boton.type = "button";
    boton.className = "opcion";

    const letra = document.createElement("span");
    letra.className = "letra-opcion";
    letra.textContent = letras[indice];

    const texto = document.createElement("span");
    texto.textContent = opcion;

    boton.appendChild(letra);
    boton.appendChild(texto);

    boton.addEventListener("click", () => {
      seleccionarOpcion(indice);
    });

    contenedorOpciones.appendChild(boton);
  });

  btnConfirmar.disabled = true;

  mostrarPantalla(pantallaPregunta);
}

/* SELECCIONAR RESPUESTA */

function seleccionarOpcion(indice) {
  seleccion = indice;

  const botones = document.querySelectorAll(".opcion");

  botones.forEach((boton, posicion) => {
    boton.classList.toggle(
      "seleccionada",
      posicion === indice
    );
  });

  btnConfirmar.disabled = false;
}

/* CONFIRMAR RESPUESTA */

function confirmarRespuesta() {
  if (seleccion === null) {
    return;
  }

  const caso = casos[casoActual];
  const acertada = seleccion === caso.correcta;

  if (acertada) {
    puntos++;
  }

  mostrarResolucion(acertada);
}

/* MOSTRAR RESOLUCIÓN */

function mostrarResolucion(acertada) {
  const caso = casos[casoActual];
  const letras = ["A", "B", "C", "D"];

  document.getElementById("resultadoIcono").textContent =
    acertada ? "✅" : "❌";

  document.getElementById("resultadoTitulo").textContent =
    acertada ? "¡Respuesta correcta!" : "Respuesta incorrecta";

  document.getElementById("resultadoMensaje").textContent =
    acertada
      ? "Has identificado la actuación adecuada."
      : `La respuesta correcta es la opción ${letras[caso.correcta]}.`;

  const contenedor = document.getElementById("explicaciones");
  contenedor.innerHTML = "";

  caso.opciones.forEach((opcion, indice) => {
    const explicacion = document.createElement("div");

    explicacion.className =
      indice === caso.correcta
        ? "explicacion correcta"
        : "explicacion incorrecta";

    const titulo = document.createElement("strong");

    titulo.textContent =
      `${letras[indice]}. ${opcion} ${
        indice === caso.correcta ? "✓ CORRECTA" : "✗ INCORRECTA"
      }`;

    const texto = document.createElement("p");
    texto.textContent = caso.explicaciones[indice];

    explicacion.appendChild(titulo);
    explicacion.appendChild(texto);

    contenedor.appendChild(explicacion);
  });

  btnSiguiente.textContent =
    casoActual === casos.length - 1
      ? "VER RESULTADOS"
      : "SIGUIENTE CASO";

  mostrarPantalla(pantallaResolucion);
}

/* PASAR AL SIGUIENTE CASO */

function siguienteCaso() {
  casoActual++;

  if (casoActual < casos.length) {
    mostrarPregunta();
  } else {
    mostrarResultados();
  }
}

/* RESULTADOS FINALES */

function mostrarResultados() {
  document.getElementById("puntosFinales").textContent =
    `${puntos} / ${casos.length}`;

  let mensaje = "";

  if (puntos === 8) {
    mensaje = "¡Excelente! Has resuelto correctamente todos los casos.";
  } else if (puntos >= 6) {
    mensaje = "¡Muy buen resultado! Demuestras un buen conocimiento de Compliance.";
  } else if (puntos >= 4) {
    mensaje = "Buen trabajo. Conviene reforzar algunos controles de Compliance.";
  } else {
    mensaje = "Has completado el reto. Repasa las explicaciones y vuelve a intentarlo.";
  }

  document.getElementById("mensajeFinal").textContent =
    mensaje;

  mostrarPantalla(pantallaFinal);
}

/* BOTONES */

btnComenzar.addEventListener("click", comenzarJuego);

btnConfirmar.addEventListener("click", confirmarRespuesta);

btnSiguiente.addEventListener("click", siguienteCaso);

btnReiniciar.addEventListener("click", comenzarJuego);
