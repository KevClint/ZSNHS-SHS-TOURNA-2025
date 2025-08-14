const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav--list");

if (hamburger && navList) {
  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
}
