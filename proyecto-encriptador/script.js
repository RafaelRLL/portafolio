function encriptar() {
    var texto = document.getElementById("inputText").value;
    var textoEncriptado = "";
    
    for (var i = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            textoEncriptado += String.fromCharCode((charCode - 65 + 3) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            textoEncriptado += String.fromCharCode((charCode - 97 + 3) % 26 + 97);
        } else {
            textoEncriptado += texto.charAt(i);
        }
    }
    
    document.getElementById("outputText").value = textoEncriptado;
}

function desencriptar() {
    var texto = document.getElementById("inputText").value;
    var textoDesencriptado = "";
    
    for (var i = 0; i < texto.length; i++) {
        var charCode = texto.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) {
            textoDesencriptado += String.fromCharCode((charCode - 65 - 3 + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            textoDesencriptado += String.fromCharCode((charCode - 97 - 3 + 26) % 26 + 97);
        } else {
            textoDesencriptado += texto.charAt(i);
        }
    }
    
    document.getElementById("outputText").value = textoDesencriptado;
}
