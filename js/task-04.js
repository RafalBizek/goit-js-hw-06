// pobieramy elementy z DOM
const counter = document.getElementById("value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

// ustawiamy początkową wartość licznika
let counterValue = 0;
counter.textContent = counterValue;

// dodajemy listener do przycisku "+1"
incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});

// dodajemy listener do przycisku "-1"
decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
