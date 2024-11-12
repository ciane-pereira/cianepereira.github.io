const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const logo = document.getElementById("logo");

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    const newTheme =  currentTheme === "dark" ? "light" : "dark";
    rootHtml.setAttribute("data-theme", newTheme);
    logo.setAttribute("src", newTheme === "dark" ? 
    "assets/images/logo_dark.png": "assets/images/logo_light.png");

    localStorage.setItem("theme", newTheme);

    toggleTheme.classList.toggle("bi-brightness-high");
    toggleTheme.classList.toggle("bi-moon");
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";

  rootHtml.setAttribute("data-theme", savedTheme);


logo.setAttribute("src", savedTheme === "dark" ?   
"assets/images/logo_dark.png": "assets/images/logo_light.png");

if (savedTheme === "dark") {
  toggleTheme.classList.add("bi-moon");
  toggleTheme.classList.remove("bi-brightness-high");
} else {
  toggleTheme.classList.add("bi-brightness-high");
  toggleTheme.classList.remove("bi-moon")
}} 

toggleTheme.addEventListener("click", changeTheme);
loadTheme();

   const menuLinks = document.querySelectorAll(".menu__link")
    menuLinks.forEach(item => {
    item.addEventListener("click", () => {
      menuLinks.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    })
  })

   