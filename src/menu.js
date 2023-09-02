import omeletteImg from "./assets/omelette-img.jpeg";
import pancakesImg from "./assets/pancakes-img.jpeg";
import wafflesImg from "./assets/waffles-img.jpeg";
import teaImg from "./assets/tea-img.jpeg";
import lemonadeImg from "./assets/lemonade-img.jpeg";
import coffeeImg from "./assets/coffee-img.jpeg";
import cakeImg from "./assets/cake-img.jpeg";
import brownieImg from "./assets/brownie-img.jpeg";
import prettypattyImg from "./assets/prettypatty-img.jpeg";

import _ from "lodash";
import {
	contentCardComponent,
	paragraphComponent,
	sectionComponent,
} from "./components";

const menu = {
	mains: [
		{
			name: "Top-Notch Omelette",
			price: 21,
			img: omeletteImg,
			desc: "this is a description",
		},
		{
			name: "Fluffy Pancakes",
			price: 20,
			img: pancakesImg,
			desc: "this is a description",
		},
		{
			name: "Belgian Waffles",
			price: 19,
			img: wafflesImg,
			desc: "this is a description",
		},
	],
	drinks: [
		{
			name: "Mint-Lemonade",
			price: 6,
			img: lemonadeImg,
			desc: "this is a description",
		},
		{
			name: "Honey Tea",
			price: 7,
			img: teaImg,
			desc: "this is a description",
		},
		{
			name: "Artsy Coffee",
			price: 8,
			img: coffeeImg,
			desc: "this is a description",
		},
	],
	desserts: [
		{
			name: "Lovely Cake",
			price: 10,
			img: cakeImg,
			desc: "this is a description",
		},
		{
			name: "Homemade Brownies",
			price: 11,
			img: brownieImg,
			desc: "this is a description",
		},
		{
			name: "Pretty Patties",
			price: 12,
			img: prettypattyImg,
			desc: "this is a description",
		},
	],
};

function menuItem(name, price, img, desc) {
	let section = sectionComponent(`${name} ( $${price} )`);
	let imgContainer = document.createElement("div");
	let description = paragraphComponent(desc);
	let newImg = new Image();
	newImg.src = img;

	imgContainer.classList.add("img-container");

	imgContainer.append(newImg);
	section.append(imgContainer);
	section.append(description);

	return section;
}

function loadMenuPage() {
	let wholeMenu = document.createElement("div");
	wholeMenu.classList.add("content-card");

	for (let key in menu) {
		let menuCard = contentCardComponent(`${_.upperFirst(key)}`);

		for (let i = 0; i < menu[key].length; i++) {
			let newMenuItem = menuItem(
				menu[key][i].name,
				menu[key][i].price,
				menu[key][i].img,
				menu[key][i].desc
			);

			menuCard.append(newMenuItem);
		}

		wholeMenu.append(menuCard);
	}

	return wholeMenu;
}

export { loadMenuPage };
