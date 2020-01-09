
var randomStart = 1;
var player1Avatar = 'cross';
var player2Avatar = 'circle';
var counter = 0;
var winner = null;
var gameFinished = 0;
var player1Name = 'Player 1';
var player2Name = 'Player 2';
var playingPlayer = player1Name;
var numberOfGames = 1;
var player1Score = 0;
var player2Score = 0;
var nilGame = 0;
var imgP1, imgP2, context1, context2;


var allDivs = document.querySelectorAll('.box');
var allAvatars = document.querySelectorAll('.cell');
var resetBtn = document.querySelector('.resetBtn');
var submitGameBtn = document.querySelector('.submitGames');
var submitP1Btn = document.querySelector('.submitP1Name');
var submitP2Btn = document.querySelector('.submitP2Name');
var selectP1AvatarBtn = document.querySelector('.p1Select');
var selectP2AvatarBtn = document.querySelector('.p2Select');
var resetAvatarBtn = document.querySelector('.resetAvatar');

var audioError = new Audio('./sound/error_sound.mp3');
var audioP1 = new Audio('./sound/default1.wav');
var audioP2 = new Audio('./sound/default2.wav');
var audioResAv = new Audio('./sound/resAv.wav');
var audioThankYou = new Audio('./sound/thankYou.wav');


document.querySelector('.displayScore').textContent = `${player1Name} = ${player1Score}, ${player2Name} = ${player2Score}`;
document.querySelector('.currentPlayer').textContent = `${playingPlayer} is playing`;


var handleNumGames = function () {
    numberOfGames = Number(document.querySelector('.numberGames').value);
    if(numberOfGames === 0) {
        numberOfGames = 1;
    }
    console.log(numberOfGames);
    document.querySelector('.displayGameLeft').textContent = `Games left = ${numberOfGames}`;
}

var winnerHandlingFn = function (winner){
    document.querySelector('.generalMessage').textContent = `The winner of this game is ${winner}`;
    if(winner === player1Name) {
        player1Score++
    } else {
        player2Score++
    }
    document.querySelector('.displayScore').textContent = `${player1Name} = ${player1Score}, ${player2Name} = ${player2Score}`;
    if(numberOfGames > 0) {
        numberOfGames -= 1;
        document.querySelector('.displayGameLeft').textContent = `Games left = ${numberOfGames}`;
    } else {
        document.querySelector('.displayGameLeft').textContent = `Games left = 0`;

    }
}

