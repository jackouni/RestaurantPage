// Event listener function
import { whatPageToLoad } from "./index.js";

// Creates the Header
function headerComponent(...buttonNames) {
	const header = document.createElement("header");

	for (let i = 0; i < buttonNames.length; i++) {
		let button = document.createElement("button");

		button.innerText = buttonNames[i];
		button.id = `${buttonNames[i].split(" ").join("-")}-btn`;
		button.addEventListener("click", whatPageToLoad);
		header.append(button);
	}

	return header;
}

function loadHeader() {
	return headerComponent("Home", "Menu", "Contact Us");
}

export { loadHeader };
