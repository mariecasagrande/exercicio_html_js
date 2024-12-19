document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário

    var campoA = document.getElementById('campoA').value;
    var campoB = document.getElementById('campoB').value;
    var mensagem = document.getElementById('mensagem');

    if (Number(campoB) > Number(campoA)) {
        mensagem.textContent = "Formulário válido: Campo B é maior que Campo A.";
        mensagem.style.color = "orange";
    } else {
        mensagem.textContent = "Formulário inválido: Campo B deve ser maior que Campo A.";
        mensagem.style.color = "blue";
    }
});
