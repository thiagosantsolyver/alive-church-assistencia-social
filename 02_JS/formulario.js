// ========================================
// FORMULÁRIO DE VOLUNTARIADO
// ALIVE CHURCH
// ========================================


// ========================================
// EXIBIR FEEDBACK DE ERRO
// ========================================

function exibirErroFormulario(mensagem) {

    const feedback =
        document.getElementById(
            "feedback-formulario"
        );

    if (!feedback) {
        return;
    }

    feedback.textContent =
        mensagem;

    feedback.classList.remove(
        "alerta-sucesso"
    );

    feedback.classList.add(
        "alerta-erro"
    );

    feedback.hidden = false;
}


// ========================================
// LIMPAR FEEDBACK
// ========================================

function limparFeedbackFormulario() {

    const feedback =
        document.getElementById(
            "feedback-formulario"
        );

    if (!feedback) {
        return;
    }

    feedback.textContent = "";

    feedback.classList.remove(
        "alerta-erro",
        "alerta-sucesso"
    );

    feedback.hidden = true;
}


// ========================================
// EXIBIR TOAST DE SUCESSO
// ========================================

function exibirToastSucesso() {

    const toast =
        document.getElementById(
            "toast-sucesso"
        );

    if (!toast) {
        return;
    }

    toast.classList.add(
        "ativo"
    );

    toast.setAttribute(
        "aria-hidden",
        "false"
    );

    setTimeout(
        function () {

            toast.classList.remove(
                "ativo"
            );

            toast.setAttribute(
                "aria-hidden",
                "true"
            );

        },
        4000
    );
}


// ========================================
// MÁSCARA DO CPF
// ========================================

function aplicarMascaraCPF(campo) {

    let cpf =
        campo.value.replace(
            /\D/g,
            ""
        );

    cpf =
        cpf.slice(0, 11);

    cpf = cpf.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    cpf = cpf.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    cpf = cpf.replace(
        /(\d{3})(\d{1,2})$/,
        "$1-$2"
    );

    campo.value = cpf;
}


// ========================================
// MÁSCARA DO TELEFONE
// ========================================

function aplicarMascaraTelefone(campo) {

    let telefone =
        campo.value.replace(
            /\D/g,
            ""
        );

    telefone =
        telefone.slice(0, 11);

    telefone = telefone.replace(
        /^(\d{2})(\d)/,
        "($1) $2"
    );

    telefone = telefone.replace(
        /(\d{5})(\d{1,4})$/,
        "$1-$2"
    );

    campo.value =
        telefone;
}


// ========================================
// MÁSCARA DO CEP
// ========================================

function aplicarMascaraCEP(campo) {

    let cep =
        campo.value.replace(
            /\D/g,
            ""
        );

    cep =
        cep.slice(0, 8);

    cep = cep.replace(
        /(\d{5})(\d)/,
        "$1-$2"
    );

    campo.value = cep;
}


// ========================================
// VALIDAR FORMULÁRIO
// ========================================

function validarFormulario(
    formulario
) {

    limparFeedbackFormulario();

    const camposObrigatorios =
        formulario.querySelectorAll(
            "[required]"
        );

    for (
        const campo
        of camposObrigatorios
    ) {

        if (!campo.value.trim()) {

            exibirErroFormulario(
                "Preencha todos os campos obrigatórios."
            );

            campo.focus();

            return false;
        }
    }


    const campoNome =
        document.getElementById("nome");

    if (
        campoNome &&
        campoNome.value.trim().length < 3
    ) {

        exibirErroFormulario(
            "Informe um nome válido com pelo menos 3 caracteres."
        );

        campoNome.focus();

        return false;
    }


    const campoCPF =
        document.getElementById("cpf");

    const regexCPF =
        /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

    if (
        campoCPF &&
        !regexCPF.test(campoCPF.value)
    ) {

        exibirErroFormulario(
            "Informe o CPF no formato 000.000.000-00."
        );

        campoCPF.focus();

        return false;
    }


    const campoEmail =
        document.getElementById("email");

    const regexEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
        campoEmail &&
        !regexEmail.test(
            campoEmail.value
        )
    ) {

        exibirErroFormulario(
            "Informe um endereço de e-mail válido."
        );

        campoEmail.focus();

        return false;
    }


    const campoTelefone =
        document.getElementById(
            "telefone"
        );

    const regexTelefone =
        /^\(\d{2}\) \d{5}-\d{4}$/;

    if (
        campoTelefone &&
        !regexTelefone.test(
            campoTelefone.value
        )
    ) {

        exibirErroFormulario(
            "Informe o telefone no formato (00) 00000-0000."
        );

        campoTelefone.focus();

        return false;
    }


    const campoCEP =
        document.getElementById("cep");

    const regexCEP =
        /^\d{5}-\d{3}$/;

    if (
        campoCEP &&
        !regexCEP.test(campoCEP.value)
    ) {

        exibirErroFormulario(
            "Informe o CEP no formato 00000-000."
        );

        campoCEP.focus();

        return false;
    }


    return true;
}


// ========================================
// CONFIGURAR FORMULÁRIO
// ========================================

function configurarFormulario() {

    const formulario =
        document.getElementById(
            "form-voluntario"
        );

    if (!formulario) {
        return;
    }


    const campoCPF =
        document.getElementById("cpf");

    const campoTelefone =
        document.getElementById(
            "telefone"
        );

    const campoCEP =
        document.getElementById("cep");


    // ====================================
    // RESTAURAR DADOS SALVOS
    // ====================================

    restaurarDadosFormulario();


    // ====================================
    // EVENTOS DE INPUT
    // ====================================

    if (campoCPF) {

        campoCPF.addEventListener(
            "input",
            function () {

                aplicarMascaraCPF(
                    campoCPF
                );
            }
        );
    }


    if (campoTelefone) {

        campoTelefone.addEventListener(
            "input",
            function () {

                aplicarMascaraTelefone(
                    campoTelefone
                );
            }
        );
    }


    if (campoCEP) {

        campoCEP.addEventListener(
            "input",
            function () {

                aplicarMascaraCEP(
                    campoCEP
                );
            }
        );
    }


    // ====================================
    // SALVAMENTO DURANTE O PREENCHIMENTO
    // ====================================

    formulario.addEventListener(
        "input",
        function () {

            const dados =
                coletarDadosFormulario(
                    formulario
                );

            salvarDadosFormulario(
                dados
            );
        }
    );


    formulario.addEventListener(
        "change",
        function () {

            const dados =
                coletarDadosFormulario(
                    formulario
                );

            salvarDadosFormulario(
                dados
            );
        }
    );


    // ====================================
    // ENVIO DO FORMULÁRIO
    // ====================================

    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const formularioValido =
                validarFormulario(
                    formulario
                );

            if (!formularioValido) {
                return;
            }


            const dados =
                coletarDadosFormulario(
                    formulario
                );

            salvarDadosFormulario(
                dados
            );

            limparFeedbackFormulario();

            exibirToastSucesso();
        }
    );
}