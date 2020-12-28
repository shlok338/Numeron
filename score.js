var urlParams=new URLSearchParams(window.location.search);

var score=urlParams.get("score");
var scoreBoard=document.getElementById("score-board");
scoreBoard.innerHTML=score;

var playAgain=document.getElementById("play-again-button");

playAgain.onclick=()=>{
    location.href="./game.html";
}