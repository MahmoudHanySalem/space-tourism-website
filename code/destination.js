const dataload = async () => {
    let url = 'http://localhost:3000/destinations';

    const res = await fetch(url);
    const data = await res.json();
    displayDestination(data);
}

function displayDestination(destinations) {
    destinations.forEach((destination) => {
        if (destination.name.toUpperCase() === activePlanet) {
            let img = document.querySelector(".planet img");
            img.setAttribute('src', destination.images.webp);
            img.setAttribute('alt', destination.name);

            let name = document.querySelector(".plante-name");
            let discreption = document.querySelector(".discreption");
            name.innerHTML = destination.name;
            discreption.innerHTML = destination.description;

            let distanceContent = document.querySelector(".distance-content");
            let travelContent = document.querySelector(".travel-content");
            distanceContent.innerHTML = destination.distance;
            travelContent.innerHTML = destination.travel;
        }
    })
}

let activePlanet = document.querySelector(".active-planet").textContent;
dataload();

let lis = document.querySelectorAll(".switch ul li");
lis.forEach((li) => {
    li.addEventListener('click', (event) => {
        document.querySelector(".active-planet").classList.remove("active-planet");
        li.classList.add("active-planet");
        activePlanet = li.textContent;
        dataload();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector("main");
    content.classList.add('fade-in');
});