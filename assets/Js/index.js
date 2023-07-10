alert("Olá,Seja bem-vindo ao Formulario de Cadastro!!")

function validarFormulario(event) {
    event.preventDefault();

    limparMensagensErro();

    const nome = document.getElementById('nome').value;
    if (nome === '') {
        exibirMensagemErro('nomeErro', 'Por favor, informe o nome.');
    }

    const email = document.getElementById('email').value;
    if (email === '') {
        exibirMensagemErro('emailErro', 'Por favor, informe o email.');
    } else if (!validarEmail(email)) {
        exibirMensagemErro('emailErro', 'Por favor, informe um email válido.');
    }

    const senha = document.getElementById('senha').value;
    if (senha === '') {
        exibirMensagemErro('senhaErro', 'Por favor, informe a senha.');
    } else if (senha.length < 6) {
        exibirMensagemErro('senhaErro', 'A senha deve ter no mínimo 6 caracteres.');
    }

    if (nome !== '' && email !== '' && senha !== '' && validarEmail(email) && senha.length >= 6) {
        document.getElementById('cadastroForm').submit();
    }
}

function exibirMensagemErro(elementId, mensagem) {
    const elemento = document.getElementById(elementId);
    elemento.innerHTML = mensagem;
    elemento.style.display = 'block';
}

function limparMensagensErro() {
    const erros = document.getElementsByClassName('erro');
    for (let i = 0; i < erros.length; i++) {
        erros[i].innerHTML = '';
        erros[i].style.display = 'none';
    }
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

const formulario = document.getElementById('cadastroForm');
formulario.addEventListener('submit', validarFormulario);
