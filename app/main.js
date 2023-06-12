let livros = [] // variavel livros com array vazio
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json' // api de onde os dados são extraídos
const exibicaoLivros = document.getElementById('livros') // encontra a section do html para exibição dinâmica dos livros
const tarjaValorTotal = document.getElementById('valor_total_livros_disponiveis')

getBuscarLivrosDaAPI()

//faz o fetch da api, converte os dados para json e armazena na variavel livros
async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();

    //aplica o desconto e exibe os livros com desconto
    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivros(livrosComDesconto);
}

//exibe a lista de livros com suas características na tela
function exibirLivros(listaDeLivros) {
    tarjaValorTotal.innerHTML = ''
    exibicaoLivros.innerHTML = ''
    listaDeLivros.forEach((livro) => {
        let disponibilidade = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel"; // verifica a disponibilidade do livro
        exibicaoLivros.innerHTML += `
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt} />
        <h2 class="livro__titulo">
        ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
        <span class="tag">${livro.categoria}</span>
        </div>
        `
    });
}

//aplica o desconto de no valor do livro percorrendo todo o array mantendo todas as caracteristicas originais e alterando apenas o preco
function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return { ...livro, preco: livro.preco - (livro.preco * desconto) }
    })
    return livrosComDesconto;
}

