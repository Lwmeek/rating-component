/* Variables */
const form = document.querySelector("#form");
const submit = document.querySelector("#submit");
const display = document.querySelector(".comment");
const rating = document.querySelectorAll(".rate");

/* Pick rating */
rating.forEach((rate) => {
	rate.addEventListener("click", (event) => {
		event.preventDefault();
		document.querySelector(".rate.active")?.classList?.remove("active");
		rate.classList.toggle("active");
	});
});

/*display.textContent = `You selected 4 out of 5`;*/
