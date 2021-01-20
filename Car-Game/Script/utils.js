const framesPerSecond = 60;

function startGame(){
    document.getElementById('text').style.display = 'none';
    document.getElementById('instruction').style.display = 'none';
    document.getElementById('game-over').style.display = 'none';
    new GameCanvas();

}

function randomNumGenerator(num1, num2){
    return Math.floor(Math.random() * (Math.floor(num2) - Math.ceil(num1))) + Math.ceil(num1);
}
