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

function postBeanToAPI(bean) {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bean)
    };
    return fetch(url, fetchOptions);
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

function addBeanForm() {
    const html = `
        <h3>Add a New Bean:</h3>
        <div class="field">
            <label class="label" for="bean-name">Name</label>
            <input type="text" name="bean-name" />
        </div>
        <div class="field">
            <label class="label" for="bean-region">Region</label>
            <input type="text" name="bean-region" />
        </div>
        <div class="field">
            <label class="label" for="bean-notes">Notes</label>
            <input type="text" name="bean-notes" />
        </div>
        <button class="button" id="submit-bean">Add Bean</button>`;

    return html;
}

beanFormContainer.innerHTML = addBeanForm();
const addBeanButton = document.querySelector("#submit-bean");

addBeanButton.addEventListener("click", clickEvt => {
    if (clickEvt.target.id == "submit-bean") {
        // get the user input fields
        const beanName = document.querySelector("input[name='bean-name']").value;
        const beanRegion = document.querySelector("input[name='bean-region']").value;
        const beanNotes = document.querySelector("input[name='bean-notes']").value;
        // make the new BeanVariety obj
        const newBeanObj = {
            Name: beanName,
            Region: beanRegion,
            Notes: beanNotes
        };

        postBeanToAPI(newBeanObj);
    }
})