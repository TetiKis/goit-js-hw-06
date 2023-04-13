const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector("#ingredients");
const liArray = [];
ingredients.forEach((ingredient) => {
  const newItems = document.createElement("li");
  newItems.className = 'item';
  newItems.textContent = ingredient;
  liArray.push(newItems);
});

  list.append(...liArray);
