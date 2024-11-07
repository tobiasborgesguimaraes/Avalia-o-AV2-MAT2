
const perguntas = [
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
        imagem: "\imagens\imagem-pergunta-2.jpg",
        enunciado: "Carros autônomos podem se comunicar com outros carros autônomos na estrada, desde que todos eles tenham conexão com a internet, isso possibilita que ambos tomem decisões conjuntas, sobre qual carro irá passar primeiro, e até mesmo evitando colisões entre ambos, já que todos os seus movimentos são coordenados",
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
let pontos = 0;



function iniciarQuiz() {
    indiceQuestaoAtual = 0;
    pontos = 0;
    botaoProximo.innerHTML = "Proximo";
    mostrarQuestao();
}

function mostrarQuestao() {
    let questaoAtual = perguntas[indiceQuestaoAtual];
    imagemDaQuestao.innerHTML = questaoAtual.imagem;
    enunciadoDaQuestao.innerHTML = questaoAtual.enunciado;
    perguntaDaQuestao.innerHTML = questaoAtual.pergunta;

    questaoAtual.respostas.forEach(resposta => {
        const botao = document.createElement('botao');
        botao.innerHTML = resposta.texto;
        botao.classList.add('botao');
        respostasDaQuestao.appendChild(botao);
    })
}

