let textArea = document.querySelector('.text-area');
let mensagem = document.querySelector('.mensagem');

function btnEcriptar(){
    let textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = ""
}


function encriptar(stringEncriptada){
    let matrizCodigos = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigos.length; i++){
        if(stringEncriptada.includes(matrizCodigos[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigos[i][0], matrizCodigos[i][1]);
        }
    }
        return stringEncriptada;
}






function btnDesencriptar(){
    let textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = ""
}


function desencriptar(stringDesencriptada){
    let matrizCodigos = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigos.length; i++){
        if(stringDesencriptada.includes(matrizCodigos[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigos[i][1], matrizCodigos[i][0]);
        }
    }
        return stringDesencriptada;
}

function copiaTexto(){
    let TextoCopiado = document.querySelector('.mensagem');
    TextoCopiado.select();
    TextoCopiado.setSelectionRange(0, 99999);
    document.execCommand('copy');
    TextoCopiado.value = ""
    alert('texto copiado')
}