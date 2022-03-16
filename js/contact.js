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