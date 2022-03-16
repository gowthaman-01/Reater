const inputButton = document.getElementById("input-button")
let myWebsites = [];
const inputWebsite = document.getElementById("input-element");
const save = () => {
    myWebsites.push(inputWebsite.value);
    console.log(myWebsites);
}

inputButton.addEventListener("click", save)


