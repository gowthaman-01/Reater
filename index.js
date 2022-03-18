import { clear, save } from "./functions.js";
import { inputButton, clearButton } from "./constants.js"

inputButton.addEventListener("click", save);
clearButton.addEventListener("click", clear)