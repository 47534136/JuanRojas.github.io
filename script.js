const mensajes = [
  "💻 Desarrollador Web",
  "📊 Especialista en Arquitectura Empresarial",
  "🎯 Técnico en Computación e Informática",
  "🚀 Apasionado por la tecnología"
];

let i = 0;
const elemento = document.getElementById("mensaje");

function mostrarMensaje() {
  elemento.textContent = mensajes[i];
  i = (i + 1) % mensajes.length;
}

setInterval(mostrarMensaje, 2000);
mostrarMensaje();
