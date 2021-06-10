1. Leer gitbook, sacar dudas
2. Nombre del Proyecto (Trivia)
3. Maqueta página
    1. Página de Inicio
    2. Página de Saludo y seleccion A (Animals) o B (Colors)
    3. Página de Animals Question
    4. Página de Colors Question
4. Establecer plataforma para trabajar en este caso fue [https://replit.com/](https://replit.com/)
    1. Creamos usuarios 
    2. Creamos carpetas donde guardar los archivos
        1. index.html
        2. style.css
        3. script.ja
        4. Carpeta de images (img)
        5. README.md
5.  index.html
    1. Establecer estructura de visualización
    2. Conocer etiquetas y ejecutarlas. Pagina de ayuda
        1. [https://www.w3schools.com/tags/default.asp](https://www.w3schools.com/tags/default.asp)
        2. [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    3. Etiquetas de contenedores (páginas) principales

        ```html
        <html>
        	<head>
        		<link href="style.css" rel="stylesheet" type="text/css" />
        	</head>
        	<body>
        		<section (pagina 1)></section>
        		<section (pagina 2)></section>
        		<section (pagina 3 triva1)></section>
        		<section (pagina 4 triva2)></section>
        		<script src="script.js"></script>
        	</body>
        </html>
        ```

    4. De acuerdo a las etiquetas padres e hijos de todo el index.html, se procese a realizar la asiganicion de CLASS e ID para las etiquetas a estilizar
6. Style.css
    1. Se procede a realizar el estilo de acuerdo al diseño de las páginas mensionadas anteriormente. Las siguientes declaraciones utilizadas mayormente es el proyecto fueron:
        1. Border
        2. Color
        3. Width and heght
        4. Margin and Padding
        5. Background
        6. Font-size
        7. Display

    2. Pagina de consultas:

    [https://css-tricks.com/](https://css-tricks.com/)
    [https://www.w3schools.com/css/default.asp](https://www.w3schools.com/css/default.asp)
    https://www.youtube.com/watch?v=Yjg8adW4nBA

7. JavaScript
    1. Se investiga que variables son las que nos puede ayudar a llamar el html, asimismo que variables nos pueden ayudar a activar los botones
    2. Se identifica la accion que queremos que haga el boton, es decir, aparte del click que quiero que haga demas. Variables utilizadas para esta funciones fueron:
          1. cons
          2. let
          3. document.getElementById

              ```js
                const inputUsuario = document.getElementById("usuario");
              ```

          4. onclick = funcion ()

                ```js
                  continuar.onclick = function() {}
                ```

          5. classList.add y  class.remove

                ```js
                  bienvenida.classList.add("esconder");
                  seleccion.classList.remove("esconder");
                ```

         6. innerText

                ```js
                  saludo.innerText = "Hello " + usuario + "!";
                ```

    3. Se investiga nuevamente que variables nos pueden servir para seleccionar las respuestas  asignadas por el usuario, tanto correcta como incorrectas, adicionalmente como se puede asignar un color entre las respuestas correctas e incorrectas. Varianles a utilizar para estas opciones fueron:

        1. document.getElementById

            ```js
              const rpta_1 = document.getElementById("pregunta-1-dog");
            ```

        2. document.querySelector

            ```js
                const usuario_1 = document.querySelector('input[name="questionone"]:checked');
            ```

        3. if 

            ```js
                if (usuario_1.value != respuestascOk[0]) {
                   usuario_1.parentElement.classList.add("nok");
                }
            ```

    4. Finalmente se asigna la acción de los botones, Results y Start en JS.
    5. Páginas de consulta
        1. [https://es.stackoverflow.com/questions/17783/cómo-obtener-el-valor-de-radio-button-en-javascript](https://es.stackoverflow.com/questions/17783/c%C3%B3mo-obtener-el-valor-de-radio-button-en-javascript)
        2. [https://www.w3schools.com/jsref/prop_radio_checked.asp](https://www.w3schools.com/jsref/prop_radio_checked.asp)[https://www.w3schools.com/jsref/prop_style_color.asp](https://www.w3schools.com/jsref/prop_style_color.asp)
        3. [https://www.w3schools.com/jsref/prop_radio_checked.asp](https://www.w3schools.com/jsref/prop_radio_checked.asp)
        4. [https://www.youtube.com/watch?v=Yjg8adW4nBA](https://www.youtube.com/watch?v=Yjg8adW4nBA)