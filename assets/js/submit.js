document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.querySelector('[data-formulario]');

    formulario.addEventListener('submit', (envio) => {
        envio.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        localStorage.setItem('contato', JSON.stringify( {
            nome,
            email,
            assunto,
            mensagem
        }));

        window.location.href = 'enviado.html#contato';
    });
});
