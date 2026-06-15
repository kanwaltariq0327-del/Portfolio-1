const showMenu = (navId, toggleId) => {
    const nav = document.getElementById(navId),
        toggle = document.getElementById(toggleId);

    toggle.addEventListener("click", () => {
        nav.classList.toggle("show-menu")
    })
}

showMenu("nav-menu", "nav-toggle");