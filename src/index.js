import "./styles/main.scss";
import { loadHomePage } from "./homepage";
import { loadHeader, loadFooter } from "./header-footer";
import { menuCardComponents, menuSectionComponents } from "./menu";

const contactSectionNames = ["Contact Us", "Mama", "Pops", "Junior"];

const content = document.getElementById("content");

function renderHeader() {
	content.append(loadHeader());
}

function renderFooter() {
	content.append(loadFooter());
}

function renderHomePage() {
	content.append(loadHomePage());
}

renderHeader();
renderHomePage();
renderFooter();
