const dog = document.getElementById("dog");
const boll = document.getElementById("boll");
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");

btn.addEventListener("click", () => {
  if (dog.classLists != "jump") {
    dog.classList.add("jump");
  }
  setTimeout(() => {
    dog.classList.remove("jump");
  }, 800);
});

let isAlive = setInterval(() => {
  let dogBottom = parseInt(
    window.getComputedStyle(dog).getPropertyValue("bottom")
  );
  let bollRight = parseInt(
    window.getComputedStyle(boll).getPropertyValue("right")
  );

  if (dogBottom == 0 && bollRight <= 100) {
    alert("game over");
    boll.classList.add("none");
  }
}, 10);
btn1.addEventListener("click", () => {
  boll.classList.remove("none");
  boll.classList.add("start");
});
