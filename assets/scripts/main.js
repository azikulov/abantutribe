document.addEventListener("DOMContentLoaded", () => {
  const collpaseList = document.querySelectorAll(".section-faq__collapse");

  collpaseList.forEach((collpase) => {
    collpase.addEventListener("click", () => {
      collpase.classList.toggle("hidden");
    });
  });
});
