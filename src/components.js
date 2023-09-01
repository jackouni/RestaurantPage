import _ from "lodash";

// Creates a content-card with Title
function contentCardComponent(cardTitle) {
	const contentCard = document.createElement("div");
	contentCard.classList.add("content-card");

	const title = document.createElement("h2");
	title.classList.add("content-title");
	title.innerText = _.upperFirst(cardTitle);

	contentCard.append(title);

	return contentCard;
}

export { contentCardComponent };
