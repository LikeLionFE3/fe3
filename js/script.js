const body = document.querySelector("body");
const type = body.getAttribute("class");
const lists = body.querySelectorAll("main li");

[...lists].map((list) => {
	const container = document.createElement("embed");
	container.setAttribute("src", `./${type}/${list.getAttribute("name")}/index.html`);
	list.append(container);
});
