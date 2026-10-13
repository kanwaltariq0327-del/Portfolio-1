const showMenu = (navId, toggleId) => {
    const nav = document.getElementById(navId),
        toggle = document.getElementById(toggleId);

    toggle.addEventListener("click", () => {
        nav.classList.toggle("show-menu");
        toggle.classList.toggle("show-icon")
    })
}

showMenu("nav-menu", "nav-toggle");


// const background = document.querySelector(".background");

// for (let i = 0; i < 65; i++) {
//     const particle = document.createElement("span");

//     particle.className = "particle";

//     particle.style.left = Math.random() * 100 + "%";
//     particle.style.animationDelay = Math.random() * 7 + "s";
//     particle.style.animationDuration =
//         (4 + Math.random() * 7) + "s";

//     const size = Math.random() * 3 + 1;

//     particle.style.width = size + "px";
//     particle.style.height = size + "px";

//     background.appendChild(particle);
// }


const box = document.getElementById("ledBox");

for (let i = 0; i < 35; i++) {
  const particle = document.createElement("span");
  particle.className = "particle";

  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDuration =
    (4 + Math.random() * 6) + "s";

  particle.style.animationDelay =
    (-Math.random() * 10) + "s";

  const size = 1 + Math.random() * 3;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  box.appendChild(particle);
}