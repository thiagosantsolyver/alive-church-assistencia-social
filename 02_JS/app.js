// ========================================
// APLICAÇÃO PRINCIPAL
// ALIVE CHURCH
// ========================================


// ========================================
// CONTÊINER PRINCIPAL DA SPA
// ========================================

const app =
    document.getElementById("app");


// ========================================
// IDENTIFICAR ROTA ATUAL
// ========================================

function obterRota() {

    const hash =
        window.location.hash.replace(
            "#",
            ""
        );

    if (!hash) {
        return "inicio";
    }

    return hash;
}


// ========================================
// RENDERIZAR ROTA
// ========================================

function renderizarRota() {

    if (!app) {
        return;
    }

    const rota =
        obterRota();

    window.scrollTo(
        0,
        0
    );


    switch (rota) {

        // =================================
        // PROJETOS
        // =================================

        case "projetos":

            app.innerHTML =
                templateProjetos();

            document.title =
                "Projetos | Assistência Social | Alive Church";

            break;


        // =================================
        // CADASTRO
        // =================================

        case "cadastro":

            app.innerHTML =
                templateCadastro();

            document.title =
                "Voluntariado | Assistência Social | Alive Church";

            configurarFormulario();

            break;


        // =================================
        // DOAÇÕES
        // =================================

        case "doacoes":

            app.innerHTML =
                templateProjetos();

            document.title =
                "Doações | Assistência Social | Alive Church";

            setTimeout(
                function () {

                    const secaoDoacoes =
                        document.getElementById(
                            "doacoes"
                        );

                    if (secaoDoacoes) {

                        secaoDoacoes.scrollIntoView();
                    }

                },
                0
            );

            break;


        // =================================
        // INÍCIO
        // =================================

        case "inicio":

            app.innerHTML =
                templateInicio();

            document.title =
                "Assistência Social | Alive Church";

            break;


        // =================================
        // ROTA DESCONHECIDA
        // =================================

        default:

            window.location.hash =
                "inicio";

            return;
    }
}


// ========================================
// MONITORAR ALTERAÇÃO DE ROTA
// ========================================

window.addEventListener(
    "hashchange",
    renderizarRota
);


// ========================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ========================================

function iniciarAplicacao() {

    configurarNavegacao();

    renderizarRota();
}


// ========================================
// INICIAR SPA
// ========================================

iniciarAplicacao();