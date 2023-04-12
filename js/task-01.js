const allEl = document.querySelectorAll('.item');
const listOfEl = allEl.length;
console.log(`Number of categories: ${listOfEl}`);


allEl.forEach((element) => {
    let elementTitle = element.querySelector("h2").textContent;
    let elementNumbes = element.querySelectorAll('li');
    console.log(
        `Category: ${elementTitle};
        Elements: ${elementNumbes.length}`
    );
});

