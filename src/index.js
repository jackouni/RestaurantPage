import "./styles/main.scss";

import {
	directionsContent,
	hoursContent,
	whoAreWeContent,
	contentCardComponent,
} from "./homepage";

const content = document.getElementById("content");

function headerComponent(...titleNames) {
	const header = document.createElement("header");

	for (let i = 0; i < titleNames.length; i++) {
		let title = document.createElement("h1");
		title.innerText = titleNames[i];
		header.append(title);
	}

	return header;
}

content.append(headerComponent("Home", "Menu", "About"));

// <-----HOME PAGE-----> //

content.append(
	contentCardComponent("Rusty-Runts", "Who Are We?", "Hours", "Directions")
);

const whoAreWeSection = document.getElementById("WhoAreWe?");
const hoursSection = document.getElementById("Hours");
const directionsSection = document.getElementById("Directions");

whoAreWeSection.append(whoAreWeContent());
hoursSection.append(hoursContent());
directionsSection.append(directionsContent());
