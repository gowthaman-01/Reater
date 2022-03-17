import { inputWebsite, outputWebsites } from "./constants.js";

let myWebsites = [];
let validInput = false;

export const save = () => {
    myWebsites.push(inputWebsite.value);
        output();
        if (validInput){
            inputWebsite.value = "";
        }
}

export const output = () => {
    let htmlData = "";
    for (let i = 0; i < myWebsites.length; ++i) {
        if (myWebsites[i] !== "" && myWebsites[i] !== "Enter URL that you want to save"){
            htmlData += `
            <li> 
                <a href='${myWebsites[i]}' target ='_blank'>
                    ${myWebsites[i]} 
                </a>
            </li>
            `
            validInput = true; 
        }        
    }
    outputWebsites.innerHTML = htmlData;
}


 