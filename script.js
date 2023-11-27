
//Seleccionador de elementos del DOM, variables const que almacenan referencias a estos elementos.
// .querySelector() seleccionar elementos por etiquetas, clases, atributos...
// .getElementById() seleccionar elementos por id
const PalabraMostrada = document.querySelector(".visualizacion-palabra");
const textoIntentos = document.querySelector(".texto-intentos b");
const tecladoDiv = document.querySelector(".teclado");
const imgAhorcado = document.querySelector(".caja-ahorcado img");
const juegoModal = document.querySelector(".modal-juego");
const jugarDeNuevo = juegoModal.querySelector(".reiniciar");
const sonidoGanado = document.getElementById("sonido-ganado");
const sonidoPerdido = document.getElementById("sonido-perdido");
const sonidoLetraMal = document.getElementById("sonido-letra-mal");
const sonidoLetraBien = document.getElementById("sonido-letra-bien");
const confeti = document.getElementById("confetiGif");

//Inicializando variables de juego
let palabraActual, letrasCorrectas, contadorIntentosMal;
const intentosMaximos = 6;


//Funcion reiniciarJuego, utilizo const en vez de function porque no voy a reasignar la funcion
const reiniciarJuego = () => {
    //console.log("Reiniciando juego...") lo utilice para rastrear la ejecución en consola
    // Riniciando variables del juego y elementos de la interfaz de usuario
    letrasCorrectas = [];   //arra letras correctas
    contadorIntentosMal = 0;
    imgAhorcado.src = "images/hangman-0.svg";
    textoIntentos.innerText = `${contadorIntentosMal} / ${intentosMaximos}`;  //acutalizamos con innerText
    PalabraMostrada.innerHTML = palabraActual.split("").map(() => '<li class="letter">_</li>').join("");   //innterHTML para actualizar el contenido en html con _ para cada letra
    tecladoDiv.querySelectorAll("button").forEach(btn => (btn.disabled = false));  //seleccionamos todos los botones del teclado y los habilitamos
    juegoModal.classList.remove("mostrar");  
}


//Funcion obtener la palabra aleatoria a adivinar
const obtenerPalabraAleatoria = () => {
    //console.log("Obteniendo palabra aleatoria...") lo utilicé para rastrear la ejecución en consola
    //Seleccionando una palabra aleatoria y pista del array de palabras
    const {word, hint} = wordList[Math.floor(Math.random() * wordList.length)];   //desestructuración de objetos
    palabraActual = word;  //Haciendo que la palabra actual sea la palabra seleccionada antes
    document.querySelector(".texto-pista").innerText = hint;  //Mostrando la pista actualizandola de antes con innerText
    reiniciarJuego();  //llamando a la funcion reiniciarJuego
}


//Función que inicia el juego con los argumentos boton y letra seleccionada
const iniciarJuego = (button, letraClickeada) => {
    // Comprobando si la letra clickeada está en la palabraActual
    if (palabraActual.includes(letraClickeada)) {
        // Mostrando todas las letras correctas en la visualización de la palabra
        [...palabraActual].forEach((letra, index) => {   //spread operator para convertir la palabra en un array, forEach itera en cada elemento del array y letra es el caracter actual y index su posición
            if (letra === letraClickeada) {
                letrasCorrectas.push(letra);   //añadimos la letra al array de letras correctas
                PalabraMostrada.querySelectorAll("li")[index].innerText = letra;  //actualiza la visualizacion de la palabra seleccionando el elemento li correspondiente al indice de la letra clickeada
                PalabraMostrada.querySelectorAll("li")[index].classList.add("adivinada");  //añade la clase adivinada al elemento li correspondiente al indice de la letra clickeada
                button.disabled = true  //desactiva el boton clickeado
                
                //Reproduciendo sonido de letra correcta
                sonidoLetraBien.play();
            }
        });

    } 
    
    else {
        // Si la letra no está en la palabraActual
        contadorIntentosMal++;
        imgAhorcado.src = `images/hangman-${Math.min(contadorIntentosMal, 6)}.svg`;

        button.disabled = true; // Desactivando el botón clickeado
        textoIntentos.innerText = `${contadorIntentosMal} / ${intentosMaximos}`;

        sonidoLetraMal.play();

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
        // Mostrar GIF de confeti
        confeti.style.display = "block";
        // Ocultar el confeti después de 3 segundos
        setTimeout(() => {
            confeti.style.display = "none";
        }, 3000);
    }

    if (!esVictoria) {
        sonidoPerdido.play();
    }
  };

// creando botones del teclado y añadiendo even listeners
for (let i=97; i<=122; i++) {
    const button = document.createElement("button");
    button.innerText = String.fromCharCode(i);
    tecladoDiv.appendChild(button);
    button.addEventListener("click", (e) => iniciarJuego(e.target, String.fromCharCode(i)));
}

obtenerPalabraAleatoria();
jugarDeNuevo.addEventListener("click", obtenerPalabraAleatoria);