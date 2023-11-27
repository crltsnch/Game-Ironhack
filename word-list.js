const wordList = [
    { word: "manzana", hint: "Comestible, de forma redondeada y algo hundida por los extremos, piel fina, de color verde, amarillo o rojo."},
    { word: "ovoviviparo", hint: "Se aplica a los animales cuyos embriones se desarrollan totalmente en el huevo que está en el interior del cuerpo de la madre."},
    { word: "oxigeno", hint: "Elemento químico gaseoso, incoloro, inodoro e insípido, que constituye una quinta parte del aire atmosférico."},
    { word: "pantano", hint: "Terreno bajo y cenagoso, cubierto de agua, que no es muy honda."},
    { word: "paralelepipedo", hint: "Cuerpo geométrico limitado por seis paralelogramos."},
    { word: "ardilla", hint: "Pequeño mamífero roedor de cola larga y peluda." },
    { word: "esmeralda", hint: "Gema verde preciosa." },
    { word: "galaxia", hint: "Conjunto enorme de estrellas, polvo interestelar y gas." },
    { word: "orquidea", hint: "Planta con flores exquisitas y complejas." },
    { word: "paraguas", hint: "Objeto que protege de la lluvia." },
    { word: "murcielago", hint: "Mamífero volador nocturno." },
    { word: "calabaza", hint: "Muy vario en su forma, tamaño y color, por lo común grande, redondo y con multitud de pipas o semillas." },
    { word: "quimera", hint: "Criatura mitológica con partes de varios animales." },
    { word: "serenidad", hint: "Tranquilidad y paz interior." },
    { word: "nebulosa", hint: "Región interestelar de gas y polvo." },
    { word: "anticonstitucionalidad", hint: "Contrario a lo establecido en la Constitución." },
    { word: "inconmensurabilidad", hint: "Imposibilidad de ser comparado o medido con exactitud." },
    { word: "sesquipedalidad", hint: "Cualidad de ser largo o prolijo en la expresión." },
    { word: "espectrofotometria", hint: "Medición de la intensidad de la luz absorbida o emitida por una sustancia." },
    { word: "circunlocucion", hint: "Manera indirecta de expresar una idea." },
    { word: "intrincado", hint: "Complicado, enmarañado, de difícil comprensión." },
    { word: "anacronismo", hint: "Error que consiste en situar algo fuera de su tiempo histórico." },
    { word: "perplejidad", hint: "Estado de confusión o indecisión." },
    { word: "efervescente", hint: "Que desprende burbujas de gas." },
    { word: "inefable", hint: "Que no puede ser expresado con palabras." },
    { word: "ultracrepidariano", hint: "Que da opiniones sobre algo fuera de su competencia." },
    { word: "polimatia", hint: "Conocimiento enciclopédico." },
    { word: "efimero", hint: "De corta duración o vida breve." },
    { word: "anomalo", hint: "Que se aparta de lo común o sigue una norma inusual." },
    { word: "disparate", hint: "Dicho o hecho absurdo que carece de lógica." },
    { word: "sinecdoque", hint: "Figura retórica que consiste en designar la parte por el todo." },
    { word: "anarquia", hint: "Ausencia de gobierno o autoridad." },
    { word: "apocope", hint: "Supresión de una letra o sílaba al final de una palabra." },
    { word: "karma", hint: "Concepto hinduista y budista que expresa la ley de causa y efecto." },
    { word: "quirurgico", hint: "Relacionado con la cirugía o propio de ella." },
    { word: "perpendicular", hint: "Que forma un ángulo recto con algo." },
    { word: "moribundo", hint: "Que está próximo a morir o que está en un estado de debilidad extrema." },
    { word: "opera", hint: "Género de música teatral en el que los personajes cantan sus partes." },
    { word: "xilofono", hint: "Instrumento musical de percusión con láminas de madera." },
    { word: "zafarrancho", hint: "Desorden o confusión." },
    { word: "sintaxis", hint: "Conjunto de reglas y principios que rigen la estructura de las oraciones en un lenguaje, especialmente en gramática." },
    { word: "gravedad", hint: "Fuerza que atrae dos masas entre sí." },
    { word: "termodinamica", hint: "Estudio de la relación entre el calor y otras formas de energía." },
    { word: "potencia", hint: "Rapidez con la que se realiza trabajo." },
    { word: "metafisica", hint: "Rama de la filosofía que trata de los principios y fundamentos de la realidad." },
    { word: "universal", hint: "Lo que es común a todos los individuos de una especie." },
    { word: "foton", hint: "Partícula elemental de luz." },
    { word: "cosmos", hint: "Todas las cosas que existen, incluido el espacio y todo lo que contiene." },
    { word: "oasis", hint: "Área fértil en un desierto con agua y vegetación." },
    { word: "melodia", hint: "Secuencia de sonidos armoniosos." },
    { word: "aventura", hint: "Experiencia emocionante o arriesgada." },
    { word: "tecnologia", hint: "Conjunto de conocimientos y técnicas aplicadas a la producción y desarrollo de bienes y servicios." },
    { word: "prismatico", hint: "Instrumento óptico para ampliar la visión." },
    { word: "rio", hint: "Cuerpo de agua que fluye continuamente en una dirección definida." },
    { word: "orografia", hint: "Descripción y estudio de las montañas y relieves terrestres." },
    { word: "archipielago", hint: "Grupo de islas cercanas entre sí." },
    { word: "cordillera", hint: "Serie de montañas que están conectadas entre sí." },
    { word: "estuario", hint: "Desembocadura de un río ancha donde se encuentra con el mar." },
    { word: "hemisferio", hint: "Cada una de las dos partes en que se divide la Tierra por el ecuador." },
    { word: "delta", hint: "Acumulación de sedimentos al final de un río, formando un área triangular." },
    { word: "paralelo", hint: "Círculo imaginario que rodea la Tierra paralelo al ecuador." },
    { word: "elefante", hint: "Mamífero terrestre de gran tamaño, con trompa y colmillos largos." },
    { word: "pinguino", hint: "Ave marina no voladora, con plumaje negro y blanco." },
    { word: "tigre", hint: "Animal de pelaje anaranjado con rayas negras." },
    { word: "jirafa", hint: "Mamífero herbívoro de cuello largo y patas largas." },
    { word: "delfin", hint: "Mamífero marino inteligente y juguetón." },
    { word: "koala", hint: "Mamífero marsupial arbóreo originario de Australia." },
    { word: "serpiente", hint: "Reptil sin patas, a menudo venenoso, que se arrastra por el suelo." },
    { word: "hipopotamo", hint: "Mamífero herbívoro semiacuático de gran tamaño." },
    { word: "murcielago", hint: "Mamífero volador nocturno." },
    { word: "diabetes", hint: "Enfermedad crónica que afecta la forma en que el cuerpo maneja la glucosa en sangre." },
    { word: "hipertension", hint: "Aumento persistente de la presión arterial." },
    { word: "artritis", hint: "Inflamación de las articulaciones que causa dolor y rigidez." },
    { word: "craneo", hint: "Hueso que forma la cabeza y aloja el cerebro." },
    { word: "riñon", hint: "Órgano encargado de filtrar la sangre y producir la orina." },
    { word: "femur", hint: "Hueso largo y fuerte del muslo." },
    { word: "pulmon", hint: "Órgano esencial para la respiración." },
    { word: "corazon", hint: "Órgano muscular que bombea la sangre por todo el cuerpo." },
    { word: "higado", hint: "Órgano que desempeña funciones importantes en el metabolismo." },
    { word: "estomago", hint: "Órgano en el sistema digestivo que descompone los alimentos." },
    { word: "medula", hint: "Tejido suave en el interior de los huesos que produce células sanguíneas." },
    { word: "esofago", hint: "Tubo muscular que conecta la garganta con el estómago." },
    { word: "articulacion", hint: "Conexión entre dos huesos que permite el movimiento." },
    { word: "mariposa", hint: "Insecto volador con alas coloridas." },
    { word: "telescopio", hint: "Instrumento óptico para observar objetos lejanos." },
    { word: "helicoptero", hint: "Aeronave con rotores que le permite despegar y aterrizar verticalmente." },
    { word: "travesia", hint: "Viaje largo, especialmente a través del océano o territorio desconocido." },
    { word: "espeleologia", hint: "Exploración de cuevas y cavernas." },
    { word: "algoritmo", hint: "Conjunto de pasos para realizar una tarea o resolver un problema." },
    { word: "resplandor", hint: "Luz brillante y radiante." },
    { word: "agujero", hint: "Abertura o perforación en una superficie." },
    { word: "papiroflexia", hint: "Arte japonés de doblar papel para crear figuras." },
    { word: "cacofonia", hint: "Sonido desagradable o discordante." },
    { word: "laberinto", hint: "Estructura complicada con pasillos y rutas confusas." },
    { word: "teorema", hint: "Enunciado matemático que se puede demostrar como verdadero." },
    { word: "totem", hint: "Objeto tallado con significado espiritual." },
    { word: "megalomania", hint: "Obsesión con el poder y la grandeza." },
    { word: "buceo", hint: "Actividad de sumergirse bajo el agua." },
    { word: "paracaidas", hint: "Dispositivo que ralentiza la caída de un objeto desde una gran altura." },
    { word: "piramide", hint: "Estructura triangular con lados que convergen en un punto." },
    { word: "caracol", hint: "Molusco terrestre con una concha en espiral." },
    { word: "bionico", hint: "Relacionado con organismos que combinan partes orgánicas y mecánicas." }
]