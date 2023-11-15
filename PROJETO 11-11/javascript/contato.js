//pegar os dados
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelector(".error");


//validar os dados
function validateForm(){


    clearMessages();
    let errorFlag = false;


    if (nameInput.value.lenght < 1){
        errorNodes[0].innerText = "Nome não preenchido";
        nameInput.classList.add("error-border");
        errorFlag = true;
    }


    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Endereço de email inválido";
        email.classList.add("error-border");
        errorFlag = true;
    }


    if (message.value.lenght < 1) {
        errorNodes[2].innerText = "Por favor adicione uma mensagem";
        message.classList.add("error-border");
        errorFlag = true;
    }


    if (!errorFlag){
        success.innerText = "Sucess";
    }


}


//Limpar erro / sucesso
function clearMessages() {
    for (let i = 0; i < errorNodes.lenght; i++){
        errorNodes[i].innerText = "";
    }
    success.innerText = "";
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
}


//Checar se o email é válido
function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}
