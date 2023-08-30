import "./styles/main.scss";

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

// <---------------> //

// Creates a content-card with multiple sections, with sub-titles
function contentCardComponent(...sectionNames) {
	// Creates Content-Card:
	const contentCard = document.createElement("div");
	contentCard.id = "content-card";

	for (let i = 0; i < sectionNames.length; i++) {
		// Creates Section:
		let section = document.createElement("section");
		section.id = sectionNames[i].split(" ").join("");

		// Creates Subtitle for Section:
		let subTitle = document.createElement("h2");
		subTitle.classList.add("sub-title");
		subTitle.innerText = sectionNames[i];
		section.append(subTitle);

		contentCard.append(section);
	}

	return contentCard;
}

// <---------------> //

// <-----HOME PAGE-----> //

content.append(
	contentCardComponent("Rusty-Runts", "Who Are We?", "Hours", "Directions")
);

// Who Are We Section:
const whoAreWeSection = document.getElementById("WhoAreWe?");

function whoAreWeContent() {
	let paragraph = document.createElement("p");
	paragraph.innerText =
		"Welcome to Rusty-Runts! Here we serve up the best home cookin' in all of Ontario. After 15 years in the business of serving up breakfast, we can assure you the our: world-famous pancakes, waffles and pastries ; top rated, 5 star hospitality ; and vibes will not dissapoint.";

	return paragraph;
}

whoAreWeSection.append(whoAreWeContent());

// Hours Section:
const hoursSection = document.getElementById("Hours");

let hours = {
	weekdays: {
		days: ["Monday", "Tuesday", "Wednesday", "Thursday"],
		hours: "9:30AM - 8PM",
	},
	fridays: {
		days: ["Friday"],
		hours: "9:30AM - 1:30PM",
	},
	weekends: {
		days: ["Saturday", "Sunday"],
		hours: "Closed",
	},
};
