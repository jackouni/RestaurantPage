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

// Creates a content-card with multiple sections
function contentCardComponent(sectionsAmount) {
	const contentCard = document.createElement("div");
	contentCard.id = "content-card";

	for (let i = 0; i < sectionsAmount; i++) {
		let section = document.createElement("section");
		contentCard.append(section);
	}
	return contentCard;
}

// <---------------> //

//Home Page

content.append(contentCardComponent(4));

// Adds the Subtitles to each section of content-card
function appendSectionTitles(...sectionNames) {
	const allSections = document.getElementById("content-card").children;

	for (let i = 0; i < allSections.length; i++) {
		let subTitle = document.createElement("h2");
		subTitle.classList.add("sub-title");
		subTitle.innerText = sectionNames[i];
		allSections[i].append(subTitle);
	}
}

appendSectionTitles("Rusty-Runts", "Who Are We?", "Hours", "Directions");
