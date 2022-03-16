let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .ti-search");
//<i class="bx ti-clos"></i>
searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")) {
        searchBox.classList.replace("ti-search","ti-close")
    }else {
        searchBox.classList.replace("ti-close","ti-search");
    }
})


//sidebar
let menuOpenBtn = document.querySelector(".navbar .ti-menu");
let closeOpenBtn = document.querySelector(".nav-links .ti-close");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left= "0";
})

closeOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left= "-100%";
})

//
let lessonArrow = document.querySelector(".lesson-arrow");
lessonArrow.addEventListener("click", ()=> {
    navLinks.classList.toggle("show1");
})


//back to top
const  tiarrowup = document.querySelector(".ti-arrow-up");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        tiarrowup.classList.add("active");
    } else {
        tiarrowup.classList.remove("active");
    }
})


