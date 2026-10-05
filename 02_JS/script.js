// ========================================
// APLICAÇÃO SPA - ALIVE CHURCH
// ========================================


// ========================================
// CONTÊINER PRINCIPAL DA APLICAÇÃO
// ========================================

const app = document.getElementById("app");


// ========================================
// CHAVE DO LOCALSTORAGE
// ========================================

const CHAVE_RASCUNHO =
    "aliveChurchRascunhoVoluntario";


// ========================================
// DADOS DAS AÇÕES SOCIAIS
// ========================================

const acoesSociais = [
    {
        categoria: "IDOSOS",
        titulo: "Ação social com idosos",
        imagem: "../03_Imagens/acao-social-idosos.PNG",
        alt: "Ação social da Alive Church realizada com idosos",
        descricao:
            "Ação voltada ao cuidado e acolhimento de idosos, " +
            "proporcionando momentos de atenção, convivência " +
            "e interação com os voluntários."
    },

    {
        categoria: "CRIANÇAS",
        titulo: "Ação social com crianças",
        imagem: "../03_Imagens/acao-social-kids.PNG",
        alt: "Ação social da Alive Church realizada com crianças",
        descricao:
            "Ação realizada com crianças da comunidade, " +
            "promovendo momentos de acolhimento, interação " +
            "e cuidado por meio do trabalho voluntário."
    }
];


// ========================================
// TEMPLATE DE UMA AÇÃO SOCIAL
// ========================================

function templateAcaoSocial(acao, exibirBadge = true) {

    return `
        <article class="acao-social">

            <img
                src="${acao.imagem}"
                alt="${acao.alt}"
            >

            <div>

                ${
                    exibirBadge
                        ? `<span class="badge">${acao.categoria}</span>`
                        : ""
                }

                <h3>
                    ${acao.titulo}
                </h3>

                <p>
                    ${acao.descricao}
                </p>

            </div>

        </article>
    `;
}


// ========================================
// GERAÇÃO DA LISTA DE AÇÕES
// ========================================

function gerarAcoesSociais(exibirBadge = true) {

    return acoesSociais
        .map(function (acao) {

            return templateAcaoSocial(
                acao,
                exibirBadge
            );

        })
        .join("");
}


// ========================================
// TEMPLATES DAS PÁGINAS
// ========================================

function templateInicio() {

    return `
        <section>

            <h2>
                Sobre a Assistência Social
            </h2>

            <p>
                O Ministério de Assistência Social da Alive Church
                desenvolve ações voltadas ao cuidado, acolhimento
                e apoio às pessoas e famílias da comunidade.
            </p>

            <p>
                Por meio de projetos e iniciativas sociais,
                buscamos aproximar pessoas que desejam ajudar
                daqueles que necessitam de apoio.
            </p>

        </section>


        <section>

            <h2>
                Nossas ações
            </h2>

            <p>
                Conheça algumas das ações realizadas pelo
                Ministério de Assistência Social da Alive Church.
            </p>

            ${gerarAcoesSociais(false)}

            <a
                href="#projetos"
                data-rota="projetos"
            >
                Conheça nossos projetos
            </a>

        </section>


        <section>

            <h2>
                Como ajudar
            </h2>

            <p>
                Você pode contribuir participando das ações como
                voluntário ou apoiando as iniciativas desenvolvidas
                pelo ministério.
            </p>

            <a
                href="#cadastro"
                data-rota="cadastro"
            >
                Quero ser voluntário
            </a>

        </section>
    `;
}


function templateProjetos() {

    return `
        <section>

            <h2>
                Nossas ações
            </h2>

            <p>
                O Ministério de Assistência Social da Alive Church
                busca promover ações de cuidado, acolhimento e apoio
                à comunidade, mobilizando voluntários para servir
                pessoas em diferentes situações.
            </p>

            <div
                class="alerta alerta-informativo"
                role="status"
            >
                <strong>
                    Fique atento:
                </strong>

                as próximas ações e necessidades de doação serão
                divulgadas nesta página.
            </div>

            ${gerarAcoesSociais(true)}

        </section>


        <section>

            <h2>
                Voluntariado
            </h2>

            <p>
                As ações sociais contam com a participação de pessoas
                dispostas a contribuir com seu tempo, conhecimento
                e habilidades para servir à comunidade.
            </p>

            <p>
                Se você deseja participar das próximas ações,
                faça seu cadastro como voluntário.
            </p>

            <a
                href="#cadastro"
                data-rota="cadastro"
            >
                Quero ser voluntário
            </a>

        </section>


        <section id="doacoes">

            <h2>
                Doações
            </h2>

            <p>
                As doações também podem contribuir para a realização
                das ações sociais e para o atendimento das necessidades
                identificadas pelo ministério.
            </p>

            <p>
                As informações sobre campanhas e necessidades específicas
                podem ser divulgadas de acordo com cada ação realizada
                pela Assistência Social.
            </p>

        </section>
    `;
}


