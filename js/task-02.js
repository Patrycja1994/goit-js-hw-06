const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
 

const allElement = document.querySelector("#ingredients");

const newElements = ingredients.map((ingredient) => {
  const newElement = document.createElement("li");
  newElement.textContent = ingredient;
  newElement.classList.add("item");
  return newElement;
});

allElement.prepend(...newElements);