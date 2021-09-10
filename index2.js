const buttons = document.querySelector('#select')
const buttonsTwo = document.querySelector('#selectTwo')
const reload =document.querySelector('#reload')
const mario =document.querySelector('#marioHide')
const bowser =document.querySelector('#bowserHide')
const message =document.getElementById('message')


function playRound(playerNum,computerNum) {

    computerNum =Math.floor(Math.random()*3)

    if (playerNum==computerNum) {
        console.log(1)
        message.innerHTML = "tie, try again!"

    }

    else if (playerNum==0 && computerNum==1) {
        var computerScore = document.getElementById("computerScore");
        computerScore.innerHTML = parseInt(computerScore.innerHTML)+parseInt(1)
        console.log(2)
        message.innerHTML = "bowser wins this round..."

    }

    else if (playerNum==0 && computerNum==2) {
        var playerScore = document.getElementById("playerScore");
        playerScore.innerHTML = parseInt(playerScore.innerHTML)+parseInt(1)
        console.log(3)
        message.innerHTML = "great job! keep going!"

    }

    else if (playerNum==1 && computerNum==0) {
        var playerScore = document.getElementById("playerScore");
        playerScore.innerHTML = parseInt(playerScore.innerHTML)+parseInt(1)
        console.log(4)
        message.innerHTML = "great job! keep going!"

    }

    else if (playerNum==1 && computerNum==2) {
        var computerScore = document.getElementById("computerScore");
        computerScore.innerHTML = parseInt(computerScore.innerHTML)+parseInt(1)
        console.log(5)
        message.innerHTML = "bowser wins this round..."

    }

    else if (playerNum==2 && computerNum==1) {
        var playerScore = document.getElementById("playerScore");
        playerScore.innerHTML = parseInt(playerScore.innerHTML)+parseInt(1)
        console.log(6)
        message.innerHTML = "great job! keep going!"

    }

    else if (playerNum==2 && computerNum==0) {
        var computerScore = document.getElementById("computerScore");
        computerScore.innerHTML = parseInt(computerScore.innerHTML)+parseInt(1)
        console.log(7)
        message.innerHTML = "bowser wins this round..."

    }
}


function over() {

    if (playerScore.innerHTML==5){
        buttons.classList.add('hide')
        buttonsTwo.classList.add('hide')
        reload.classList.remove('hide')
        mario.classList.remove('hide')
        message.innerHTML = "wahoo! you did it!"

    }

    else if (computerScore.innerHTML==5){
        buttons.classList.add('hide')
        buttonsTwo.classList.add('hide')
        reload.classList.remove('hide')
        bowser.classList.remove('hide')
        message.innerHTML = "are you really gonna let him laugh at you?"

    }

}