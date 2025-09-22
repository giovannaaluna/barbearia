document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        
        event.preventDefault();

        const nomeInput = document.getElementById('nome');
        const emailInput = document.getElementById('email');

        const nomeValue = nomeInput.value.trim();
        const emailValue = emailInput.value.trim();

        if (nomeValue === '') {
            alert('Por favor, preencha o campo "Nome".');
            return;
        }

        if (!validarEmail(emailValue)) {
            alert('Por favor, insira um endereço de e-mail válido.');
            return;
        }

        alert('Formulário enviado com sucesso! (Esta é uma demonstração)');
        
        form.reset();
    });

    function validarEmail(email) {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    }
});