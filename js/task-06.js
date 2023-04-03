// pobieramy elementy z DOM
const input = document.querySelector("#validation-input");

//nasłuchiwanie zdarzenie blur na input
input.addEventListener("blur", () => {
  //pobieram wartość atrybutu data-length z input
  const dataLength = input.dataset.length;
  // pobieram długość wprowadzonej wartości do input
  const inputLength = input.value.length;

  //porównanie inputLength z dataLength
  if (inputLength === Number(dataLength)) {
    //jeśli są równe usuń klasę invalid i dodaj klasę valid do elementu input
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
  //w przecinym wypadku usuń klasę valid i dodadj klasę invalid do elementu input
  else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
