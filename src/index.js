import "./styles/main.scss";
import { loadHomePage } from "./homepage";
import { loadHeader } from "./header-footer";
import { loadMenuPage } from "./menu";
import { loadContactPage } from "./contact-us";
import { remove } from "lodash";

const content = document.getElementById("content");

function appendHeader() {
	content.append(loadHeader());
}

function appendHomePage() {
	content.append(loadHomePage());
}

function appendContactPage() {
	content.append(loadContactPage());
}

function appendMenuPage() {
	content.append(loadMenuPage());
}

function removePages() {
	const containers = document.getElementsByClassName("content-card");
	while (containers.length > 0) {
		containers[0].remove();
	}
}

function whatPageToLoad(event) {
	console.log("Event", event);
	removePages();
	console.log("Pages removed...");
	if (event.target.id === "Home-btn") {
		console.log("Loading Home Page");
		appendHomePage();
	} else if (event.target.id === "Menu-btn") {
		console.log("Loading Menu Page");
		appendMenuPage();
	} else if (event.target.id === "Contact-Us-btn") {
		console.log("Loading Contact Page");
		appendContactPage();
	}
}

appendHeader();
appendMenuPage();

export { whatPageToLoad };
