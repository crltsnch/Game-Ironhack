const PalabraMostrada = document.querySelector(".visualizacion-palabra");
const textoIntentos = document.querySelector(".texto-intentos b");
const tecladoDiv = document.querySelector(".teclado");
const imgAhorcado = document.querySelector(".caja-ahorcado img");
const juegoModal = document.querySelector(".modal-juego");
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

const finDelJuego = (esVictoria) => {
    //Despues de completar el juego
    const textoModal = esVictoria ? 'Has encontrado la palabra:' : 'La palabra correcta era:';
    modalJuego.querySelector("img").src = 'images/${esVictoria ? "win" : "lose"}.gif';
    modalJuego.querySelector("h4").innerText = esVictoria ? '¡Felicidades!' : '¡Fin del juego!';
    modalJuego.querySelector("p").innerHTML = '${textoModal} <b>${palabraActual}</b>';
    modalJuego.classList.add("show");
}

const iniciarJuego = (button, letraClickeada) => {
    //Comprobando si la letra clickeada está en la palabraActual
    if (palabraActual.includes(letraClickeada)) {
        //Mostrando todas las letras correctas en la visualizacion de la palabra
        [...palabraActual].forEach((letra, index) => {
            if (letra === letraClickeada) {
                cajaPalabra.querySelectorAll("li")[index].innerText = letra;
                letrasCorrectas.push(letra);
                cajaPalabra.querySelectorAll("li")[index].classList.add("correcta");
            }
        } else {
            //Si la letra no está en la palabraActual
            contadorIntentosMal++;
            textoIntentos.innerText = '${contadorIntentosMal} / ${intentosMaximos}';
            imgAhorcado.src = 'images/hangman-${contadorIntentosMal}.svg';
        }
        button.disabled = true; //Desactivando el botón clickeado
        textoIntentos.innerText = '${contadorIntentosMal} / ${intentosMaximos}';
        //Llamando a la función finDelJuego si el usuario gana o pierde
        if (contadorIntentosMal === intentosMaximos) return finDelJuego(false);
        if (letrasCorrectas.length === palabraActual.length) return finDelJuego(true);
}

// creando botones dle teclado y añadiendo even listeners
for (let i=97; i<=122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    cajaTeclado.appendChild(button);
    button.addEventListener("click", (e) => iniciarJuego(e.target, String.fromCharCode(i)));
    
}