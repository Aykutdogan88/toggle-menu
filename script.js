const navMenu = document.querySelector(".nav-menu");
const toggle = document.querySelector(".toggle");
const body = document.querySelector(".myColor");

const yellow = document.querySelector(".nav-link2-yellow");
const home = document.querySelector(".nav-link1-white");
const blue = document.querySelector(".nav-link3-blue");
const purple = document.querySelector(".nav-link4-purple");
const green = document.querySelector(".nav-link5-green");

toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
})

home.addEventListener("click", function() {
    body.style.backgroundColor = "white";
});
yellow.addEventListener("click", function() {
    body.style.backgroundColor = "yellow"; 
});
    
blue.addEventListener("click", function() {
    body.style.backgroundColor = "blue"; 
});
purple.addEventListener("click", function() {
    body.style.backgroundColor = "purple"; 
});
green.addEventListener("click", function() {
    body.style.backgroundColor = "green"; 
});

document.querySelectorAll(".nav-menu").forEach(n => n.addEventListener("click", function(){
    navMenu.classList.remove("active");
}));





