const lists = document.querySelectorAll("main li");

[...lists].map((list) => {
	const container = document.createElement("embed");
	container.setAttribute("src", `./students/${list.getAttribute("name")}/index.html`);
	list.append(container);
});
