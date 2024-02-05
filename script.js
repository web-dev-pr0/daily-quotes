const hamburger = document.querySelector(".i-bars"); // Div around the i element
const closeHamburger = document.querySelector(".i-x"); //Div around the i element
const iHamburger = document.querySelector(".fa-bars");
const iX = document.querySelector(".fa-x");
const navUlCon = document.querySelector(".nav-ul-container");
const nav = document.querySelector(".nav");
const famousPeople = document.querySelectorAll(".famous-people");
const modal = document.getElementById("modal");
const closeModalIcon = modal.querySelector(".fa-x");

// Opens the Hamburger Menu
hamburger.addEventListener("click", () => {
  navUlCon.classList.toggle("ham-active");

  // Changes the Hamburger Icon
  if (iHamburger.classList.contains("fa-bars")) {
    iHamburger.classList.remove("fa-bars");
    iHamburger.classList.add("fa-x");
  } else {
    iHamburger.classList.add("fa-bars");
    iHamburger.classList.remove("fa-x");
  }
});

// Changes the navbar color when you scroll at least 1px from the top (in mobile screens it's always white background)

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    nav.style.backgroundColor = "white";
    nav.style.boxShadow = "0 0 3px rgba(0, 0, 0, .6)";
  } else {
    nav.style.backgroundColor = "transparent";
    nav.style.boxShadow = "none";
  }
});

// Calculates the time that is left till the next day (hours, minutes, seconds)
function calculateTimeRemaining() {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0); // Set to midnight

  const timeDifference = midnight - now;
  const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
  const seconds = Math.floor((timeDifference / 1000) % 60);

  return { hours, minutes, seconds };
}

// Displays the values in the document
function updateTimerDisplay() {
  const timeRemaining = calculateTimeRemaining();
  const timerDisplay = document.getElementById("timer");
  timerDisplay.innerHTML = `
      ${timeRemaining.hours} hours <br>
      ${timeRemaining.minutes} minutes <br>
      ${timeRemaining.seconds} seconds
    `;
}

setInterval(updateTimerDisplay, 1000);

updateTimerDisplay();

// Opening a modal for every person with a quote
famousPeople.forEach((element, index) => {
  const modalTitle = modal.querySelector("h1");
  const modalQuote = modal.querySelector("p");
  element.addEventListener("click", () => {
    if (index == 0) {
      modalTitle.innerText = "Elon Musk";
      modalQuote.innerText =
        "Never. I don't ever give up. I'd have to be dead or completely incapacitated. For my part, I will never give up, and I mean never.";
    } else if (index == 1) {
      modalTitle.innerText = "Abraham Lincoln";
      modalQuote.innerText =
        "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.";
    } else if (index == 2) {
      modalTitle.innerText = "Albert Einstein";
      modalQuote.innerText =
        "We cannot solve our problems with the same thinking we used when we created them.";
    } else if (index == 3) {
      modalTitle.innerText = "John Lennon";
      modalQuote.innerText =
        "Life is what happens to you, While you're busy making other plans.";
    } else if (index == 4) {
      modalTitle.innerText = "Steve Jobs";
      modalQuote.innerText =
        "Your time is limited, so don't waste it living someone else's life.";
    } else if (index == 5) {
      modalTitle.innerText = "Martin Luther King Jr.";
      modalQuote.innerText =
        "Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that.";
    } else if (index == 6) {
      modalTitle.innerText = "Nelson Mandela";
      modalQuote.innerText = "A winner is a dreamer who never gives up.";
    } else if (index == 7) {
      modalTitle.innerText = "Thomas Edison";
      modalQuote.innerText =
        "I have not failed. I've just found 10,000 ways that won't work.";
    } else if (index == 8) {
      modalTitle.innerText = "Tony Robbins";
      modalQuote.innerText =
        "When you are grateful fear disappears and abundance appears.";
    } else {
      modalTitle.innerText = "Walt Disney";
      modalQuote.innerText =
        "I only hope that we don't lose sight of one thing - that it was all started by a mouse.";
    }
    modal.showModal();
  });
});

// Closes modal when the X is clicked
closeModalIcon.addEventListener("click", () => {
  modal.close();
});

// Loading screen
window.addEventListener("load", () => {
  const loadingCube = document.querySelector(".loading-container");
  loadingCube.style.display = "none";
});
