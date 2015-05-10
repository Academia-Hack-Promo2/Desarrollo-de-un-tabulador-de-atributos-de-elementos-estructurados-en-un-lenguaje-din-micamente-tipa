// Referencias:
// http://stackoverflow.com/questions/26552749/best-way-to-iterate-array-of-hashes-javascript
// http://stackoverflow.com/questions/18333427/how-to-insert-row-in-html-table-body-in-javascript


var personas = new Array();
var keys = new Array();
var values = new Array();

function definirEstructura() {
    persona1 = {
        "Cedula": "123456",
        "Nombre": "Pepito",
        "Apellido": "Pérez",
        "Correo": "pepiperez@hotmail.com"
    };
    personas.push(persona1);
    persona2 = {
        "Cedula": "234567",
        "Nombre": "Andres",
        "Apellido": "Alvarez",
        "Correo": "andresalvarez@hotmail.com"
    };
    personas.push(persona2);
    return definirEstructura;
}

function generarThead(i){
    for (var values in personas[i]) {
        if (personas[i].hasOwnProperty(values)) {
            values.push(values);
            values.push(personas[key][i]);
        }
    }
}

function generarTabla(i){
    for (var key in personas[i]) {
        if (personas[i].hasOwnProperty(key)) {
            keys.push(key);
            values.push(personas[i][key]);
        }
    }
}
generarThead(0)
definirEstructura();
generarTabla(0);

var tabla = document.getElementsByTagName("thead")[0];

var linea = tabla.insertRow(tabla.rows.length);

var celda = linea.insertCell(0);
var texto = document.createTextNode(keys[0]);
celda.appendChild(texto);

var celda = linea.insertCell(1);
var texto = document.createTextNode(keys[1]);
celda.appendChild(texto);

var celda = linea.insertCell(2);
var texto = document.createTextNode(keys[2]);
celda.appendChild(texto);

var celda = linea.insertCell(3);
var texto = document.createTextNode(keys[3]);
celda.appendChild(texto);

generarTabla(1);

var tabla = document.getElementsByTagName("tbody")[0];

var linea = tabla.insertRow(tabla.rows.length);

var celda = linea.insertCell(0);
var texto = document.createTextNode(values[0]);
celda.appendChild(texto);

var celda = linea.insertCell(1);
var texto = document.createTextNode(values[1]);
celda.appendChild(texto);

var celda = linea.insertCell(2);
var texto = document.createTextNode(values[2]);
celda.appendChild(texto);

var celda = linea.insertCell(3);
var texto = document.createTextNode(values[3]);
celda.appendChild(texto);

generarTabla(1);

var linea = tabla.insertRow(tabla.rows.length);

var celda = linea.insertCell(0);
var texto = document.createTextNode(values[4]);
celda.appendChild(texto);

var celda = linea.insertCell(1);
var texto = document.createTextNode(values[5]);
celda.appendChild(texto);

var celda = linea.insertCell(2);
var texto = document.createTextNode(values[6]);
celda.appendChild(texto);

var celda = linea.insertCell(3);
var texto = document.createTextNode(values[7]);
celda.appendChild(texto);