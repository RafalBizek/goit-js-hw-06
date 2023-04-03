const countCategories = categories.children.length;

console.log(`Number of categories: ${countCategories}`);

// =================================================

const firstHeading = document.querySelectorAll("h2")[0].innerText;

console.log(`Category: ${firstHeading}`);

const body = document.body;

const firstChildBody = body.firstElementChild;

const listCategories = firstChildBody.nextElementSibling;

//==================================================

const firstElementCategoriesList = listCategories.firstElementChild;

const firstNestedListInCategoriesList = firstElementCategoriesList.children[1];

const firstElementsListInCategoriesList =
  firstNestedListInCategoriesList.children.length;

console.log(`Elements: ${firstElementsListInCategoriesList}`);

// =================================================

const secondHeading = document.querySelectorAll("h2")[1].innerText;

console.log(`Category: ${secondHeading}`);

const secondElementCategoriesList = listCategories.childNodes[3];

const secondNestedListInCategoriesList =
  secondElementCategoriesList.children[1];

const secondElementsListInCategoriesList =
  secondNestedListInCategoriesList.children.length;

console.log(`Elements: ${secondElementsListInCategoriesList}`);

// =================================================

const thirdHeading = document.querySelectorAll("h2")[2].innerText;

console.log(`Category: ${thirdHeading}`);

const thirdElementCategoriesList = listCategories.childNodes[5];

const thirdNestedListInCategoriesList = thirdElementCategoriesList.children[1];

const thirdElementsListInCategoriesList =
  thirdNestedListInCategoriesList.children.length;

console.log(`Elements: ${thirdElementsListInCategoriesList}`);
