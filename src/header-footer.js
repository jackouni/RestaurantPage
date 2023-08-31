const content = document.getElementById("content");

// Creates the Header
function headerComponent(...titleNames) {
	const header = document.createElement("header");

	for (let i = 0; i < titleNames.length; i++) {
		let title = document.createElement("h1");
		title.innerText = titleNames[i];
		header.append(title);
	}

	return header;
}

function loadHeader() {
	content.append(headerComponent("Home", "Menu", "Contact Us"));
}

function footerComponent() {
	const footer = document.createElement("footer");
	footer.innerText = "Site Created By: Jack Sebben";
	return footer;
}

function loadFooter() {
	content.append(footerComponent());
}

export { loadHeader, loadFooter };
