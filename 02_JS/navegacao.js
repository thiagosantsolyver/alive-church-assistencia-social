// ========================================
// NAVEGAÇÃO DA INTERFACE
// ALIVE CHURCH
// ========================================


// ========================================
// CONFIGURAR MENU HAMBÚRGUER
// ========================================

function configurarMenuHamburguer() {

    const botaoMenu =
        document.querySelector(
            ".menu-hamburguer"
        );

    const menuPrincipal =
        document.querySelector(
            ".menu-principal"
        );

    if (
        !botaoMenu ||
        !menuPrincipal
    ) {
        return;
    }


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
// CONFIGURAR DROPDOWN
// ========================================

function configurarDropdown() {

    const botaoDropdown =
        document.querySelector(
            ".botao-dropdown"
        );

    const itemDropdown =
        document.querySelector(
            ".item-dropdown"
        );

    if (
        !botaoDropdown ||
        !itemDropdown
    ) {
        return;
    }


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
// INICIALIZAR NAVEGAÇÃO
// ========================================

function configurarNavegacao() {

    configurarMenuHamburguer();

    configurarDropdown();
}