// pobieram elementy z DOM
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

//pobieram wartość pola name-input
nameInput.addEventListener("input", () => {
  // tutaj pobranę wartość przypisuję do zmiennej name
  const name = nameInput.value;
  //tutaj sprawdzana jest zawartość pola name
  if (name === "") {
    //   jeśli jest pusta jest ustawiana wartość Anonmous
    nameOutput.textContent = "Anonymous";
    // w innym przypadku wartość, która jest wpisana
    // przez użytkownika
  } else {
    nameOutput.textContent = name;
  }
});
