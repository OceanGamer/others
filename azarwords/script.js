// Array con frases y sus definiciones
const phrases = [
    {
      phrase: "Serendipia",
      definition:
        "Encuentro o descubrimiento valioso que se produce de manera accidental o casual, cuando se está buscando otra cosa distinta.",
      link: "https://es.wikipedia.org/wiki/Serendipia"
    },
    {
      phrase: "Aporía",
      definition:
        "Dificultad insoluble, cuestión irresoluble, duda o vacilación en la argumentación filosófica.",
      link: "https://es.wikipedia.org/wiki/Apor%C3%ADa"
    },
    {
      phrase: "Epifanía",
      definition:
        "Manifestación repentina y aparentemente inexplicable de una realidad o esencia profunda.",
      link: "https://es.wikipedia.org/wiki/Epifan%C3%ADa"
    },
    {
        phrase: "Farfalle",
        definition:
          "Mariposas en forma de lazo de moño en la pasta, originaria de Italia.",
        link: "https://en.wikipedia.org/wiki/Farfalle"
      },
      {
        phrase: "Pelamanga",
        definition:
          "Fruta tropical ficticia usada en países hispanohablantes para referirse a una fruta desconocida o inexistente.",
        link: "https://es.wikipedia.org/wiki/Pelamanga"
      },
      {
        phrase: "Dendrofobia",
        definition:
          "Miedo irracional e intenso a los árboles o plantas.",
        link: "https://en.wikipedia.org/wiki/Dendrophobia"
      },
      {
        phrase: "Astronave de estacionamiento",
        definition:
          "Teoría de la conspiración que sostiene que los objetos en el cielo son naves espaciales extraterrestres que se estacionan cerca de la Tierra.",
        link: "https://en.wikipedia.org/wiki/Parking_lot_UFO"
      },
      {
        phrase: "Glotonaucracia",
        definition:
          "Sistema de gobierno en el que el poder se ejerce a través del consumo excesivo de comida o alimentos.",
        link: "https://es.wikipedia.org/wiki/Glotonaucracia"
      },
      {
        phrase: "Sesquipedalofobia",
        definition:
          "Miedo irracional a las palabras largas o complejas.",
        link: "https://en.wikipedia.org/wiki/Sesquipedalophobia"
      },
      {
        phrase: "Chocoholismo",
        definition:
          "Adicción o dependencia compulsiva al chocolate.",
        link: "https://es.wikipedia.org/wiki/Chocoholismo"
      },
      {
        phrase: "Criptozoología",
        definition:
          "Estudio de animales cuya existencia no ha sido probada científicamente, como el monstruo del lago Ness o el chupacabra.",
        link: "https://es.wikipedia.org/wiki/Criptozoolog%C3%ADa"
      },
      {
        phrase: "Llamofobia",
        definition:
          "Miedo irracional a los llamas o al fuego.",
        link: "https://en.wikipedia.org/wiki/Pyrophobia"
      },
      {
        phrase: "Inventitis",
        definition:
          "Enfermedad ficticia que afecta a personas que inventan excusas o mentiras constantemente.",
        link: "https://es.wikipedia.org/wiki/Inventitis"
      },
      {
        phrase: "Hipopotomonstrosesquipedaliofobia",
        definition:
          "Miedo irracional a las palabras largas o complejas. (Es una palabra larga y compleja en sí misma)",
        link: "https://en.wikipedia.org/wiki/Hippopotomonstrosesquipedaliophobia"
      },
      {
        phrase: "Síndrome del acento extranjero",
        definition:
          "Trastorno neurológico raro en el que una persona comienza a hablar con un acento extranjero sin haber vivido en el país correspondiente.",
        link: "https://en.wikipedia.org/wiki/Foreign_accent_syndrome"
      },
      
    // Agrega más frases y sus definiciones aquí
  ];
  
  document.addEventListener("DOMContentLoaded", function() {
    const generateButton = document.querySelector("#generate-button");
    const wordContainer = document.querySelector("#word");
    const definitionContainer = document.querySelector("#definition");
    const linkElement = document.querySelector("#wikipedia-link");
  
    generateButton.addEventListener("click", generatePhrase);
  
    function generatePhrase() {
      // Código para generar frase al azar y definición
      const randomIndex = Math.floor(Math.random() * phrases.length);
      const randomPhrase = phrases[randomIndex];
      const palabra = randomPhrase.phrase;
      const definicion = randomPhrase.definition;
  
      // Actualizar el contenido de los contenedores
      wordContainer.textContent = palabra;
      definitionContainer.textContent = definicion;
      
      // Actualizar el enlace de Wikipedia
      linkElement.href = randomPhrase.link;
  
      // Animación de transición
      animatePhrase(wordContainer);
      animatePhrase(definitionContainer);
    }
  
    function animatePhrase(element) {
      element.classList.add("fade-out");
  
      setTimeout(() => {
        element.classList.remove("fade-out");
      }, 500);
    }
  });