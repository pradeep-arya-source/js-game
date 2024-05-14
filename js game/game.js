let userScore = 0;
let compScore = 0;

// NOW WE SELECTED ALL CLASS USING QUERSELECTORALL
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");


// NOW WE GENERATE COMPUTER CHOICE 
const genCompChice = () =>{
    const option = ["rock","paper","scissors"];
    const randIndx = Math.floor(Math.random() * 3);
    return option[randIndx];
}
const drawGame = () => {
    console.log("game was drwa...");
    msg.innerText = "GAME DRWA HO GYA BABU"
    msg.style.backgroundColor = "white";
}

const showWinner = (userWin, userChoice, comChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `GOOD JOB LONDE TU JIT GYA ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `NIKAL GAI HAVA BAAZI TERI , HAAR GYA TU ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
// NOW WE CREATE A FUNCITON WHICH USE PLAY THE GMAE
const playGame = (userChoice) =>{
    console.log("user choice =", userChoice);
    // SELECT COMPUTER CHOICE
    const comChoice = genCompChice();
    console.log("comp choice =",comChoice);

    // WE USE IF CONDITION FOR MATCH
    if (userChoice === comChoice){
        // DRAW MATCH
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //SCISSERS, PAPER
            userWin = comChoice === "paper" ? false: true;
        }else if(userChoice === "paper"){
            //SCISSERS, ROCK
            userWin = comChoice === "scissers"? false: true;
        }else{
            //ROCK,PAPER
            userWin = comChoice === "rock"? false: true;
        }
        showWinner(userWin, userChoice, comChoice);
            
        
    }
}
// NOW WE USE FOREACH FUNCTION AND MAKE CLICK FUCNTION
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        // WE USE GET-ATTRIBUTE FOR SELCTED CHOICE ID 
        const userChoice = choice.getAttribute("id");
       playGame(userChoice)
    });
});