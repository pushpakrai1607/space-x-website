const btns = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btns.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
  btns.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

function scrollPage() {
  const scrollPos = window.scrollY;
  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
    
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      //get counter target
      const target = +counter.getAttribute("data-target");
      const c = +counter.innerText;

      //create an increment
      const increment = target / 100;

      //if counter is less than target ,add increment
      if (c < target) {
        counter.innerText = `${Math.ceil(c + increment)}`;
        setTimeout(updateCounter, 25);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => {
    counter.innerText = "0";
  });
}
