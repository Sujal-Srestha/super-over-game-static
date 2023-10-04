/* accessing the elements to be operated on */
const $balls = document.getElementsByClassName("ball");
const $team1score = document.getElementById("ind_score");
const $team1wickets = document.getElementById("ind_wickets");
const $team2score = document.getElementById("pak_score");
const $team2wickets = document.getElementById("pak_wickets");
const $strikeButton = document.getElementById("strike");
const $resetButton = document.getElementById("reset");

/* setting initial scores and wickets */
var team1score =  0;
var team2score =  0;
var team1wickets =  0;
var team2wickets =  0;

/* setting turns */
var turn = 1;
var team1BallsFaced = 0;
var team2BallsFaced = 0;
/* possible outcomes */
const possibleOutcomes = [0,1,2,3,4,5,6,'W'];

/* reset function */
$resetButton.onclick = () => {
    window.location.reload();
};

/* update score function */
$strikeButton.onclick= () => {
    const score = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];

    /* for indian team */
    if(turn === 1){
        team1BallsFaced ++;
        document.querySelector( `#ind_scoreboard .ball:nth-child(${team1BallsFaced})`).textContent = score;

        if(score === 'W'){
            team1wickets++;
            $team1wickets.textContent = team1wickets;
        }
        else{
            team1score += score;
            $team1score.textContent = team1score;
        }

        if(team1BallsFaced == 6 || team1wickets == 2 ){
            turn = 2;
        }
    }
    
    /* for pakistani team */
    if(turn === 2){
        team2BallsFaced ++;
        document.querySelector(`#pak_scoreboard .ball:nth-child(${team2BallsFaced})`).textContent = score;

        if(score === 'W'){
            team2wickets++;
            $team2wickets.textContent = team2wickets;
        }
        else{
            team2score += score;
            $team2score.textContent = team2score;
        }

        if(team2BallsFaced == 6 || team2wickets == 2 || team2score>team1score){
            turn = "gameOver";
            gameOver();
        }
    }

}

/* result or game over function */
function gameOver() {
    if (team1score > team2score) {
        alert("IND wins");
    }
    if (team2score > team1score) {
        alert("PAK wins");
    }
    if (team2score === team1score) {
        alert("It is anothe superover!");
    }
    window.location.reload();
}
