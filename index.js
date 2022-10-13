/* Variables */
const submit = document.querySelector("#submit");
const rating = document.querySelector(".ratings");
const buttons = document.querySelectorAll(".btn");
const display = document.querySelector(".comment");
const finishScreen = document.querySelector(".container-secondary");
const startScreen = document.querySelector(".container-primary");

let elementClicked = false;

/* Pick rating */

buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
		event.preventDefault();
		elementClicked = true;
		console.log(button.textContent);
		display.textContent = `You selected ${button.textContent} out of 5`;
	});
});

/* Submit rating */

submit.addEventListener("click", (event) => {
	event.preventDefault();
	if (elementClicked === false) {
		throw Error("A rating was not selected");
	}
	finishScreen.classList.remove("hidden");
	startScreen.classList.add("hidden");
});
