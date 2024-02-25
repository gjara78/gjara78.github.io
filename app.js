
const textoDesencriptado = document.getElementById("mensaje")


function encriptar() {
    let vowels = ['a', 'e', 'i', 'o', 'u'];  //Vocales
    let vowelsConv = ['ai', 'enter', 'imos', 'ober', 'ufat']
    const textoEncriptado = document.getElementById("mensaje").value;
    let mensaje = textoEncriptado.toLowerCase();

    mensaje = mensaje.split("").map((char, i) => {
        if (vowels.includes(char)) {
            let letra = char
            let indexado = vowels.indexOf(letra)
            return vowelsConv[indexado];
        } else {
            return char; 
        }
    }).join("");

    document.getElementById("text_area").innerHTML = mensaje;
}




function desencriptar() {
    let vowelsConv = ['ai', 'enter', 'imos', 'ober', 'ufat'];
    let vowels = 'aeiou';  
    const textoDesencriptado = document.getElementById("mensaje").value;
    let mensaje = textoDesencriptado.toLowerCase()
    let mensaje1 = mensaje.replace(/(ai|enter|imos|ober|ufat)/g, (match) => {
        const index = vowelsConv.indexOf(match);
        return vowels[index];
    });

    document.getElementById("text_area").value = mensaje1;
}



function copiar() {
    const texto = document.getElementById('text_area').value;
    document.getElementById("mensaje").value = "";
    try {
        navigator.clipboard.writeText(texto);
        console.log("Text copied to clipboard");
    } catch (err) {
        console.error("Failed to copy text to clipboard", err);
    }
    document.getElementById('text_area').value = ""
}