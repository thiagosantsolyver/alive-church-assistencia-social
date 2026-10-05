// ========================================
// TEMPLATES DA APLICAÇÃO
// ALIVE CHURCH
// ========================================


// ========================================
// TEMPLATE DE UMA AÇÃO SOCIAL
// ========================================

function templateAcaoSocial(
    acao,
    exibirBadge = true
) {

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

function gerarAcoesSociais(
    exibirBadge = true
) {

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
// TEMPLATE - INÍCIO
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


// ========================================
// TEMPLATE - PROJETOS
// ========================================

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


// ========================================
// TEMPLATE - CADASTRO
// ========================================

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

            <form
                id="form-voluntario"
                novalidate
            >

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