 //Llamar de html
 const continuar = document.getElementById("continuar"); 
 const inputUsuario = document.getElementById("usuario");
 const bienvenida = document.getElementById("bienvenida");
 const seleccion = document.getElementById("seleccion");
 const saludo = document.getElementById("saludo");
 const saludoo = document.getElementById("saludoo");
 const animals = document.getElementById("animals");
 const questione = document.getElementById("questione");
 const colors = document.getElementById("colors");
 const questioncolor = document.getElementById("questioncolor");
 const seccionAnimals = document.getElementById("seccionAnimals");
 const seccionColors = document.getElementById("seccionColors");
 

//Accion boton continuar
  continuar.onclick = function() {
    //1. Almacenar el valor del input
    let usuario = inputUsuario.value;
    //2. Ocultar la caja de bienvenida
    bienvenida.classList.add("esconder");
    //3. Visualizar la caja de Seleccion
    saludo.classList.remove("esconder");
    saludoo.innerText = "Hello " + usuario + "!"
  }
//Llegar a  Animals Question
  animals.onclick = function() {
    saludo.classList.add("esconder");
    questione.classList.remove("esconder");
  }
//Llegar a Colors Question
  colors.onclick = function(){
    saludo.classList.add("esconder");
    questioncolor.classList.remove("esconder");
  }
//Voler a la Seccion desde Animals 
  seccionAnimals.onclick = function(){
    questione.classList.add("esconder");
    saludo.classList.remove("esconder");
  
  }
//Voler a la Seccion desde Animals
  seccionColors.onclick = function(){
    questioncolor.classList.add("esconder");
    saludo.classList.remove("esconder");
  }

//RESULTADO 
  const respuestaAnimals = document.getElementById("resultadoAnimals");
  const respuestaColor = document.getElementById("resultadoColors");
 
  //animals
    respuestaAnimals.onclick = function() {
      //Definir respuesta correctas
      const respuestasCorrectas = ["dog", "giraffe", "lion"]; 
      //Traer las respuesta correctas 
      const rpta_1 = document.getElementById("question-1-dog");
      const rpta_2 = document.getElementById("question-2-giraffe");
      const rpta_3 = document.getElementById("question-3-lion");
      // Marcar en verde respuesta correctas
      rpta_1.classList.add("correcta");
      rpta_2.classList.add("correcta");
      rpta_3.classList.add("correcta");
  
      // Respuestas del usuario para cada pregunta
      const usuario_1 = document.querySelector("input[name=questionone]:checked");
      const usuario_2 = document.querySelector("input[name=questiontwo]:checked");
      const usuario_3 = document.querySelector("input[name=questionthree]:checked");

      //Comparar las respuestas del usuario vs respuestasCorrectas
      if (usuario_1.value != respuestasCorrectas[0]) {
        usuario_1.parentElement.classList.add("incorrecta");
      }
      if (usuario_2.value != respuestasCorrectas[1]) {
        usuario_2.parentElement.classList.add("incorrecta");
      }
      if (usuario_3.value != respuestasCorrectas[2]) {
        usuario_3.parentElement.classList.add("incorrecta");
      }
    }
  //Colors
    respuestaColor.onclick = function(){
     //Definir respuesta correctas
      const respuestacorrecta=["black","blue","yellow"];
        //Traer las respues correctas
      const rept_1 = document.getElementById("question-1-black");
      const rept_2 = document.getElementById("question-2-blue");
      const rept_3 = document.getElementById("question-3-yellow");
      // Marcar en verde respues correctas
      rept_1.classList.add("correcta");
      rept_2.classList.add("correcta");
      rept_3.classList.add("correcta"); 
      // Respuestas del usuario para cada pregunta
      const usuario_4 = document.querySelector("input[name=questionfour]:checked");
      const usuario_5 = document.querySelector("input[name=questionfive]:checked");
      const usuario_6 = document.querySelector("input[name=questionsext]:checked");
      //Comparar las respuestas del usuario vs respuestasCorrectas
      if (usuario_4.value != respuestacorrecta[0]) {
          usuario_4.parentElement.classList.add("incorrecta");
        }
      if (usuario_5.value != respuestacorrecta[1]) {
          usuario_5.parentElement.classList.add("incorrecta");
          }
      if (usuario_6.value != respuestacorrecta [2]) {
          usuario_6.parentElement.classList.add("incorrecta");
          }
     
      }


// Variables pueden ser let, const

/*
 () parentesis
 [] Brackets
 {} Corchetes
*/
/*
Tipos de datos en JS

int : Entero
* cualquier entero desde -infinito hasta + infinito (ej:  1, 500, 230023, -1 , 0);
* Realizar operaciones matematicas

strings : cadena o cadena de texto
* Cualquier cadena de texto almacenada en comillas (ej:  "Yasmin Suarez", "Bogotá", "*hola *que *haces+0438723")
* Las comillas pueden ser dobles "", o sencillas ''

array: [] lista
* Siempre van en brackets []
* Siempre tiene un bracket de apertura [ y uno de cierre ]
* Esto es una lista que se organiza por indices de 0 hasta la cantidad de elementos -1;
* No existen los indices negativos, y tampoco puedo acceder un indice mayor a la cantidad de elementos - 1;
* Ejemplo:
* ["Juliem", "Yasmin", 12] 
* El numero de elementos de las lista es 3, pero el indice más grande es 2, que es igual a 3 - 1
* Los elementos de la lista pueden ser de cualquier tipo soportado por JS
* let myList = ["Juliem", 0, true, "gggg", {nombre: "James"}, ["Josefa", 23] ]

Object : {} un objeto de javascript 
* que tambien se llama JSON
* esto es un a estcutura de datos que tiene propiedaes definidas y cada propiedad un valor
* Los atributos/propiedades se separan por coma y pueden tomar cualquier tipo de dato valido en JS
* Ejemplo:
* { 
*   nombre: "Yasmin", //String
*   edad: 30, //int
*   cantidadDeHijos: 1, //int
*   pais: "Colombia", //String
*   country: "Colombia", //String
*   idiomas: ["espanol", "sueco"], //array
*   esCasada: true, //bool
*   leGustaLaHamburguesa: false, //bool 
* }
* 

Booleano: Bool  true ó false
* Solo puede ser true o false, nunca en comillas
* Ejemplo
* const yasAmaElReggaeton = false;
*/





