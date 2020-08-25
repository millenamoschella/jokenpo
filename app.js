let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;

// VARIÁVEIS PONTUAÇÕES
const pontosUsuarios_span = document.querySelector("#pontosUsuarios");
const pontosComputador_span = document.querySelector("#pontosComputador");
const pontuacao_p = document.querySelector('#pontuacao');


// VARIÁVEL PARÁGRAFO RESULTADO
const textoResultado_p = document.querySelector("#texto-resultado");
const jogadaComputador_p = document.querySelector("#jogadaComputador");
const jogadaUsuario_p = document.querySelector("#jogadaUsuario");


// VARIÁVEIS BOTÕES
const botaoPapel_img = document.querySelector("#papel");
const botaoPedra_img = document.querySelector("#pedra");
const botaoTesoura_img = document.querySelector("#tesoura");


// VARIÁVEIS IMAGENS
let imagemPapel = "<img src='./images/papel.png'>";
let imagemPedra = "<img src='./images/pedra.png'>";
let imagemTesoura = "<img src='./images/tesoura.png'>";


function jogo(cliqueDoUsuario) {
    // AÇÃO DO COMPUTADOR
    jogadasPossiveisComputador = ["papel", "pedra", "tesoura"];
    jogadaRamdomica = Math.floor(Math.random() * 3);
    cliqueDoComputador = jogadasPossiveisComputador[jogadaRamdomica];



    function jogadaCompImagem() {

        if (cliqueDoComputador == 'papel') {
            return imagemPapel;
        } else if (cliqueDoComputador == 'pedra') {
            return imagemPedra;
        } else {
            return imagemTesoura;
        }
    }

    function jogadaUserImagem() {

        if (cliqueDoUsuario == 'papelBotao') {
            return imagemPapel;
        } else if (cliqueDoUsuario == 'pedraBotao') {
            return imagemPedra;
        } else {
            return imagemTesoura;
        }
    }


    switch (cliqueDoUsuario + cliqueDoComputador) {

        // CASO VITÓTIA
        case "papelBotaopedra":
        case "tesouraBotaopapel":
        case "pedraBotaotesoura":

            textoResultado_p.innerHTML = "Você ganhou!";
            textoResultado_p.style = "color: #f2fc6d; text-shadow:text-shadow: 0 0 6px #cae4e1eb";

            jogadaUsuario_p.innerHTML = "User " + jogadaUserImagem();
            jogadaComputador_p.innerHTML = "Comp " + jogadaCompImagem();

            pontuacaoUsuario++;

            pontosUsuarios_span.innerHTML = pontuacaoUsuario;
            pontosUsuarios_span.style = "color: #f2fc6d ";
            break;

            //  CASO DERROTA
        case "pedraBotaopapel":
        case "papelBotaotesoura":
        case "tesouraBotaopapel":

            textoResultado_p.innerHTML = "Game Over";
            textoResultado_p.style = "color: #f15656; text-shadow:text-shadow: 0 0 6px #cae4e1eb";

            jogadaUsuario_p.innerHTML = "User " + jogadaUserImagem();
            jogadaComputador_p.innerHTML = "Comp " + jogadaCompImagem();


            pontuacaoComputador++;

            pontosComputador_span.innerHTML = pontuacaoComputador;
            pontosComputador_span.style = "color: #f136c9 ";
            break;

            //  CASO EMPATE
        case "papelBotaopapel":
        case "tesouraBotaotesoura":
        case "pedraBotaopedra":

            textoResultado_p.innerHTML = "Empatou, tente novamente";
            textoResultado_p.style = "color: #f7f77a; text-shadow:text-shadow: 0 0 6px #cae4e1eb";

            jogadaUsuario_p.innerHTML = "User " + jogadaUserImagem();
            jogadaComputador_p.innerHTML = "Comp " + jogadaCompImagem();

            break;

            // RESULTADO DEFAULT
        default:
            textoResultado_p.innerHTML = "Empatou, tente novamente";
    }
}


// EVENTOS DO MOUSE
function eventosMouse() {
    botaoPapel_img.addEventListener("click", () => jogo("papelBotao"));
    botaoPedra_img.addEventListener("click", () => jogo("pedraBotao"));
    botaoTesoura_img.addEventListener("click", () => jogo("tesouraBotao"));
}

eventosMouse()