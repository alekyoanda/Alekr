const addClass= document.querySelector(".hamburger-menu");
let added = document.querySelector("nav ul");
let exit = document.querySelectorAll("nav .hamburger-menu span");
addClass.addEventListener("click", function(){
    added.classList.toggle("slide");
    exit[0].classList.toggle("checked");
    for (let i = 0; i < exit.length; i++)
    {
        exit[i].classList.toggle("exit");
    }
});

var myNav = document.getElementById("mynav");
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};