function templateCadastro() {

    return `
        <section>

            <h2>
                Cadastro de voluntário
            </h2>

            <p>
                Preencha os dados abaixo para demonstrar seu interesse
                em participar das ações de Assistência Social.
            </p>

            <div
                id="feedback-formulario"
                class="alerta"
                role="alert"
                aria-live="polite"
                hidden
            ></div>

            <form id="form-voluntario" novalidate>

                <fieldset>

                    <legend>
                        Dados pessoais
                    </legend>

                    <label for="nome">
                        Nome completo:
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                        minlength="3"
                        required
                    >

                    <label for="cpf">
                        CPF:
                    </label>

                    <input
                        type="text"
                        id="cpf"
                        name="cpf"
                        placeholder="000.000.000-00"
                        pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                        maxlength="14"
                        required
                    >

                    <label for="nascimento">
                        Data de nascimento:
                    </label>

                    <input
                        type="date"
                        id="nascimento"
                        name="nascimento"
                        required
                    >

                </fieldset>


                <fieldset>

                    <legend>
                        Contato
                    </legend>

                    <label for="email">
                        E-mail:
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="exemplo@email.com"
                        required
                    >

                    <label for="telefone">
                        Telefone:
                    </label>

                    <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="(00) 00000-0000"
                        pattern="[(][0-9]{2}[)] [0-9]{5}-[0-9]{4}"
                        maxlength="15"
                        required
                    >

                </fieldset>


                <fieldset>

                    <legend>
                        Endereço
                    </legend>

                    <label for="cep">
                        CEP:
                    </label>

                    <input
                        type="text"
                        id="cep"
                        name="cep"
                        placeholder="00000-000"
                        pattern="\\d{5}-\\d{3}"
                        maxlength="9"
                        required
                    >

                    <label for="endereco">
                        Endereço:
                    </label>

                    <input
                        type="text"
                        id="endereco"
                        name="endereco"
                        required
                    >

                    <label for="cidade">
                        Cidade:
                    </label>

                    <input
                        type="text"
                        id="cidade"
                        name="cidade"
                        required
                    >

                    <label for="estado">
                        Estado:
                    </label>

                    <select
                        id="estado"
                        name="estado"
                        required
                    >

                        <option value="">
                            Selecione
                        </option>

                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>

                    </select>

                </fieldset>


                <fieldset>

                    <legend>
                        Interesse no voluntariado
                    </legend>

                    <label for="area">
                        Como você gostaria de ajudar?
                    </label>

                    <select
                        id="area"
                        name="area"
                        required
                    >

                        <option value="">
                            Selecione
                        </option>

                        <option value="alimentos">
                            Arrecadação e distribuição de alimentos
                        </option>

                        <option value="roupas">
                            Arrecadação e organização de roupas
                        </option>

                        <option value="acoes">
                            Ações de apoio à comunidade
                        </option>

                        <option value="outros">
                            Outras atividades
                        </option>

                    </select>

                    <label for="mensagem">
                        Conte um pouco sobre como gostaria de contribuir:
                    </label>

                    <textarea
                        id="mensagem"
                        name="mensagem"
                        rows="5"
                    ></textarea>

                </fieldset>


                <button type="submit">
                    Enviar cadastro
                </button>

            </form>

        </section>


        <div
            id="toast-sucesso"
            class="toast"
            role="status"
            aria-live="polite"
            aria-hidden="true"
        >

            <strong>
                Cadastro validado com sucesso!
            </strong>

            <span>
                Os dados obrigatórios foram verificados
                e estão consistentes.
            </span>

        </div>
    `;
}


// ========================================
// PERSISTÊNCIA COM LOCALSTORAGE
// ========================================

function salvarRascunho() {

    const campoNome =
        document.getElementById("nome");

    const campoArea =
        document.getElementById("area");

    const campoMensagem =
        document.getElementById("mensagem");


    if (
        !campoNome ||
        !campoArea ||
        !campoMensagem
    ) {
        return;
    }


    const rascunho = {
        nome: campoNome.value,
        area: campoArea.value,
        mensagem: campoMensagem.value
    };


    const rascunhoJSON =
        JSON.stringify(rascunho);


    localStorage.setItem(
        CHAVE_RASCUNHO,
        rascunhoJSON
    );
}


