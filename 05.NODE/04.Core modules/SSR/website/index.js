const exploreBtn = document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});