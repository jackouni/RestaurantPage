import _ from "lodash";

// Creates a Content-Card with a Title
function contentCardComponent(cardTitle) {
	const contentCard = document.createElement("div");
	contentCard.classList.add("content-card");
	contentCard.id = `${cardTitle}-card`;

	const title = document.createElement("h2");
	title.classList.add("content-title");
	title.innerText = _.upperFirst(cardTitle);

	contentCard.append(title);

	return contentCard;
}

function sectionComponent(sectionTitle) {
	let section = document.createElement("section");
	let title = document.createElement("h3");

	title.innerText = _.upperFirst(sectionTitle);

	section.append(title);

	return section;
}

function paragraphComponent(text) {
	let paragraph = document.createElement("p");
	paragraph.innerText = _.upperFirst(text);

	return paragraph;
}

export { contentCardComponent, paragraphComponent, sectionComponent };
