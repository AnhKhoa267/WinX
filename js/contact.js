const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {
    Email.send({
        SecureToken: "66f365e6-54d8-4c0e-9763-9c59e1e08bc1",
        To : 't.a.khoa260702@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Phone: " + document.getElementById("phone").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Message: " + document.getElementById("message").value
    }).then(
      message => alert(message)
    );
})

// search
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
