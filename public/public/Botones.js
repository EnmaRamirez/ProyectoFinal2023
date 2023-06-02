function aplicarEstilo(numero){

    var titulo = document.getElementById('titulo');
    var Colores = document.getElementById(' Colores');
    var Colores1 = document.getElementById('Colores1');
    var Colores2 = document.getElementById('Colores2');
    var Colores3 = document.getElementById('Colores3');
    var body = document.body;
 
    titulo.classList = "estilo" + numero;
    Colores.classList = "estilo" + numero;
    Colores1.classList = "estilo" + numero;
    Colores2.classList = "estilo" + numero;
    Colores3.classList = "estilo" + numero;
    body.classList = "estilo"  + numero;
 
 
 }
 
 function resetear (numero) {
    var titulo = document. getElementById ("titulo"); 
    var Colores = document. getElementById ("Colores");
    var body = document. body;
    titulo.classList = "" ;
    Colores.classList = "";
    body.classList = "";
 }
 
