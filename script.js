let bug = document.querySelector(".bug")
let score = document.querySelector(".score")
let body = document.querySelector("html")
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
let a = 0

bug.addEventListener("click", () => {
  bug.style.left = random(10, 80) + "%";
  bug.style.marginTop = random(10, 80) + "%";
  a = a + 1
  score.innerHTML = "Score:" + a
  body.style.backgroundColor = "yellow";
  setTimeout(() => {
    body.style.backgroundColor = "white";
  }, 200);
});