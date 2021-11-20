const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
    let content = desc.innerText;
    if (content.length > 250) {
        content = content.slice(0, 250);
        content = content + "...";
    }
    console.log(content);
}

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);
const firstBtn = document.querySelector("button");
firstBtn.addEventListener("click", (event) => {
    console.log(event.target);
});

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
allBtns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        console.log(event.target.parentNode);
    });
});