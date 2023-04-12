const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const newItems = document.createElement("li");
  newItems.textContent = ingredient;
  list.append(newItems);
});


