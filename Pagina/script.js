
const claveInput = document.getElementById("claveInput");
const textoInput = document.getElementById("textoInput");
const textoEncriptadoOutput = document.getElementById("textoEncriptadoOutput");
const textoOpcion1 = document.getElementById("textoOpcion1");
const contenedorTexto = document.getElementById("contenedorTexto");
const contenedorClave = document.getElementById("contenedorClave");



claveInput.addEventListener("input", encriptarTexto);
textoInput.addEventListener("input", encriptarTexto);


function encriptarTexto() {
    
    const clave = claveInput.value;
    const texto = textoInput.value;

   
    if (clave && texto) {
       
        const textoEncriptado = encriptar(clave, texto);
        
        
        textoEncriptadoOutput.value = textoEncriptado;
    } else {
     
        textoEncriptadoOutput.value = "";
    }
}


function mostrarTextoAdicional() {
    if (selectOpciones.value === "opcion1") {
        textoOpcion1.style.display = "block"; 
    } else {
        textoOpcion1.style.display = "none"; 
    }
}


function encriptar(clave, texto) {
   
   
    return clave + texto; 
}

const selectOpciones = document.getElementById("opciones");
const contenedorCuadrosTexto = document.getElementById("contenedorCuadrosTexto");



selectOpciones.addEventListener("change", function() {
    if (selectOpciones.value === "opcion1") {
        contenedorTexto.style.display = "block"; 
        contenedorClave.style.display = "block"; 
    } else {
        contenedorTexto.style.display = "none"; 
        contenedorClave.style.display = "none"; 
    }
});


mostrarTextoAdicional();


selectOpciones.addEventListener("change", mostrarTextoAdicional);