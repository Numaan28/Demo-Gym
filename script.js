/* ===== CARD SCROLL ANIMATION ===== */
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;

    if (cardTop < triggerPoint) {
      card.classList.add("show");
    }
  });
});

/* ===== FOOTER EMAIL TOGGLE ===== */
const mailBtn = document.getElementById("mailBtn");
const email = document.getElementById("email");

if (mailBtn && email) {
  mailBtn.addEventListener("click", () => {
    email.classList.toggle("show");
  });
}