var checkWinner = function () {
    // Check all winning conditions for player 1:
    if (document.querySelector('.one').classList.contains(player1Avatar) &&
        document.querySelector('.two').classList.contains(player1Avatar) &&
        document.querySelector('.three').classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
    } else if (document.querySelector('.four').classList.contains(player1Avatar) &&
        document.querySelector('.five').classList.contains(player1Avatar) &&
        document.querySelector('.six').classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
    } else if (document.querySelector('.seven').classList.contains(player1Avatar) &&
        document.querySelector('.eight').classList.contains(player1Avatar) &&
        document.querySelector('.nine').classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
    } else if (document.querySelector('.one').classList.contains(player1Avatar) &&
        document.querySelector('.four').classList.contains(player1Avatar) &&
        document.querySelector('.seven').classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
    } else if (document.querySelector('.two').classList.contains(player1Avatar) &&
        document.querySelector('.five').classList.contains(player1Avatar) &&
        document.querySelector('.eight').classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
    } else if (document.querySelector('.three').classList.contains(player1Avatar) &&
        document.querySelector('.six').classList.contains(player1Avatar) &&
        document.querySelector('.nine').classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
    } else if (document.querySelector('.one').classList.contains(player1Avatar) &&
        document.querySelector('.five').classList.contains(player1Avatar) &&
        document.querySelector('.nine').classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
    } else if (document.querySelector('.three').classList.contains(player1Avatar) &&
        document.querySelector('.five').classList.contains(player1Avatar) &&
        document.querySelector('.seven').classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
        // conditions for player 2 to win
    } else if (document.querySelector('.one').classList.contains(player2Avatar) &&
        document.querySelector('.two').classList.contains(player2Avatar) &&
        document.querySelector('.three').classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if (document.querySelector('.four').classList.contains(player2Avatar) &&
        document.querySelector('.five').classList.contains(player2Avatar) &&
        document.querySelector('.six').classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if (document.querySelector('.seven').classList.contains(player2Avatar) &&
        document.querySelector('.eight').classList.contains(player2Avatar) &&
        document.querySelector('.nine').classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if (document.querySelector('.one').classList.contains(player2Avatar) &&
        document.querySelector('.four').classList.contains(player2Avatar) &&
        document.querySelector('.seven').classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if (document.querySelector('.two').classList.contains(player2Avatar) &&
        document.querySelector('.five').classList.contains(player2Avatar) &&
        document.querySelector('.eight').classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if (document.querySelector('.three').classList.contains(player2Avatar) &&
        document.querySelector('.six').classList.contains(player2Avatar) &&
        document.querySelector('.nine').classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if (document.querySelector('.one').classList.contains(player2Avatar) &&
        document.querySelector('.five').classList.contains(player2Avatar) &&
        document.querySelector('.nine').classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if (document.querySelector('.three').classList.contains(player2Avatar) &&
        document.querySelector('.five').classList.contains(player2Avatar) &&
        document.querySelector('.seven').classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if(counter === 9 && winner === null) {
        nilGame = 1;
        document.querySelector('.generalMessage').textContent = `It's a draw! Try again!`;
    }
}

var handleClick = function (event) {
    if(gameFinished === 1) {
        return
    }
    var boxClicked = event.target;
    if ((boxClicked.classList.contains(player1Avatar)) || (boxClicked.classList.contains(player2Avatar)) || (boxClicked.querySelector('img') !== null)) {
        console.log('already clicked')
        document.querySelector('.generalMessage').textContent = `This cell is already selected!`;
        return;
    }
    if(playingPlayer === player1Name) {
        if(imgP1) {
            var imgTag = document.createElement('img')
            imgTag.src = imgP1;
            boxClicked.appendChild(imgTag);
        } else {
            boxClicked.classList.add(player1Avatar)
        }
        counter++;
        audioP1.play();
        checkWinner();
        playingPlayer = player2Name;
        document.querySelector('.currentPlayer').textContent = `${playingPlayer} is playing`;
        document.querySelector('.generalMessage').textContent = ``;
    } else {
        if(imgP2) {
            var imgTag = document.createElement('img')
            imgTag.src = imgP2;
            boxClicked.appendChild(imgTag);
        } else {
            boxClicked.classList.add(player2Avatar)
        }
        counter++;
        audioP2.play();
        checkWinner();
        playingPlayer = player1Name;
        document.querySelector('.currentPlayer').textContent = `${playingPlayer} is playing`;
        document.querySelector('.generalMessage').textContent = ``;
    }
    if((counter === 9) || winner !== null) {     // check for winner
        gameFinished = 1;      
    } 
}

var resetGame = function (){
    audioThankYou.play();
    gameFinished = 0;
    counter = 0;
    playingPlayer = player1Name;
    winner = null;
    if(numberOfGames === 0) {
        player1Score = 0;
        player2Score = 0;
    }
    document.querySelector('.currentPlayer').textContent = `${playingPlayer} is playing`;
    document.querySelector('.displayScore').textContent = `${player1Name} = ${player1Score}, ${player2Name} = ${player2Score}`;
    document.querySelector('.generalMessage').textContent = ``;
    allDivs.forEach(function(div){
        div.classList.remove(player1Avatar)
        div.classList.remove(player2Avatar)
        if(div.querySelector('img') !== null){
            div.querySelector('img').remove();
        }
    })
}

var p1Name = function () {
    player1Name = document.querySelector('.player1NameInput').value;
    playingPlayer = player1Name;
    document.querySelector('.displayScore').textContent = `${player1Name} = ${player1Score}, ${player2Name} = ${player2Score}`;
    document.querySelector('.currentPlayer').textContent = `${playingPlayer} is playing`;
}

var p2Name = function () {
    player2Name = document.querySelector('.player2NameInput').value;
    document.querySelector('.displayScore').textContent = `${player1Name} = ${player1Score}, ${player2Name} = ${player2Score}`;
}

var handleP1AvatarClick = function (event) {
    var avatarClicked = event.target;
    if((`avatar${avatarClicked.dataset.avatar}`) === player2Avatar) {
        console.log('avatar already selected');
        return;
    } else {
    avatarClicked.style.opacity = '0.3';
    player1Avatar = `avatar${avatarClicked.dataset.avatar}`;
    audioP1 = new Audio(`./sound/av${avatarClicked.dataset.avatar}.wav`);
    document.querySelector('.avatars').style.display = 'none';
    }
}

var handleP2AvatarClick = function (event) {
    var avatarClicked = event.target;
    if((`avatar${avatarClicked.dataset.avatar}`) === player1Avatar){
        console.log('avatar already selected');
        return;
    } else {
        // document.querySelector(`.${player2Avatar}`).style.opacity = '1';
        // console.log(avatarClicked);
        avatarClicked.style.opacity = '0.3';
        player2Avatar = `avatar${avatarClicked.dataset.avatar}`;
        audioP2 = new Audio(`./sound/av${avatarClicked.dataset.avatar}.wav`);
        document.querySelector('.avatars').style.display = 'none';
    }
}

var selP1Avatar = function () {
    if(player1Avatar === 'cross' && !counter) {
        document.querySelector('.avatars').style.display = 'grid';
        allAvatars.forEach(function(avatar){
            avatar.removeEventListener('click', handleP2AvatarClick)
            avatar.addEventListener('click', handleP1AvatarClick);
        });
    } else {
        return;
    }
}

var selP2Avatar = function () {
    if(player2Avatar === 'circle' && !counter) {
        document.querySelector('.avatars').style.display = 'grid';
        allAvatars.forEach(function(avatar){
            avatar.removeEventListener('click', handleP1AvatarClick)
            avatar.addEventListener('click', handleP2AvatarClick);
        });
    } else {
        return;
    }
}

var resetAvatar = function () {
    if(!counter) {
        audioResAv.play();
        player1Avatar = 'cross';
        player2Avatar = 'circle';
        document.querySelectorAll('.cell').forEach(function(el) {
            el.style.opacity = 1;
        });
    }
}

allDivs.forEach(function(div){
    div.addEventListener('click', handleClick);
});

resetBtn.addEventListener('click', resetGame);
submitGameBtn.addEventListener('click', handleNumGames);
submitP1Btn.addEventListener('click', p1Name)
submitP2Btn.addEventListener('click', p2Name)
selectP1AvatarBtn.addEventListener('click', selP1Avatar);
selectP2AvatarBtn.addEventListener('click', selP2Avatar);
resetAvatarBtn.addEventListener('click', resetAvatar);

//===============================================================================
// Video

'use strict';

var personaliseAvBtn = document.querySelector('.personaliseAvatar');
const video = document.getElementById('video');
const canvas1 = document.getElementById('canvas1');
const canvas2 = document.getElementById('canvas2');
const snap1 = document.getElementById("snap1");
const snap2 = document.getElementById("snap2");
const errorMsgElement = document.querySelector('span#errorMsg');
const picSize = 100;

const constraints = {
  audio: false,
  video: {
    width: picSize, height: picSize
  }
};

// Access webcam
async function init() {
    if(counter === 0) {
      try {
            const stream = await navigator.mediaDevices.getUserMedia(constraints);
            handleSuccess(stream);
        } catch (e) {
            errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
        }
    }
}

// Success
function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
}

context1 = canvas1.getContext('2d');
context2 = canvas2.getContext('2d');


personaliseAvBtn.addEventListener('click', init);


// Draw image
snap1.addEventListener("click", function() {
    if(counter === 0){
        context1.drawImage(video, 0, 0, picSize, picSize);
        imgP1 = canvas1.toDataURL();
        }
});
snap2.addEventListener("click", function() {
    if(counter === 0) {
        context2.drawImage(video, 0, 0, picSize, picSize);
        imgP2 = canvas2.toDataURL();
    }
});



































// allItems.forEach(function(item){
//     item.addEventListener('click', handleClick);
// });
// console.log(boxClicked);
// console.log(`you clicked ${boxClicked.classList}`);
// console.log(document.querySelectorAll('.circle').length);
// boxClicked.style.backgroundColor = 'red';
// boxClicked.classList.toggle('completed')
// if (itemClicked.classList)
// console.log(itemClicked.classList);
// (document.querySelectorAll('.completed'.length === 6)
// document.querySelectorAll('.item')[0].classList.contains('cats')
