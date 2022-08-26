const article = document.querySelector("article");
const links = document.querySelectorAll("a");

function addClassHover() {
	article.classList.add("hover");
}
function removeClassHover() {
	article.classList.remove("hover");
}

article.addEventListener("mouseover", addClassHover);
article.addEventListener("focus", addClassHover);
article.addEventListener("mouseout", removeClassHover);
article.addEventListener("blur", removeClassHover);

[...links].map((link) => {
	link.addEventListener("focus", addClassHover);
	link.addEventListener("blur", removeClassHover);
});
