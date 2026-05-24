document.getElementById("year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
revealItems.forEach((item) => observer.observe(item));

const downloadButton = document.getElementById("downloadButton");
downloadButton.addEventListener("click", (event) => {
  const href = downloadButton.getAttribute("href");
  if (!href || href === "#") {
    event.preventDefault();
    alert("Download link not added yet. Replace this button with your GitHub Release EXE/ZIP link.");
  }
});

const tabs = document.querySelectorAll(".tab-button");
const spotlightImage = document.getElementById("spotlightImage");
const spotlightTitle = document.getElementById("spotlightTitle");
const spotlightText = document.getElementById("spotlightText");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    spotlightImage.src = tab.dataset.image;
    spotlightTitle.textContent = tab.dataset.title;
    spotlightText.textContent = tab.dataset.text;
  });
});

const cursorGlow = document.getElementById("cursorGlow");
window.addEventListener("pointermove", (event) => {
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});
