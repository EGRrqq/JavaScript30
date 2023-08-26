const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", (event) => {
  const audio = document.querySelector(`audio[data-code="${event.code}"`);
  const key = document.querySelector(`.key[data-code="${event.code}"`);

  if (!audio) return;

  audio.currentTime = "";
  audio.play();

  key.classList.toggle("playing");
});

keys.forEach((key) =>
  key.addEventListener("transitionend", () => key.classList.remove("playing"))
);
