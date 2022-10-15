/*
    Objetivo - quando clicarmos na aba temos que mostrar
    o conteudo da aba que foi clicada pelo usuario e
    esconder o conteudo da aba anterior.
*/

/* primeiro passo: dar um jeito de pegar os elementos que
    representam as abas no html*/

const tabs = document.querySelectorAll(".tab");

/*segundo passo: dar um jeito de identificar o click no
    elemento da aba*/

tabs.forEach(tab => {
    tab.addEventListener("click", function () {

        if (tab.classList.contains("selected")) {
            return;
        }

        selectedTab(tab);

        shownTab(tab);

    });
});

function selectedTab(tab) {
    /*terceiro passo: quando o usuario clicar, desmarcar a aba
        selecionada*/
    const tabSelected = document.querySelector(".tab.selected");
    tabSelected.classList.remove("selected");

    //quarto passo: marcar a aba clicada como selecionada
    tab.classList.add("selected");
}

function shownTab(tab) {
    //quinto passo: esconder o conteudo anterior
    const informationSelected = document.querySelector(".information.selected");
    informationSelected.classList.remove("selected");

    //sexto passo: mostrar conteudo da aba selecionada
    const idElementInformationTab = `information-${tab.id}`;

    const informationToBeShown = document.getElementById(idElementInformationTab);
    informationToBeShown.classList.add("selected");
}
