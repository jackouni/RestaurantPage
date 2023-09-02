import manImg from "./assets/man-img.jpeg";
import waiterImg from "./assets/waiter-img.jpeg";
import womanImg from "./assets/woman-img.jpeg";

import { contentCardComponent, sectionComponent } from "./components";

const contacts = [
	{
		name: "Maman",
		role: "Chef",
		number: "555-555-555",
		img: womanImg,
	},
	{
		name: "Papa",
		role: "Manager",
		number: "123-456-789",
		img: manImg,
	},
	{
		name: "Junior",
		role: "Waiter",
		number: "987-654-321",
		img: waiterImg,
	},
];

function contactContainerComponent(name, role, number, img) {
	let section = sectionComponent(`${name} - ${role} \n (${number})`);
	let imgContainer = document.createElement("div");

	imgContainer.id = `${name}-img-container`;

	let newImg = new Image();
	newImg.src = img;

	imgContainer.append(newImg);
	section.append(imgContainer);

	return section;
}

// Loads Entire Contact Page
function loadContactPage() {
	let contactCard = contentCardComponent("Contact Us!");

	for (let i = 0; i < contacts.length; i++) {
		contactCard.append(
			contactContainerComponent(
				contacts[i].name,
				contacts[i].role,
				contacts[i].number,
				contacts[i].img
			)
		);
	}

	return contactCard;
}

export { loadContactPage };
