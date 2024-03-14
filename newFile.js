pTextoAIncriptar1.addEventListener("click", function () {
  var texArea1 = document.createElement("textarea");
  texArea1.value = pTextoAIncriptar1.textContent;
  pTextoAIncriptar1.textContent = "";
  pTextoAIncriptar1.parentNode.replaceChild(texArea1, pTextoAIncriptar1);
  texArea1.addEventListener("click", function () {
    this.value = "";
    this.removeEventListener("click", arguments.callee);

    bIncriptar.addEventListener("click", function () {
      let palabraB = "a";
      let palabrac = "none";
      if (pTextoAIncriptar1.includes(palabraB)) {
        let textomodificado = pTextoAIncriptar1.replace(
            new RegExp(palabraB, "none"),
            palabrac
          ),
          pTextoAIncriptar1,
          value = textomodificado;
      }

      if ((pTextoAIncriptar1.value == "a").replace == textoCambiado) {
        console.log(`texto cambiado por ${pTextoAIncriptar1.value}`);
      }
    });
  });
});
