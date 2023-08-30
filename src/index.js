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
		// Creates a Section for Content Card:
		let section = document.createElement("section");
		section.id = sectionNames[i].split(" ").join("");

		// Creates a Subtitle for Section:
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

let hours = [
	{
		days: "Monday - Thursday",
		hours: "9:30AM - 8PM",
	},
	{
		days: "Friday",
		hours: "9:30AM - 1:30PM",
	},
	{
		days: "Saturday & Sunday",
		hours: "Closed",
	},
];

function hoursContent() {
	let hoursContainer = document.createElement("ul");

	for (let i = 0; i < hours.length; i++) {
		let hoursItem = document.createElement("li");
		hoursItem.classList.add("hours-Item");
		hoursItem.innerText = "👉 " + `${hours[i].days} || ${hours[i].hours}`;
		hoursContainer.append(hoursItem);
	}

	return hoursContainer;
}

hoursSection.append(hoursContent());

// Directions Section:
const directionsSection = document.getElementById("Directions");

function directionsContent() {
	let paragraph = document.createElement("p");
	paragraph.innerText = "Road 123, Toronto, Ontario";

	return paragraph;
}

directionsSection.append(directionsContent());
