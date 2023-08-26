const divs = document.querySelectorAll("div");

divs.forEach((div) =>
  div.addEventListener(
    "click",
    function (event) {
      console.log(this.classList.value);
      event.stopPropagation();
    },
    { capture: false, once: false, passive: false }
  )
);
