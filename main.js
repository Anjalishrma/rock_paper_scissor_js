let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user_score");
const comp_score = document.querySelector("#comp_score");
const your_choice = document.querySelector("#your_choice span")
const comp_choice = document.querySelector("#comp_choice span")

const genCompChoice = () =>{
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () =>{
    msg.innerText = "Game Draw. Play again";
    msg.style.backgroundColor = "#5f5c5c";
    console.log("Game Draw" );
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        user_score.innerText = userScore;
        msg.innerText =  `You win !! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        console.log("You Win !!");
    }
    else{
        compScore++;
        comp_score.innerText = compScore;
        msg.innerText = `You lost :(. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
        console.log("You Lost :(");
    }
}

const playgame = (userChoice) =>{
    const compChoice = genCompChoice();
    console.log("computer Choice", compChoice);
    comp_choice.innerText = `${compChoice}`
    if(userChoice === compChoice){
        drawGame(); 
    }
    else{
        let userWin = true;
        if(userWin === "rock"){ 
            //paper, scissor
            userWin = compChoice === "paper" ? false :  true; 
        }
        else if(userWin === "paper"){ 
            //rock, scissor
            userWin = compChoice === "scissor" ? false :  true; 
        }
        else{
            //paper, rock
            userWin = compChoice === "rock" ? false : true;
        }
        console.log("User Choice", userChoice);
        your_choice.innerText = `${userChoice}`
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})