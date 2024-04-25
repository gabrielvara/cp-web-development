function clickSim() {
    window.location.href = "login.html";
}

function clickNao() {
    window.location.href = "https://www.youtube.com/@luccastoon";
}

function clickLogin() {
    var erro = document.getElementById("erro");
    var usuario = document.getElementById("usuario").value 
    var senha = document.getElementById("senha").value 
    if (usuario == "1234" && senha == "1234" ){
        window.location.href = "index.html";
    }
    else {
        erro.innerText = "Usuário ou Senha incorretos, Tente novamente"
    }
}