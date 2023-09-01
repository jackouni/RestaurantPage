import {
	contentCardComponent,
	paragraphComponent,
	sectionComponent,
} from "./components";

const about =
	"Welcome to Rusty-Runts! Here we serve up the best home cookin' in all of Ontario. After 15 years in the business of serving up breakfast, we can assure you the our: world-famous pancakes, waffles and pastries ; top rated, 5 star hospitality ; and vibes will not dissapoint.";

const directions = "Road 123, Toronto, Ontario";

const hours = [
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

function hoursContainerComponent() {
	let hoursContainer = document.createElement("div");
	hoursContainer.id = "hours-container";

	for (let i = 0; i < hours.length; i++) {
		let hoursItem = paragraphComponent(
			`👉 ${hours[i].days} || ${hours[i].hours}`
		);
		hoursItem.classList.add("hours-item");
		hoursContainer.append(hoursItem);
	}

	return hoursContainer;
}

// Loads Entire Homepage
function loadHomePage() {
	let homeCard = contentCardComponent("Welcom to Rusty-Runts!");
	let firstSection = sectionComponent("Who Are We?");
	let secondSection = sectionComponent("Hours");
	let thirdSection = sectionComponent("Directions");

	firstSection.append(paragraphComponent(about));
	secondSection.append(hoursContainerComponent());
	thirdSection.append(paragraphComponent(directions));

	homeCard.append(firstSection);
	homeCard.append(secondSection);
	homeCard.append(thirdSection);

	return homeCard;
}

export { loadHomePage };
