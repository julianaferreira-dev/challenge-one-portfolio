document.addEventListener("DOMContentLoaded", function () {
  const botaoEnviar = document.getElementById("botao__enviar");
  botaoEnviar.addEventListener("click", function (validacao) {
    const campos = document.querySelectorAll(
      ".contato__formulario__entrada, .contato__formulario__entradaTexto"
    );
    let formularioValido = true;

    campos.forEach(function (campo) {
      const erroDiv = campo.nextElementSibling;
      if (!campo.value.trim()) {
        erroDiv.innerHTML = `
                    <div class="mensagem__erro"> 
                    <img src="/assets/img/contato/atencao.png">
                    <p>Este campo é de preenchimento obrigatório!</p>
                    </div>
                `;
        erroDiv.style.color = "red";
        formularioValido = false;
      } else if (campo.type === "email" && !campo.value.includes("@")) {
        erroDiv.innerHTML = `
                    <div class="mensagem__erro"> 
                    <img src="/assets/img/contato/atencao.png">
                    <p>O endereço de e-mail é inválido!</p>
                    </div>
                `;
        erroDiv.style.color = "red";
        formularioValido = false;
      } else if (campo.value.length < 5) {
        erroDiv.innerHTML = `
                    <div class="mensagem__erro"> 
                    <img src="/assets/img/contato/atencao.png">
                    <p>Deve conter no mínimo 5 caracteres!</p>
                    </div>
                `;
        erroDiv.style.color = "red";
        formularioValido = false;
      } else {
        erroDiv.textContent = "";
      }
    });

    if (!formularioValido) {
      validacao.preventDefault();
    }
  });
});
