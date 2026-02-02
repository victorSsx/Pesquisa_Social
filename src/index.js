const perguntas = [
    "Você tem coragem de escolher?",
    "Vai encarar esse desafio?",
    "Topa se arriscar nessa escolha?",
    "Prefere me dar o cu ou perder a vida?"
];
const textosBotoes = [
    "Sim, sem medo!",
    "Pode mandar!",
    "Tô pronto/a pra tudo!",
    "Quando você quiser 😜🍑❤️‍🔥"
];
const textosNegacao = [
    "Não!",
    "Melhor não...😅",
    "Deixa pra lá... 🏃‍♂️",
    "Nem um nem outro 😂"
];
let etapa = 0;

function sim() {
    if (etapa < perguntas.length - 1) {
        etapa++;
        document.getElementById('pergunta').textContent = perguntas[etapa];
        document.getElementById('btn-cu').textContent = textosBotoes[etapa];
        document.getElementById('btn-negacao').textContent = textosNegacao[etapa];
    } else {
        alert('Agora não tem mais volta... você será degustada por mim! 😋🍑 \n Acende o 🔥');
        location.href = "https://www.youtube.com/watch?v=hIZ40ehGu-U";
    }
}

function desvia(btn){
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('Opa, desviei... hehe');
}
function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min + "%");
}
function fecharAlerta() {
    document.getElementById('alerta-volume').style.display = 'none';
    document.getElementById('musica').play();
}
