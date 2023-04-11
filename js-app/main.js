const beanVarietyUrl = "https://localhost:5001/api/beanvariety/";
const coffeeUrl = "https://localhost:5001/api/coffee/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllResourcesAt(beanVarietyUrl)
        .then(beanVarieties => {
            console.log(beanVarieties);
        })
    getAllResourcesAt(coffeeUrl)
        .then(coffees => {
            console.log(coffees);
        })
});

function getAllResourcesAt(url) {
    return fetch(url).then(res => res.json());
}