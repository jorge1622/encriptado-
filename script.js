var pTextoAIncriptar1 = document.querySelector(".pTextoAIncriptar");
var resetImagenHeader = document.querySelector(".imagenHeader");
var bIncriptar = document.querySelector(".bIncriptar");
var mensajeIncriptado = document.querySelector(".mensajeInDes");
var bCopiar = document.querySelector(".bcopiar");

var bDesencriptar = document.querySelector(".bDesencriptar");
//evento para reiniciar la pagina desde la imagen de alura Latam //
resetImagenHeader.addEventListener("click", () => {
  location.reload();
});
// creacion de evento para reemplazar un parrafo por un textArea //
pTextoAIncriptar1.addEventListener("click", function () {
  var texArea1 = document.createElement("textarea");
  pTextoAIncriptar1.parentNode.replaceChild(texArea1, pTextoAIncriptar1);
  texArea1.addEventListener("click", function () {
    this.value = "";
    bIncriptar.addEventListener("click", function () {
      texArea1.value = pTextoAIncriptar1.textContent;
      bCopiar.innerHTML = "Copiar";
    });
    bDesencriptar.addEventListener("click", function () {
      texArea1.value = pTextoAIncriptar1.textContent;
      bCopiar.innerHTML = "Copiar";
    });
  });
  // creacion de evento para reemplazar un parrafo por un textArea //
  bIncriptar.addEventListener("click", function () {
    var texArea2 = document.createElement("textarea");
    texArea2.classList.add("textarea2");
    mensajeIncriptado.parentNode.replaceChildren(texArea2, mensajeIncriptado);
    texArea2.readOnly = true;
    texArea2.value = mensajeIncriptado.textContent =
      "dar clikc para ver tu mensaje Encriptado";
    texArea2.addEventListener("click", function () {
      // para que nos muestre el texto desemcriptado en el textarea creado
      this.value = copiaTexto;
    });
    bCopiar.addEventListener("click", function () {
      texArea2.select();
      document.execCommand("copy");
      bCopiar.innerHTML = "Copiado";
      //console.log(`texto a copiar ${copiaTexto}`);
    });
    /*variables constantes ya que nunca se va a modificar  */
    const letrasAContar = ["e", "i", "a", "o", "u"];
    const textosCambio = ["enter", "imer", "ai", "ober", "ufat"];
    /* creacon de varaiable para para tomar el texto ingresado del usuario 
    y asignarlo en el texArea1 creado */

    var textoIngresado = texArea1.value;
    //realizar copia para modificar esta
    let copiaTexto = textoIngresado.substring();
    //console.log(` la copia es  ${textoIngresado}`);
    //ciclo for para iterar sobre el array letrasAContar
    for (let i = 0; i < letrasAContar.length; i++) {
      let letraAContar = letrasAContar[i];
      let textoCambio = textosCambio[i];
      /* en este linea si la copia que realizamos  incluye las letreas del array
     letrasAContar  */
      if (copiaTexto.includes(letraAContar)) {
        //si la copia incluye esta letras las reemplazamos por el otro array creado textoCambi
        copiaTexto = copiaTexto.replaceAll(letraAContar, textoCambio);
      }
    }

    console.log(`texto cambiado por ${copiaTexto} `);
  });

  bDesencriptar.addEventListener("click", function () {
    var texArea2 = document.createElement("textarea");
    mensajeIncriptado.parentNode.replaceChildren(texArea2, mensajeIncriptado);
    texArea2.classList.add("textarea2");
    texArea2.readOnly = true;
    texArea2.value = mensajeIncriptado.textContent =
      "dar clikc para ver tu mesaje Desemcriptado";
    texArea2.addEventListener("click", function () {
      // para que nos muestre el texto desemcriptado en el textarea creado
      this.value = copiaTexto;
    });
    bCopiar.addEventListener("click", function () {
      texArea2.select();
      document.execCommand("copy");
      bCopiar.innerHTML = "Copiado";

      //alert("texto copiado");
      //console.log(`texto a copiar ${copiaTexto}`);
    });

    /*variables constantes ya que nunca se va a modificar  */
    const pContar = ["enter", "imer", "ai", "ober", "imes", "ufat"];
    const pcambiar = ["e", "i", "a", "o", "i", "u"];
    /* creacon de varaiable para para tomar el texto ingresado del usuario 
    y asignarlo en el texArea1 creado */
    var textoIngresado1 = texArea1.value;
    //realizar copia para modificar esta
    let copiaTexto = textoIngresado1.substring();
    //console.log(`el parrafo original es ${textoIngresado1} `);
    for (let i = 0; i < pContar.length; i++) {
      let pContars = pContar[i];
      let pCabiars = pcambiar[i];
      /* en este linea si la copia que realizamos  incluye las letreas del array
     letrasAContar  */
      if (copiaTexto.includes(pContars)) {
        copiaTexto = copiaTexto.replaceAll(pContars, pCabiars);
        //si la copia incluye esta letras las reemplazamos por el otro array creado textoCambi
      }
      //console.log(`texto cambiado por el parrafo ${copiaTexto} `);
    }
  });
});
