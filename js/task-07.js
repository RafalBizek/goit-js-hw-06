// pobieram element z DOM
// fontSizeControl to element suwaka
const fontSizeControl = document.querySelector("#font-size-control");
// text to element wyświetlający text
const text = document.querySelector("#text");

//dodanie nasłuchowania zdarzeń na elemencie fontSizeControl
fontSizeControl.addEventListener("input", () => {
  //W ciele funkcja pobiera akrualną wartość suwaka i za
  // pomocą value przypisuje do zmiennej fontSize
  const fontSize = fontSizeControl.value;
  // do elementu text przypisywany jest styl zmiany czcionki
  text.style.fontSize = `${fontSizeControl.value}px`;
});
