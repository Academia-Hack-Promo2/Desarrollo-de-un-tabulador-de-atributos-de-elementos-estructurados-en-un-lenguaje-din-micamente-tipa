function definirEstructura() {
    arreglo = new Array();
    arreglo.push({
        "cedula": "123456",
        "nombre": "Pepito",
        "apellido": "Pérez",
        "correo": "pepiperez@hotmail.com"
    });
    arreglo.push({
        "cedula": "234567",
        "nombre": "Andres",
        "apellido": "Alvarez",
        "correo": "andresalvarez@hotmail.com"
    });
    return arreglo;
}
var a = definirEstructura();
console.log(a);


function genera_tabla() {
    // Obtener la referencia del elemento body
    var body = document.getElementsByTagName("body")[0];

    // Crea un elemento <table> y un elemento <tbody>
    var tabla = document.createElement("table");

    var tblBody = document.createElement("tbody");

    // Crea las celdas
    for (var i = 0; i < 2; i++) {
        // Crea las hileras de la tabla
        var hilera = document.createElement("tr");

        for (var j = 0; j < 4; j++) {
            // Crea un elemento <td> y un nodo de texto, haz que el nodo de
            // texto sea el contenido de <td>, ubica el elemento <td> al final
            // de la hilera de la tabla
            // AQUÍ HACER UN FOR PARA RECORRER EL ARREGLO Y LO IMPRIMA EN LA TABLA
            for (key in a) {
                console.log(a);
                var celda = document.createElement("td");
                var textoCelda = document.createTextNode("test");
                celda.appendChild(textoCelda);
                hilera.appendChild(celda);
            }
        }
        // agrega la hilera al final de la tabla (al final del elemento tblbody)
        tblBody.appendChild(hilera);
    }

    // posiciona el <tbody> debajo del elemento <table>
    tabla.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tabla);
    // modifica el atributo "border" de la tabla y lo fija a "2";
    tabla.setAttribute("border", "4");
}