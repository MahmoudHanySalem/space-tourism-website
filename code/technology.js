const dataload = async () => {
    let url = 'http://localhost:3000/technology';

    const res = await fetch(url);
    const data = await res.json();
    displayTech(data);
}

function displayTech(tech) {
    let img = document.querySelector(".img-container img");
    img.setAttribute('src', tech[activeTech].images.portrait);
    img.setAttribute('alt', tech[activeTech].name);

    let name = document.querySelector(".tech-name");
    let discreption = document.querySelector(".discreption");
    name.innerHTML = tech[activeTech].name;
    discreption.innerHTML = tech[activeTech].description;
}

let activeTech = Number(document.querySelector(".active").innerHTML) - 1;
dataload();

let techs = document.querySelectorAll(".switch div");
techs.forEach((tech) => {
    tech.addEventListener('click', (event) => {
        document.querySelector(".active").classList.remove("active");
        tech.classList.add("active");
        activeTech = Number(tech.innerHTML) - 1;
        dataload();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector("main");
    content.classList.add('fade-in');
});
