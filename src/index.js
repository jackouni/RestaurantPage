import "./styles/main.scss";
import { loadHomePage } from "./homepage";
import { loadHeader, loadFooter } from "./header-footer";
import { loadContactPage } from "./contact-us";
import { contentCardComponent } from "./components";
import { menuCardComponents, menuSectionComponents } from "./menu";

const homeSectionNames = ["Rusty-Runts", "Who Are We?", "Hours", "Directions"];
const contactSectionNames = ["Contact Us", "Mama", "Pops", "Junior"];

/* // Creates a content-card with multiple sections, with sub-titles (this is a UI pattern for each page).
function contentCardComponent(sectionNames) {
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
 */
function renderHomePage() {
	loadHeader();
	content.append(contentCardComponent(homeSectionNames));
	loadHomePage();
	loadFooter();
}

function renderContactPage() {
	loadHeader();
	content.append(contentCardComponent(contactSectionNames));
	loadContactPage();
	loadFooter();
}

content.append(contentCardComponent("Mains"));
