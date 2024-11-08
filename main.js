
const perguntas = [
    {
        imagem: "\imagens\imagem-pergunta-1.jpg",
        enunciado: "Carros autônomos fazem forte uso de inteligência artificial. Com diversas câmeras ao redor do carro, a IA deve fazer uma análise profunda da imagem para determinar se há obstruções na pista (como um pedestre, ciclista ou mesmo outro carro), ou se é seguro atravessar.",
        pergunta: "Qual é a cor do céu?",
        respostas: [
            { texto: "Azul", correto: true},
            { texto: "Verde", correto: false},
            { texto: "Vermelho", correto: false},
            { texto: "Roxo", correto: false}
        ]
    },
    {
        imagem: "\imagens\imagem-pergunta-2.jpg",
        enunciado: "Carros autônomos podem se comunicar com outros carros autônomos na estrada, desde que todos eles tenham conexão com a internet, isso possibilita que ambos tomem decisões conjuntas, sobre qual carro irá passar primeiro, e até mesmo evitando colisões entre ambos, já que todos os seus movimentos são coordenados.",
        pergunta: "Qual é a cor do céu?",
        respostas: [
            { texto: "Azul", correto: true},
            { texto: "Verde", correto: false},
            { texto: "Vermelho", correto: false},
            { texto: "Roxo", correto: false}
        ]
    },
    {
        imagem: "\imagens\imagem-pergunta-1.jpg",
        enunciado: "Carros autônomos fazem forte uso de inteligência artificial. Com diversas câmeras ao redor do carro, a IA deve fazer uma análise profunda da imagem para determinar se há obstruções na pista (como um pedestre, ciclista ou mesmo outro carro), ou se é seguro atravessar",
        pergunta: "Qual é a cor do céu?",
        respostas: [
            { texto: "Azul", correto: true},
            { texto: "Verde", correto: false},
            { texto: "Vermelho", correto: false},
            { texto: "Roxo", correto: false}
        ]
    },
    {
        imagem: "\imagens\imagem-pergunta-1.jpg",
        enunciado: "Carros autônomos fazem forte uso de inteligência artificial. Com diversas câmeras ao redor do carro, a IA deve fazer uma análise profunda da imagem para determinar se há obstruções na pista (como um pedestre, ciclista ou mesmo outro carro), ou se é seguro atravessar",
        pergunta: "Qual é a cor do céu?",
        respostas: [
            { texto: "Azul", correto: true},
            { texto: "Verde", correto: false},
            { texto: "Vermelho", correto: false},
            { texto: "Roxo", correto: false}
        ]
    }
];


const imagemDaQuestao = document.getElementById('imagem');
const enunciadoDaQuestao = document.getElementById('enunciado');
const perguntaDaQuestao = document.getElementById('pergunta');
const respostasDaQuestao = document.getElementById('respostas');
const botaoProximo = document.getElementById('botao-proximo');


let indiceQuestaoAtual = 0;



function iniciarQuiz() {
    indiceQuestaoAtual = 0;
    botaoProximo.innerHTML = "Proximo";
    mostrarQuestao();
}

function mostrarQuestao() {

    apagarQuestaoAnterior(); // Remove as repostas da questão anterior, para que as novas possam ser adicionadas

    let questaoAtual = perguntas[indiceQuestaoAtual]; // Seleciona a questão 
    imagemDaQuestao.src = `/imagens/imagem-pergunta-${indiceQuestaoAtual+1}.jpg`; // Mostra a imagem da respectiva questao
    enunciadoDaQuestao.innerHTML = questaoAtual.enunciado; // Atualiza o enunciado da questão
    perguntaDaQuestao.innerHTML = questaoAtual.pergunta; // Atualiza a pergunta da questão

    // Adiciona os botões das respostas
    questaoAtual.respostas.forEach(resposta => {
        const botao = document.createElement('button');
        botao.innerHTML = resposta.texto;
        botao.classList.add('botao');
        respostasDaQuestao.appendChild(botao);

        if (resposta.correto) {
            botao.dataset.correto = resposta.correto; // Passa o valor verdadeiro ou falso para o botão 
        }
        botao.addEventListener("click", selecionarResposta); // Evento do clique no botao da resposta
    });
}

function apagarQuestaoAnterior() {
    botaoProximo.style.display = 'none';
    while (respostasDaQuestao.firstChild) {
        respostasDaQuestao.removeChild(respostasDaQuestao.firstChild);
    }
}

// Função recebe o evento, e verifica se o botão clicado é o correto ou o incorreto
function selecionarResposta(e) { 
    const botaoSelecionado = e.target;
    
    if (botaoSelecionado.dataset.correto === "true") { //Verifica se a resposta está correta
        botaoSelecionado.classList.add('correto');
    } else {
        botaoSelecionado.classList.add('incorreto');
    }
    Array.from(respostasDaQuestao.children).forEach(botao => {
        if (botao.dataset.correto === "true") {
            botao.classList.add("correto"); // Deixa a resposta correta verde (para o caso do usuario selecionar a resposta errado)
        }
        botao.disabled = true; // Desativa o botao para que não seja possível clicar em outros botões após selecionar uma resposta
    });
    botaoProximo.style.display = "block"; // Faz aparecer o botao de proximo, para que o usuário possa ir para a próxima pergunta do quiz   
}



//Evento do clique no botao de proximo (para ir para a proxima questão)
botaoProximo.addEventListener("click", ()=>{
    if (indiceQuestaoAtual < perguntas.length - 1) { // Verifica se ainda há questões para serem mostradas, ou se acabaram
        indiceQuestaoAtual++; // Muda para a proxima questão
        mostrarQuestao(); // Mostra a questão
    } else {
        apagarQuestaoAnterior();
        imagemDaQuestao.style.display = "none"; // Tira a imagem da tela
        enunciadoDaQuestao.style.display = "none"; // Tira o enuncaido da tela
        perguntaDaQuestao.innerHTML = "Parabéns, você completou o nosso quiz sobre carros autônomos!! Para jogar novamente, recarregue a página."
    }
}) 


iniciarQuiz();

