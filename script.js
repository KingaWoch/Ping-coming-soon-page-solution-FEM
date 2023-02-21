const email = document.getElementById("email");
const button = document.getElementById("button");
const error = document.querySelector(".error");

button.addEventListener("click", () => {
    let pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    let emailValue = email.value;

    if(!emailValue.match(pattern)) {
        email.classList.add("invalid");
        error.classList.add("visible");
    } else {
        email.classList.remove("invalid");
        error.classList.remove("visible");
    }
})
