const dataload = async () => {
    let url = 'http://localhost:3000/crew';

    const res = await fetch(url);
    const data = await res.json();
    displayCrew(data);
}

function displayCrew(crew) {
    let img = document.querySelector(".crew-member img");
    img.setAttribute('src', crew[activeMember].images.webp);
    img.setAttribute('alt', crew[activeMember].name);

    let role = document.querySelector(".role");
    role.innerHTML = crew[activeMember].role;

    let name = document.querySelector(".crew-name");
    let discreption = document.querySelector(".discreption");
    name.innerHTML = crew[activeMember].name;
    discreption.innerHTML = crew[activeMember].bio;
}

let activeMember = Number(document.querySelector(".active").id);
dataload();

let members = document.querySelectorAll(".radios div");
members.forEach((member) => {
    member.addEventListener('click', (event) => {
        document.querySelector(".active").classList.remove("active");
        member.classList.add("active");
        activeMember = Number(member.id);
        dataload();
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const content = document.querySelector("main");
    content.classList.add('fade-in');
});