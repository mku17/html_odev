function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

document.getElementById("favBtn").addEventListener("click", function () {
  this.classList.toggle("clicked");
});
