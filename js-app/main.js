const mainContainer = document.querySelector("#container")
const beanFormContainer = document.querySelector("#bean-form__container");

const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beanVarieties => {
            mainContainer.innerHTML = displayBeanVarieties(beanVarieties);
        }  
    )
});

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

function displayBeanVarieties(beanVarietyArr) {
    return `
        <h3>Our Beans:</h3>
        <ul>
            ${beanVarietyArr.map(
                (bv) => {
                    return `
                    <li class="bean-variety">
                        ${bv.name} (${bv.region})
                    </li>`
                }
            ).join("")}
        </ul>`
}