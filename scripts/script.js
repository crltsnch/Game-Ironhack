const PalabraMostrada = document.querySelector(".visualizacion-palabra");
const textoIntentos = document.querySelector(".texto-intentos b");
const tecladoDiv = document.querySelector(".teclado");
const imgAhorcado = document.querySelector(".caja-ahorcado img");
const juegoModal = document.querySelector(".juego-modal");
const jugarDeNuevo = juegoModal.querySelector("button");

//Inicializando variables de juego
let palabraActual, letrasCorrectas, contadorIntentosMal;
const intentosMaximos = 6;

const reiniciarJuego = () => {
    // Riniciando variables del juego y elementos de la interfaz de usuario
    letrasCorrectas = [];
    contadorIntentosMal = 0;
    imagenAhorcado.src = "images/hangman-0.svg";
    textoIntentos.innerText = '${contadorIntentosMal} / ${intentosMaximos}';
    cajaPalabra.innerHTML = palabraActual.split("").map(() => '<li class="letter"></li>').join("");
    cajaTeclado.querySelectorAll("button").forEach(btn => (btn.disabled = false));
    modalJuego.classList.remove("show");
}

const obtenerPalabraAleatoria = () => {
    //Seleccionando una palabra aleatoria y pista del array de palabras
    const { word, hint} = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    palabraActual = word; //Haciendo que la palabra actual sea la palabra seleccionada
    document.querySelector(".hint-text b").innerText = hint; //Mostrando la pista
    reiniciarJuego();
}

