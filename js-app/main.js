const url = "https://localhost:5001/api/beanvariety/";

const button = document.querySelector("#run-button");
button.addEventListener("click", () => {
    getAllBeanVarieties()
        .then(beans => {

            // make a header
            const newHeader = document.createElement("h3");
            const headerContent = document.createTextNode("Our Beans:");
            newHeader.appendChild(headerContent);

            // insert the header before the 'coffee' div
            const currentDiv = document.getElementById("coffee");
            document.body.insertBefore(newHeader, currentDiv);

            // display the beans as a 'list' of divs
            beans.map(bean => {
                const newDiv = document.createElement("div");
                const content = document.createTextNode(`${bean.name}`);
                newDiv.appendChild(content);
                document.body.insertBefore(newDiv, currentDiv)
            })
        })
    }
);

function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}
