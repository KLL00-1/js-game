const dog = document.getElementById("dog");
const boll = document.getElementById("boll");
const btn = document.getElementById("btn");
const btn1 = document.getElementById("btn1");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const h2_1 = document.getElementById("h2_1");
const h2_2 = document.getElementById("h2_2");
const shadow = document.getElementById("shadow");
var audio = new Audio("audio/Sound_19341.mp3");
const audioGameOver = new Audio("audio/Game_over.mp3");
h2.innerHTML = Number(h2.innerHTML);

btn.addEventListener("click", () => {
  if (dog.classLists != "jump") {
    dog.classList.add("jump");
    shadow.classList.add("shadow_black");
    h2.innerHTML++;
    cool();
    monster();
  }

  setTimeout(() => {
    shadow.classList.remove("shadow_black");
    dog.classList.remove("jump");
  }, 1000);
});

let isAlive = setInterval(() => {
  let dogBottom = parseInt(
    window.getComputedStyle(dog).getPropertyValue("bottom")
  );
  let bollRight = parseInt(
    window.getComputedStyle(boll).getPropertyValue("right")
  );

  if (dogBottom <= 5 && bollRight <= 95) {
    h1.classList.add("h1");
    boll.classList.add("none");
    btn.disabled = true;
    audio.load();
    audioGameOver.play();
  }
}, 10);
btn1.addEventListener("click", () => {
  boll.classList.remove("none");
  boll.classList.add("start");
  h1.classList.remove("h1");
  btn.disabled = false;
  h2.innerHTML = 0;
  audio.play();
});
function cool() {
  if (h2.innerHTML == 15) {
    h2_1.classList.add("h3");
  } else if (h2.innerHTML >= 17) h2_1.classList.remove("h3");
}
function monster() {
  if (h2.innerHTML == 30) {
    h2_2.classList.add("h4");
  } else if (h2.innerHTML >= 32) h2_2.classList.remove("h4");
}
function disabled() {
  if (boll.classLists != "start") {
    btn.disabled = true;
  }
}

disabled();
