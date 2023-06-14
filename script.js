
function calcular() {
    // recuperar los valores de la página
    // sumarlos
    // agregarlos en la página en el lugar adecuado
    var op1=document.getElementById("op1").value;
    var op2=document.getElementById("op2").value;
    var resultado = parseInt(op1)+parseInt(op2);
    document.getElementById("resultado").innerHTML=resultado;

}