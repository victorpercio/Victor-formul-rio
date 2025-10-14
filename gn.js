const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");


form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
});

email.addEventListener("blur", () => {
    checkInputEmail();
});

username.addEventListener("blur", () => {
    checkInputUsername();
});

password.addEventListener("blur", () => {
    checkInputPassword();
});

passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
});

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

function checkInputUsername() {
    const usernameValue = username.value.trim(); 

    if (usernameValue === "") {
        errorInput(username, "O nome de usuário é obrigatório.");
    } else if (usernameValue.length < 3) {
        errorInput(username, "O nome de usuário precisa ter no mínimo 3 caracteres.");
    } else {
        successInput(username);
    }
}

function checkInputEmail() {
    const emailValue = email.value.trim();

    if (emailValue === "") {
        errorInput(email, "O email é obrigatório.");
    } else if (!checkEmail(emailValue)) {
        errorInput(email, "Por favor, insira um email válido.");
    } else {
        successInput(email);
    }
}

function checkInputPassword() {
    const passwordValue = password.value.trim();

    if (passwordValue === "") {
        errorInput(password, "A senha é obrigatória.");
    } else if (passwordValue.length < 8) {
        errorInput(password, "A senha precisa ter no mínimo 8 caracteres.");
    } else {
        successInput(password);
    }
}

function checkInputPasswordConfirmation() {
    const passwordValue = password.value.trim();
    const confirmationPasswordValue = passwordConfirmation.value.trim();

    if (confirmationPasswordValue === "") {
        errorInput(passwordConfirmation, "A confirmação de senha é obrigatória.");
    } else if (confirmationPasswordValue !== passwordValue) {
        errorInput(passwordConfirmation, "As senhas não são iguais.");
    } else {
        successInput(passwordConfirmation);
    }
}

function checkForm() {
    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content");

    const isValid = [...formItems].every((item) => {
        return item.className === "form-content success";
    });

    if (isValid) {
        alert("CADASTRADO COM SUCESSO!");
        form.reset();
        formItems.forEach(item => {
            item.className = "form-content";
        });
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector(".help-text"); 

    textMessage.innerText = message;

    formItem.className = "form-content error"; 
}

function successInput(input) {
    const formItem = input.parentElement;
    formItem.className = "form-content success";
}
