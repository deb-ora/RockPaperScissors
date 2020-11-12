const game = () => {
  let pScore = 0;
  let cScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  //Jogar o jogo
  const playMatch = () => {
    //preciso das options do jogador e do pc
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const pcHand = document.querySelector(".pc-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      //pegar as duas maos e tirar a animacao shake dps q terminar
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    //computer options - gerar um numero random e associar a uma opcao
    const pcOptions = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //this vai ser o que for clicado
        //escolhas do pc
        const pcNumber = Math.floor(Math.random() * 3);
        //passar as opcoes da array para o numero random
        const pcChoice = pcOptions[pcNumber];
        console.log(pcChoice);

        //chamar compareHands com delay apos animation terminar
        setTimeout(() => {

            compareHands(this.textContent, pcChoice);
          //Mostrar imagem das options. this vai ser = ao q for clicado
          playerHand.src = `./utils/${this.textContent}.png`;
          pcHand.src = `./utils/${pcChoice}.png`;
        }, 2000);

        playerHand.style.animation = "shakePlayer 2s ease";
        pcHand.style.animation = "shakePc 2s ease";
      });
    });
  };

  //funcao para atualizar score, tem que atualizar cada vez que if/else rodar
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const pcScore = document.querySelector(".pc-score p");
    playerScore.textContent = pScore;
    pcScore.textContent = cScore;
  };

  //funct, recebendo as opcoes das maos,  para comparar maos, com if/elses, que vai ser chamada sempre q playmatch for clicado
  const compareHands = (playerChoice, pcChoice) => {
    const winner = document.querySelector(".winner");
    //conferir se empatou
    if (playerChoice === pcChoice) {
      winner.textContent = "It`s a tie";
      return;
    }

    if (playerChoice === "rock") {
      if (pcChoice === "scissors") {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === "paper") {
      if (pcChoice === "rock") {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }

    if (playerChoice === "scissors") {
      if (pcChoice === "paper") {
        winner.textContent = "Player wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
  };

  //chamar todas inner funcs :
  startGame();
  playMatch();
};

game();
