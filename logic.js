let yourScore = 0;
let camputerScore = 0;
const choices = document.querySelectorAll(".option");
const msg = document.querySelector("#sms");
const x = document.querySelector("#yourscore");
const y = document.querySelector("#camputerscore");
let camputerChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const rendomIndex = Math.floor(Math.random() * 3);

  return option[rendomIndex];
};

let showWinner = (userwin)=>{
  if(userwin){
     console.log("you win");
     msg.innerText="you win";
     msg.style.backgroundColor="#82D173";

     
     yourScore++;
     x.innerText = yourScore;
  }else{
    console.log("camputer win");
    msg.innerText="camputer win";
    msg.style.backgroundColor="#ABFAA9";
    

    camputerScore++
    y.innerText=camputerScore;

  }
}
let draw = () => {
  console.log("match was draw");
  msg.innerText="match was draw";
};

let playGame = (userChoise) => {
  const camputerChoiceis = camputerChoice();
  console.log(userChoise," your");
  console.log(camputerChoiceis,"camputer");
   userwin = true;
  if (userChoise === camputerChoiceis) {
    draw();
  } else if (userChoise === "paper") {
    userwin = camputerChoiceis === "scissor" ? false : true;
  } else if (userChoise === "rock") {
    userwin = camputerChoiceis === "paper" ? false : true;
  } else {
    userwin = camputerChoiceis === "rock" ? false : true;
  }
  showWinner(userwin);
};

choices.forEach((c) => {
  console.log(c.innerHTML);
  c.addEventListener("click", () => {
    let userChoice = c.getAttribute("id");
    console.log("choice is made", userChoice);
    playGame(userChoice);
  });
});
