const button = document.querySelector(".change-color"); //pobranie klasy przycisku
const colorSpan = document.querySelector(".color"); //pobranie klasy elementu span
const body = document.querySelector("body"); //pobranie elementu body
// dodanie nasłuchiwania przycisku
button.addEventListener("click", () => {
  // w ciele funkcji wywołana jest funkcja getRandomColor i zapisana jest
  // do zmiennej newColor
  const newColor = getRandomHexColor();
  // dla body ustawiany jest losowy kolor tła
  body.style.backgroundColor = newColor;
  // w elemencie span jest wstawiana nazwa tego koloru w formacie HEX
  colorSpan.textContent = newColor;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
