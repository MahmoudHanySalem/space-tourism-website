let main = document.getElementsByClassName("main-content")[0];
let expbtn = document.querySelector("button");
let textDiv = document.querySelector(".text");
expbtn.addEventListener('mouseover', (event) => {
    textDiv.style.marginRight = '14rem';
    let container = document.createElement("div");
    container.className = "button-container";
    main.removeChild(expbtn);
    container.appendChild(expbtn);
    main.appendChild(container);
});
expbtn.addEventListener('mouseout', (event) => {
    textDiv.style.marginRight = '20rem';
    let container = document.querySelector(".button-container");
    main.removeChild(container);
    main.appendChild(expbtn);
});
expbtn.addEventListener('click', (event) => {
    window.location = "destination.html";
    let activePage = document.querySelector(".activePage");
    activePage.classList.remove("activePage");

});


/* let li=document.querySelector(".list ul li");
li.addEventListener('click',(event) =>{
    if(li.classList!=="activePage"){
        *.style.
    }
}) */
    document.addEventListener("DOMContentLoaded", function() {
        const content = document.querySelector("main");
        content.classList.add('fade-in');
    });