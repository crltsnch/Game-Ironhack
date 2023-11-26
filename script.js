const PalabraMostrada = document.querySelector(".visualizacion-palabra");
const textoIntentos = document.querySelector(".texto-intentos b");
const tecladoDiv = document.querySelector(".teclado");
const imgAhorcado = document.querySelector(".caja-ahorcado img");
const juegoModal = document.querySelector(".modal-juego");
const jugarDeNuevo = juegoModal.querySelector(".reiniciar");
const sonidoGanado = document.getElementById("sonidoGanado");

//Inicializando variables de juego
let palabraActual, letrasCorrectas, contadorIntentosMal;
const intentosMaximos = 6;

const reiniciarJuego = () => {
    console.log("Reiniciando juego...")
    // Riniciando variables del juego y elementos de la interfaz de usuario
    letrasCorrectas = [];
    contadorIntentosMal = 0;
    imgAhorcado.src = "images/hangman-0.svg";
    textoIntentos.innerText = `${contadorIntentosMal} / ${intentosMaximos}`;
    PalabraMostrada.innerHTML = palabraActual.split("").map(() => '<li class="letter">_</li>').join("");
    tecladoDiv.querySelectorAll("button").forEach(btn => (btn.disabled = false));
    juegoModal.classList.remove("mostrar");
}

const obtenerPalabraAleatoria = () => {
    console.log("Obteniendo palabra aleatoria...")
    //Seleccionando una palabra aleatoria y pista del array de palabras
    const {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];
    palabraActual = word; //Haciendo que la palabra actual sea la palabra seleccionada
    document.querySelector(".texto-pista").innerText = hint; //Mostrando la pista
    reiniciarJuego();
}


const iniciarJuego = (button, letraClickeada) => {
    // Comprobando si la letra clickeada está en la palabraActual
    if (palabraActual.includes(letraClickeada)) {
        // Mostrando todas las letras correctas en la visualización de la palabra
        [...palabraActual].forEach((letra, index) => {
            if (letra === letraClickeada) {
                letrasCorrectas.push(letra);
                PalabraMostrada.querySelectorAll("li")[index].innerText = letra;
                PalabraMostrada.querySelectorAll("li")[index].classList.add("adivinada");
            }
        });

    } else {
        // Si la letra no está en la palabraActual
        contadorIntentosMal++;
        imgAhorcado.src = `images/hangman-${Math.min(contadorIntentosMal, 6)}.svg`;

        button.disabled = true; // Desactivando el botón clickeado
        textoIntentos.innerText = `${contadorIntentosMal} / ${intentosMaximos}`;

        // Llamando a la función finDelJuego si el usuario pierde
        if (contadorIntentosMal >= intentosMaximos) {
            finDelJuego(false);
            return; // Salir de la función para evitar que se siga ejecutando después de perder
        }
    }

    // Llamando a la función finDelJuego si el usuario gana
    if (letrasCorrectas.length === palabraActual.length) {
        finDelJuego(true);
    }
};



const finDelJuego = (esVictoria) => {
    console.log(`Fin del juego: ${esVictoria ? "Victoria" : "Derrota"}`)
    // Después de completar el juego
    const textoModal = esVictoria
      ? "Has encontrado la palabra:"
      : "La palabra correcta era:";
    juegoModal.querySelector("img").src = `images/${esVictoria ? "winner" : "loser"}.gif`;
    juegoModal.querySelector("h4").innerText = esVictoria ? "¡Felicidades!" : "¡Fin del juego!";
    juegoModal.querySelector("p").innerHTML = `${textoModal} <b>${palabraActual}</b>`;
    juegoModal.classList.add("mostrar");

    if (esVictoria) {
        sonidoGanado.play();
    }

    
  };

// creando botones dle teclado y añadiendo even listeners
for (let i=97; i<=122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    tecladoDiv.appendChild(button);
    button.addEventListener("click", (e) => iniciarJuego(e.target, String.fromCharCode(i)));
}

obtenerPalabraAleatoria();
jugarDeNuevo.addEventListener("click", obtenerPalabraAleatoria);