function recuperarRascunho() {

    const rascunhoJSON =
        localStorage.getItem(
            CHAVE_RASCUNHO
        );


    if (!rascunhoJSON) {
        return;
    }


    try {

        const rascunho =
            JSON.parse(rascunhoJSON);


        const campoNome =
            document.getElementById("nome");

        const campoArea =
            document.getElementById("area");

        const campoMensagem =
            document.getElementById("mensagem");


        if (campoNome && rascunho.nome) {
            campoNome.value = rascunho.nome;
        }


        if (campoArea && rascunho.area) {
            campoArea.value = rascunho.area;
        }


        if (
            campoMensagem &&
            rascunho.mensagem
        ) {
            campoMensagem.value =
                rascunho.mensagem;
        }

    } catch (erro) {

        console.error(
            "Não foi possível recuperar o rascunho.",
            erro
        );
    }
}


// ========================================
// ROTEAMENTO DA SPA
// ========================================

function obterRota() {

    const hash =
        window.location.hash.replace("#", "");

    if (!hash) {
        return "inicio";
    }

    return hash;
}


function renderizarRota() {

    if (!app) {
        return;
    }

    const rota = obterRota();

    window.scrollTo(0, 0);


    switch (rota) {

        case "projetos":

            app.innerHTML =
                templateProjetos();

            document.title =
                "Projetos | Assistência Social | Alive Church";

            break;


        case "cadastro":

            app.innerHTML =
                templateCadastro();

            document.title =
                "Voluntariado | Assistência Social | Alive Church";

            configurarFormulario();

            break;


        case "doacoes":

            app.innerHTML =
                templateProjetos();

            document.title =
                "Doações | Assistência Social | Alive Church";

            setTimeout(
                function () {

                    const secaoDoacoes =
                        document.getElementById("doacoes");

                    if (secaoDoacoes) {
                        secaoDoacoes.scrollIntoView();
                    }

                },
                0
            );

            break;


        case "inicio":

        default:

            app.innerHTML =
                templateInicio();

            document.title =
                "Assistência Social | Alive Church";

            break;
    }
}


// ========================================
// MENU HAMBÚRGUER
// ========================================

const botaoMenu =
    document.querySelector(".menu-hamburguer");

const menuPrincipal =
    document.querySelector(".menu-principal");

if (botaoMenu && menuPrincipal) {

    botaoMenu.addEventListener(
        "click",
        function () {

            const menuAberto =
                menuPrincipal.classList.toggle(
                    "ativo"
                );

            botaoMenu.setAttribute(
                "aria-expanded",
                menuAberto
            );
        }
    );
}


// ========================================
// SUBMENU DROPDOWN
// ========================================

const botaoDropdown =
    document.querySelector(".botao-dropdown");

const itemDropdown =
    document.querySelector(".item-dropdown");

if (botaoDropdown && itemDropdown) {

    botaoDropdown.addEventListener(
        "click",
        function () {

            const dropdownAberto =
                itemDropdown.classList.toggle(
                    "aberto"
                );

            botaoDropdown.setAttribute(
                "aria-expanded",
                dropdownAberto
            );
        }
    );
}


// ========================================
// VALIDAÇÃO VISUAL DOS CAMPOS
// ========================================

function atualizarEstadoCampo(campo) {

    if (!campo) {
        return;
    }


    campo.classList.remove(
        "campo-valido",
        "campo-invalido"
    );


    if (campo.value.trim() === "") {

        if (campo.required) {
            campo.classList.add(
                "campo-invalido"
            );
        }

        return;
    }


    if (campo.checkValidity()) {

        campo.classList.add(
            "campo-valido"
        );

    } else {

        campo.classList.add(
            "campo-invalido"
        );
    }
}


// ========================================
// CONFIGURAÇÃO DO FORMULÁRIO
// ========================================

