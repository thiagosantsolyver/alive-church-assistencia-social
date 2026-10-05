// ========================================
// ARMAZENAMENTO LOCAL
// ALIVE CHURCH
// ========================================


// ========================================
// CHAVE UTILIZADA NO LOCALSTORAGE
// ========================================

const CHAVE_FORMULARIO =
    "aliveChurchFormularioVoluntario";


// ========================================
// SALVAR DADOS
// ========================================

function salvarDadosFormulario(dados) {

    const dadosEmTexto =
        JSON.stringify(dados);

    localStorage.setItem(
        CHAVE_FORMULARIO,
        dadosEmTexto
    );
}


// ========================================
// RECUPERAR DADOS
// ========================================

function recuperarDadosFormulario() {

    const dadosEmTexto =
        localStorage.getItem(
            CHAVE_FORMULARIO
        );

    if (!dadosEmTexto) {
        return null;
    }

    try {

        return JSON.parse(
            dadosEmTexto
        );

    } catch (erro) {

        console.error(
            "Erro ao recuperar os dados do formulário:",
            erro
        );

        return null;
    }
}


// ========================================
// RESTAURAR DADOS NO FORMULÁRIO
// ========================================

function restaurarDadosFormulario() {

    const dados =
        recuperarDadosFormulario();

    if (!dados) {
        return;
    }

    const campos = [
        "nome",
        "cpf",
        "nascimento",
        "email",
        "telefone",
        "cep",
        "endereco",
        "cidade",
        "estado",
        "area",
        "mensagem"
    ];

    campos.forEach(
        function (nomeCampo) {

            const campo =
                document.getElementById(
                    nomeCampo
                );

            if (
                campo &&
                dados[nomeCampo] !== undefined
            ) {

                campo.value =
                    dados[nomeCampo];
            }
        }
    );
}


// ========================================
// COLETAR DADOS DO FORMULÁRIO
// ========================================

function coletarDadosFormulario(
    formulario
) {

    const dadosFormulario =
        new FormData(formulario);

    return {
        nome:
            dadosFormulario.get("nome") || "",

        cpf:
            dadosFormulario.get("cpf") || "",

        nascimento:
            dadosFormulario.get("nascimento") || "",

        email:
            dadosFormulario.get("email") || "",

        telefone:
            dadosFormulario.get("telefone") || "",

        cep:
            dadosFormulario.get("cep") || "",

        endereco:
            dadosFormulario.get("endereco") || "",

        cidade:
            dadosFormulario.get("cidade") || "",

        estado:
            dadosFormulario.get("estado") || "",

        area:
            dadosFormulario.get("area") || "",

        mensagem:
            dadosFormulario.get("mensagem") || ""
    };
}