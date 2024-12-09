const sideBar = document.getElementById("sidebar");
const hamburgerButton = document.getElementById("hamburger-button");
const closeButton = document.getElementById("close-button");

hamburgerButton.addEventListener("click", () => {
  sideBar.classList.remove("hidden");
  sideBar.classList.add("flex");
  hamburgerButton.classList.remove("inline-flex");
  hamburgerButton.classList.add("hidden");
  closeButton.classList.remove("hidden");
  closeButton.classList.add("flex");
});

closeButton.addEventListener("click", () => {
sideBar.classList.add("hidden");
hamburgerButton.classList.remove("hidden");
hamburgerButton.classList.add("inline-flex");
});