function configurarFormulario() {

    const campoCPF =
        document.getElementById("cpf");

    const campoTelefone =
        document.getElementById("telefone");

    const campoCEP =
        document.getElementById("cep");

    const formulario =
        document.getElementById(
            "form-voluntario"
        );

    const toastSucesso =
        document.getElementById(
            "toast-sucesso"
        );

    const feedbackFormulario =
        document.getElementById(
            "feedback-formulario"
        );


    if (!formulario) {
        return;
    }


    // ====================================
    // RESTAURAÇÃO DO RASCUNHO
    // ====================================

    recuperarRascunho();


    // ====================================
    // MÁSCARA DO CPF
    // ====================================

    if (campoCPF) {

        campoCPF.addEventListener(
            "input",
            function () {

                let cpf =
                    campoCPF.value.replace(
                        /\D/g,
                        ""
                    );

                cpf = cpf.slice(0, 11);

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

                campoCPF.value = cpf;

                atualizarEstadoCampo(
                    campoCPF
                );
            }
        );
    }


    // ====================================
    // MÁSCARA DO TELEFONE
    // ====================================

    if (campoTelefone) {

        campoTelefone.addEventListener(
            "input",
            function () {

                let telefone =
                    campoTelefone.value.replace(
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

                campoTelefone.value =
                    telefone;

                atualizarEstadoCampo(
                    campoTelefone
                );
            }
        );
    }


    // ====================================
    // MÁSCARA DO CEP
    // ====================================

    if (campoCEP) {

        campoCEP.addEventListener(
            "input",
            function () {

                let cep =
                    campoCEP.value.replace(
                        /\D/g,
                        ""
                    );

                cep = cep.slice(0, 8);

                cep = cep.replace(
                    /(\d{5})(\d)/,
                    "$1-$2"
                );

                campoCEP.value = cep;

                atualizarEstadoCampo(
                    campoCEP
                );
            }
        );
    }


    // ====================================
    // VALIDAÇÃO EM TEMPO REAL
    // ====================================

    const campos =
        formulario.querySelectorAll(
            "input, select, textarea"
        );


    campos.forEach(
        function (campo) {

            campo.addEventListener(
                "input",
                function () {

                    atualizarEstadoCampo(
                        campo
                    );
                }
            );

            campo.addEventListener(
                "change",
                function () {

                    atualizarEstadoCampo(
                        campo
                    );
                }
            );
        }
    );


    // ====================================
    // SALVAMENTO AUTOMÁTICO DO RASCUNHO
    // ====================================

    const campoNome =
        document.getElementById("nome");

    const campoArea =
        document.getElementById("area");

    const campoMensagem =
        document.getElementById("mensagem");


    if (campoNome) {

        campoNome.addEventListener(
            "input",
            salvarRascunho
        );
    }


    if (campoArea) {

        campoArea.addEventListener(
            "change",
            salvarRascunho
        );
    }


    if (campoMensagem) {

        campoMensagem.addEventListener(
            "input",
            salvarRascunho
        );
    }


    // ====================================
    // ENVIO E VERIFICAÇÃO DO FORMULÁRIO
    // ====================================

    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            let primeiroCampoInvalido =
                null;


            campos.forEach(
                function (campo) {

                    atualizarEstadoCampo(
                        campo
                    );

                    if (
                        !campo.checkValidity() &&
                        primeiroCampoInvalido === null
                    ) {

                        primeiroCampoInvalido =
                            campo;
                    }
                }
            );


            // =================================
            // FORMULÁRIO INVÁLIDO
            // =================================

            if (!formulario.checkValidity()) {

                if (feedbackFormulario) {

                    feedbackFormulario.hidden =
                        false;

                    feedbackFormulario.className =
                        "alerta alerta-erro";

                    feedbackFormulario.innerHTML =
                        "<strong>Revise o formulário:</strong> " +
                        "existem campos obrigatórios vazios " +
                        "ou preenchidos em formato inválido.";
                }


                if (primeiroCampoInvalido) {
                    primeiroCampoInvalido.focus();
                }

                return;
            }


            // =================================
            // FORMULÁRIO VÁLIDO
            // =================================

            if (feedbackFormulario) {

                feedbackFormulario.hidden =
                    true;

                feedbackFormulario.textContent =
                    "";
            }


            salvarRascunho();


            if (toastSucesso) {

                toastSucesso.classList.add(
                    "ativo"
                );

                toastSucesso.setAttribute(
                    "aria-hidden",
                    "false"
                );


                setTimeout(
                    function () {

                        toastSucesso.classList.remove(
                            "ativo"
                        );

                        toastSucesso.setAttribute(
                            "aria-hidden",
                            "true"
                        );

                    },
                    4000
                );
            }
        }
    );
}


// ========================================
// EVENTO DE NAVEGAÇÃO DA SPA
// ========================================

window.addEventListener(
    "hashchange",
    renderizarRota
);


// ========================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ========================================

renderizarRota();