import { clear, save, tab } from "./functions.js";
import { inputButton, clearButton, tabButton } from "./constants.js"

inputButton.addEventListener("click", save);
clearButton.addEventListener("click", clear)
tabButton.addEventListener("click", tab)