function criptografar(){
    let texto = document.querySelector('input').value; 
    if (verificarTexto(texto))
    {
        alert ("Aceito apenas letras minúsculas e sem acentos");
    }    
    else{   
    let resultado = texto.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
    mudarTexto(resultado);    
    }
}
function descriptografar(){
    let texto = document.querySelector('input').value;
    if (verificarTexto(texto))
    {
        alert ("Aceito apenas letras minúsculas e sem acentos");
    }    
    else{ 
    let resultado = texto.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
    mudarTexto(resultado); 
    }  
}
function mudarTexto(resultado){
    let texto = document.getElementById('campo__criptografia');
    texto.innerHTML = resultado;    
}

function verificarTexto(texto){
    let regex = /\W|_/;
    let textoUpper = texto.includes("A", "E", "I", "O", "U") || regex.test(texto);   
    return textoUpper;
}