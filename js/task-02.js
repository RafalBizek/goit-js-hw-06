const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");

for (let i = 0; i < ingredients.length; i++) {
  // Create the list element
  const addItem = document.createElement("li");

  // Added classes for element list
  addItem.classList.add("item");

  // Set contents
  addItem.appendChild(document.createTextNode(ingredients[i]));

  // add it to the list
  list.appendChild(addItem);
}
