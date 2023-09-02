import {
	contentCardComponent,
	paragraphComponent,
	sectionComponent,
} from "./components";

const about =
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque consectetur augue velit, eget elementum leo suscipit eget. Mauris viverra condimentum lacus, luctus sodales leo interdum porta. Aenean dignissim elit sed mauris efficitur semper. Sed viverra tempor diam eu fringilla. Maecenas massa erat, pulvinar et pellentesque quis, tincidunt vel dolor.";

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
	let homeCard = contentCardComponent("Welcome to Rusty-Runts!");
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
