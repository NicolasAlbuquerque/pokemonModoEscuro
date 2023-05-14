//Objetivo 1 - Quando clicar no botão troca de tema, adicionar a classe modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para lua.

// Passo 1 - Pegar no JS o elemento HTML correspondente ao botão de troca de tema.
// Passo 2 - pegar no JS o elemento HTML correspondente ao body
// Passo 3 - Identificar o clique do usuário no botão de troca de tema
// Passo 4 - Adicionar a classe modo-escuro no Body
// Passo 5 - Trocar a imagem do botão de alterar tema para lua.

//Objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar a imagem pro sol  

// Passo 6 - Verificar se o body já tem a classe modo-escuro.
// Passo 7 - Remover a classe  modo-escuro do body.
// Passo 8 - Trocar a imagem do botão de alterar tema para sol.
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const corpo = document.querySelector("body");
const imagemBotaoTrocaDetema = document.querySelector(".imagem-botao"); //variavel do passo 5


botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = corpo.classList.contains("modo-escuro"); //variável guardando true or false
        corpo.classList.toggle('modo-escuro')
    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDetema.setAttribute('src', './imagens/sun.png')
    } else {
        imagemBotaoTrocaDetema.setAttribute("src", "./imagens/moon.png ");
    }
});
