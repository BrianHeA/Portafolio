const entrada = document.querySelector(".entrada");
const salida = document.querySelector(".salida");
const copia = document.querySelector(".copiar");
copiar.style.display = "none"

function validarTexto(){
    let textoEntrante = document.querySelector(".entrada").value;
    let validaror = textoEntrante.match(/^[a-z]*$/);

    if(!validaror || validaror === 0){
        alert("Solo son permitidas letras minusculas y sin acentos")
        location.reload();
        return true;
    }  
}

function botonEncriptar(){
    if(!validarTexto()){
        const textoEncriptado = encriptar(entrada.value)
        salida.value = textoEncriptado
        salida.style.backgroundImage = "none"
        entrada.value = ""
        copiar.style.display = "block"
    }
}

// Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`

function encriptar (stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replace(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function botonDesencriptar(){
    const textoEncriptado = desencriptar(entrada.value)
    salida.value = textoEncriptado
    entrada.value = "";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiar(){
    salida.select();
    navigator.clipboard.writeText(salida.value)
    salida.value = "";
    alert("Texto Copiado")
}