/*Menu*/

const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if(navClose){
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

const navLink = document.querySelectorAll(".nav_link");

function linkAction(){
    navMenu.classList.remove("show-menu");
}

navLink.forEach(o => o.addEventListener("click", linkAction));

/*Habilidades*/

const skillsContent = document.querySelectorAll(".skills_content");
const skillsHeader = document.querySelectorAll(".skills_header");

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(let i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills_content skills_close';
    }

    if(itemClass == 'skills_content skills_close'){
        this.parentNode.className = 'skills_content skills_open';
    }
}

skillsHeader.forEach(o => {
    o.addEventListener("click", toggleSkills);
})

/*Qualificações*/

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach(o => {
    o.addEventListener("click", () => {
        const target = document.querySelector(o.dataset.target);

        tabContents.forEach(j => {
            j.classList.remove('qualification_active');
        });

        target.classList.add("qualification_active");
        tabs.forEach(i =>{
            i.classList.remove('qualification_active');
        });
        o.classList.add("qualification_active");
    })
})