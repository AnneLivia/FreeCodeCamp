// Tentar depois uma forma de fazer com que o usuario escolha seu simbolo
function chooseSimbol(id)
{
    var simbol = document.getElementById(id).innerHTML;
    if(simbol == 'X'){
        startGame("x","o");
    } else {
        startGame("o","x");
    }
}

function mudarDePagina(num){
    if(num == '1')
        location.href="tictactoe.html";
    else
        location.href="index.html";
}

function startGame(uSimbol, cSimbol)
{
    // Tentar depois uma forma de utilizar o que o usuario escolheu
    if(uSimbol == "x" && cSimbol == "o"){
        document.turn = "x";
        document.comp = "o";
    } else {
        document.turn = "o";
        document.comp = "x";
    }
    document.compTurn = false;
    document.winner = 0;
    document.cont = 0;
    document.ja = false;
}

function changeColor(fullAdress)
{
    if(!document.compTurn)
        fullAdress.style.color = "#f7ba36";
    else
        fullAdress.style.color = "#f736a3";
}

function nextMove(square)
{
    var freeSpace = document.getElementById(square).innerHTML;
    if(!(freeSpace == 'x' || freeSpace == 'o')){
        if(!document.compTurn){
            changeColor(document.getElementById(square));
            document.getElementById(square).innerHTML = document.turn;
            document.compTurn = true;
        } else {
            changeColor(document.getElementById(square));
            document.getElementById(square).innerHTML = document.comp;
            document.compTurn = false;
        }
        document.cont++;
    }
    winner();
}

function winner(){
    var square1 = document.getElementById('square1').innerHTML;
    var square2 = document.getElementById('square2').innerHTML;
    var square3 = document.getElementById('square3').innerHTML;
    var square4 = document.getElementById('square4').innerHTML;
    var square5 = document.getElementById('square5').innerHTML;
    var square6 = document.getElementById('square6').innerHTML;
    var square7 = document.getElementById('square7').innerHTML;
    var square8 = document.getElementById('square8').innerHTML;
    var square9 = document.getElementById('square9').innerHTML;
    if(square1 == 'x' && square5 == 'x' && square9 == 'x'){
        document.winner = 1;
    } else if (square1 == 'x' && square4 == 'x' && square7 == 'x') {
        document.winner = 1;
    } else if (square1 == 'x' && square2 == 'x' && square3 == 'x') {
        document.winner = 1;
    } else if (square9 == 'x' && square8 == 'x' && square7 == 'x') {
        document.winner = 1;
    } else if (square9 == 'x' && square6 == 'x' && square3 == 'x') {
        document.winner = 1;
    } else if (square3 == 'x' && square5 == 'x' && square7 == 'x') {
        document.winner = 1;
    } else if (square8 == 'x' && square5 == 'x' && square2 == 'x') {
        document.winner = 1;
    } else if (square6 == 'x' && square5 == 'x' && square4 == 'x') {
        document.winner = 1;
    } else if(document.cont == 9 && document.winner != 2 && document.winner != 1) {
        document.winner = 3; // empate
    }

    if(square1 == 'o' && square5 == 'o' && square9 == 'o'){
        document.winner = 2;
    } else if (square1 == 'o' && square4 == 'o' && square7 == 'o') {
        document.winner = 2;
    } else if (square1 == 'o' && square2 == 'o' && square3 == 'o') {
        document.winner = 2;
    } else if (square9 == 'o' && square8 == 'o' && square7 == 'o') {
        document.winner = 2;
    } else if (square9 == 'o' && square6 == 'o' && square3 == 'o') {
        document.winner = 2;
    } else if (square3 == 'o' && square5 == 'o' && square7 == 'o') {
        document.winner = 2;
    } else if (square8 == 'o' && square5 == 'o' && square2 == 'o') {
        document.winner = 2;
    } else if (square6 == 'o' && square5 == 'o' && square4 == 'o') {
        document.winner = 2;
    } else if(document.cont == 9 && document.winner != 2 && document.winner != 1) {
        document.winner = 3; // empate
    }

    if(document.winner == 1) {
        location.href="telaWinner.html";
    } else if(document.winner == 2) {
        location.href="telaWinner2.html";
    } else if(document.winner == 3) {
        location.href="telaEmpate.html";
    }
}
