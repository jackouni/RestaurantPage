import manImg from "./assets/man-img.jpeg";
import waiterImg from "./assets/waiter-img.jpeg";
import womanImg from "./assets/woman-img.jpeg";

import {
	contentCardComponent,
	paragraphComponent,
	sectionComponent,
} from "./components";

function contactContent(role, contactNumber, imgURL) {
	const contactContainer = document.createElement("div");
	contactContainer.classList.add("contact-container");
	const contactInfo = document.createElement("div");
	const imgContainer = document.createElement("div");
	const imgTag = new Image();
	imgTag.src = imgURL;

	contactInfo.innerText = `${role} || ${contactNumber}`;

	imgContainer.append(imgTag);
	imgContainer.classList.add("img-container");

	contactContainer.append(contactInfo);
	contactContainer.append(imgContainer);

	return contactContainer;
}

// Loads Entire Contact Page
function loadContactPage() {
	const firstContact = document.getElementById("Mama");
	const secondContact = document.getElementById("Pops");
	const thirdContact = document.getElementById("Junior");

	firstContact.append(contactContent("Master Chef", "555-555-555", womanImg));
	secondContact.append(contactContent("Manager", "123-456-789", manImg));
	thirdContact.append(contactContent("Waiter", "515-151-515", waiterImg));
}

export { loadContactPage };
