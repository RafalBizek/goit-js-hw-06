//pobranie, który zawiera kontole do tworzenia i usuwania boxów
const controls = document.querySelector("#controls");

// pobranie input z kontrolkami do ustawiania liczby boxów
const input = controls.querySelector('input[type="number"]');

// pobranie przycisków do tworzenia i usuwania boksów
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");

// pobranie elementu, który będzie zawierał boksy
const boxesContainer = document.querySelector("#boxes");

// nasłuchowanie zdarzenia po klknięciu przycisku createBtn
// zostanie wywołana funkcja createBoxes z ich liczbą z input
createBtn.addEventListener("click", () => {
  createBoxes(input.value);
});
// nasłuchowanie zdarzenia na przycisku  destroy do susunięcia boxów
destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});
// funkcja, która tworzy określoną liczbę boxów, ustawia ich
// wielkość i kolor
function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

// funkcja, która usuwa boxy
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
