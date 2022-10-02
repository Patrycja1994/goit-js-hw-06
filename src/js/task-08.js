
 const form = document.querySelector(".login-form");

 form.addEventListener("submit", handleSubmit);

 function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: {email, password}
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("uzupełnij to pole!");
    }

    console.log(`Email: ${email.value}, Passwrd:${password.value}`);
    event.currentTarget.reset();
 }