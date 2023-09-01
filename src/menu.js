import _ from "lodash";
const menu = {
	mains: [
		{
			name: "food1",
			price: 21,
			img: null,
			desc: "this is a description",
		},
		{
			name: "food2",
			price: 20,
			img: null,
			desc: "this is a description",
		},
		{
			name: "food3",
			price: 19,
			img: null,
			desc: "this is a description",
		},
	],
	drinks: [
		{
			name: "drink1",
			price: 6,
			img: null,
			desc: "this is a description",
		},
		{
			name: "drink2",
			price: 7,
			img: null,
			desc: "this is a description",
		},
		{
			name: "drink3",
			price: 8,
			img: null,
			desc: "this is a description",
		},
	],
	deserts: [
		{
			name: "yummy",
			price: 10,
			img: null,
			desc: "this is a description",
		},
		{
			name: "yummy2",
			price: 11,
			img: null,
			desc: "this is a description",
		},
		{
			name: "yummy3",
			price: 12,
			img: null,
			desc: "this is a description",
		},
	],
};

function menuCardComponents() {
	for (let key in menu) {
		const contentCard = document.createElement("div");
		contentCard.classList.add("content-card");
		contentCard.id = `${key}-card`;

		const subTitle = document.createElement("h2");
		subTitle.innerText = _.upperFirst(key);

		contentCard.append(subTitle);
		menuSectionComponents();
		return contentCard;
	}
}

function menuSectionComponents() {
	for (let key in menu) {
		menu[key].forEach((item) => {
			let container = document.createElement("div");
			let nameAndPrice = document.createElement("h3");
			// let imgContainer = document.createElement("div");
			let description = document.createElement("p");

			nameAndPrice.innerText = `${_.upperFirst(item.name)} || $${item.price}`;
			description.innerText = item.desc;

			container.append(nameAndPrice);
			container.append(description);
		});
	}
}

export { menuCardComponents, menuSectionComponents };
