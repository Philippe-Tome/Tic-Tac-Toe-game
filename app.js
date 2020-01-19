
// remove black preview when stop recording. Change logic to start recording and stop at each player.
// refactor solutions
// add arrow key play function

// **reset games entries, not clearing all yet.
// **styling second page
// **style the entry submit button
// **stopping the video recording


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
var match = 0;
var imgP1, imgP2, context1, context2;


var allDivs = document.querySelectorAll('.box');
var allAvatars = document.querySelectorAll('.cell');
var startBtn = document.querySelector('.startBtn');
var homeBtn = document.querySelector('.homeBtn');
var resetBtn = document.querySelector('.resetBtn');
var submitGameBtn = document.querySelector('.submitGames');
var submitP1Btn = document.querySelector('.submitP1Name');
var submitP2Btn = document.querySelector('.submitP2Name');
var resetEntriesBtn = document.querySelector('.resetEntries');
var firstPage = document.querySelector('.firstPage');
var secondPage = document.querySelector('.secondPage');
var displayGameLeft = document.querySelector('.displayGameLeft');
var winnerClass = document.querySelector('.winner');
var displayScoreClass = document.querySelector('.displayScore');
var currentPlayerClass = document.querySelector('.currentPlayer');
var oneClass = document.querySelector('.one');
var twoClass = document.querySelector('.two');
var threeClass = document.querySelector('.three');
var fourClass = document.querySelector('.four');
var fiveClass = document.querySelector('.five');
var sixClass = document.querySelector('.six');
var sevenClass = document.querySelector('.seven');
var eightClass = document.querySelector('.eight');
var nineClass = document.querySelector('.nine');
var generalMessage = document.querySelector('.generalMessage');
var player1NameInputClass = document.querySelector('.player1NameInput');
var player2NameInputClass = document.querySelector('.player2NameInput');
var avatarsClass = document.querySelector('.avatars');
var cellClass = document.querySelectorAll('.cell');
var personaliseAvBtn = document.querySelector('.personaliseAvatar');
var video = document.getElementById('video');
var canvas1 = document.getElementById('canvas1');
var canvas2 = document.getElementById('canvas2');
var snap1 = document.getElementById("snap1");
var snap2 = document.getElementById("snap2");
var errorMsgElement = document.querySelector('span#errorMsg');
var numberGamesClass = document.querySelector('.numberGames');



var audioError = new Audio('./sound/error_sound.mp3');
var audioP1 = new Audio('./sound/default1.wav');
var audioP2 = new Audio('./sound/default2.wav');
var audioGameWin = new Audio('./sound/win.wav');
var audioResAv = new Audio('./sound/resAv.mp3');
var audioThankYou = new Audio('./sound/thankYou.wav');
var audioCamera = new Audio('./sound/camera.mp3');


secondPage.style.display = 'none';

displayGameLeft.style.color = 'lightgray';
winnerClass.style.color = 'lightgray';
displayScoreClass.textContent = `${player1Name} = ${player1Score}, ${player2Name} = ${player2Score}`;
currentPlayerClass.textContent = `${playingPlayer} is playing`;


var startGame = function() {
    firstPage.style.display = 'none';
    secondPage.style.display = 'block';
}

var home = function() {
    resetGame();
    firstPage.style.display = 'block';
    secondPage.style.display = 'none';
}

var handleNumGames = function () {
    p1Name();
    p2Name();
    numberOfGames = Number(numberGamesClass.value);
    console.log(numberOfGames);
    if(numberOfGames === 0) {
        numberOfGames = 1;
    } else if(numberOfGames > 1) {
        match = 1;
    }
    displayGameLeft.textContent = `Games left = ${numberOfGames}`;
}

var winnerHandlingFn = function (winner){
    audioGameWin.play();
    winnerClass.textContent = `The winner of this game is ${winner}`;
    winnerClass.style.color = 'red';
    if(winner === player1Name) {
        player1Score++
    } else {
        player2Score++
    }
    displayScoreClass.textContent = `${player1Name} = ${player1Score}, ${player2Name} = ${player2Score}`;
    if(numberOfGames > 1) {
        numberOfGames -= 1;
        displayGameLeft.textContent = `Games left = ${numberOfGames}`;
        displayGameLeft.style.color = 'black';
    } else {
        displayGameLeft.textContent = `Games left = 0`;
        displayGameLeft.style.color = 'black';
        if(match) {
            if (player1Score > player2Score) {
                console.log(`player 1 wins the match`)
                winnerClass.textContent = `The winner of this match is ${player1Name}`;
                winnerClass.style.color = 'red';
            } else {
                winnerClass.textContent = `The winner of this match is ${player2Name}`;
                winnerClass.style.color = 'red';
            }
        }
    }

}

var checkWinner = function () {
    // Check all winning conditions for player 1:
    if (oneClass.classList.contains(player1Avatar) &&
        twoClass.classList.contains(player1Avatar) &&
        threeClass.classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
    } else if (fourClass.classList.contains(player1Avatar) &&
        fiveClass.classList.contains(player1Avatar) &&
        sixClass.classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
    } else if (sevenClass.classList.contains(player1Avatar) &&
        eightClass.classList.contains(player1Avatar) &&
        nineClass.classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
    } else if (oneClass.classList.contains(player1Avatar) &&
        fourClass.classList.contains(player1Avatar) &&
        sevenClass.classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
    } else if (twoClass.classList.contains(player1Avatar) &&
        fiveClass.classList.contains(player1Avatar) &&
        eightClass.classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
    } else if (threeClass.classList.contains(player1Avatar) &&
        sixClass.classList.contains(player1Avatar) &&
        nineClass.classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
    } else if (oneClass.classList.contains(player1Avatar) &&
        fiveClass.classList.contains(player1Avatar) &&
        nineClass.classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
    } else if (threeClass.classList.contains(player1Avatar) &&
        fiveClass.classList.contains(player1Avatar) &&
        sevenClass.classList.contains(player1Avatar)) {
        winner = player1Name;
        winnerHandlingFn(winner);
        // conditions for player 2 to win
    } else if (oneClass.classList.contains(player2Avatar) &&
        twoClass.classList.contains(player2Avatar) &&
        threeClass.classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if (fourClass.classList.contains(player2Avatar) &&
        fiveClass.classList.contains(player2Avatar) &&
        sixClass.classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if (sevenClass.classList.contains(player2Avatar) &&
        eightClass.classList.contains(player2Avatar) &&
        nineClass.classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if (oneClass.classList.contains(player2Avatar) &&
        fourClass.classList.contains(player2Avatar) &&
        sevenClass.classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if (twoClass.classList.contains(player2Avatar) &&
        fiveClass.classList.contains(player2Avatar) &&
        eightClass.classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if (threeClass.classList.contains(player2Avatar) &&
        sixClass.classList.contains(player2Avatar) &&
        nineClass.classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if (oneClass.classList.contains(player2Avatar) &&
        fiveClass.classList.contains(player2Avatar) &&
        nineClass.classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if (threeClass.classList.contains(player2Avatar) &&
        fiveClass.classList.contains(player2Avatar) &&
        sevenClass.classList.contains(player2Avatar)) {
        winner = player2Name;
        winnerHandlingFn(winner);
    } else if(counter === 9 && winner === null) {
        nilGame = 1;
        generalMessage.textContent = `It's a draw! Try again!`;
    }
}

var handleClick = function (event) {
    if(gameFinished === 1) {
        return
    }
    var boxClicked = event.target;
    if ((boxClicked.classList.contains(player1Avatar)) || (boxClicked.classList.contains(player2Avatar)) || (boxClicked.querySelector('img') !== null)) {
        console.log('already clicked')
        generalMessage.textContent = `This cell is already selected!`;
        return;
    }
    if(playingPlayer === player1Name) {
        if(imgP1){
            var imgTag = document.createElement('img')
            imgTag.src = imgP1;
            boxClicked.appendChild(imgTag);
        }
        boxClicked.classList.add(player1Avatar)
        counter++;
        audioP1.play();
        checkWinner();
        playingPlayer = player2Name;
        currentPlayerClass.textContent = `${playingPlayer} is playing`;
    } else {
        if(imgP2){
            var imgTag = document.createElement('img')
            imgTag.src = imgP2;
            boxClicked.appendChild(imgTag);
        }
        boxClicked.classList.add(player2Avatar)
        counter++;
        audioP2.play();
        checkWinner();
        playingPlayer = player1Name;
        currentPlayerClass.textContent = `${playingPlayer} is playing`;
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
    winnerClass.style.color = 'lightgray';
    currentPlayerClass.textContent = `${playingPlayer} is playing`;
    displayScoreClass.textContent = `${player1Name} = ${player1Score}, ${player2Name} = ${player2Score}`;
    generalMessage.textContent = ``;
    allDivs.forEach(function(div){
        div.classList.remove(player1Avatar)
        div.classList.remove(player2Avatar)
        if(div.querySelector('img') !== null){
            div.querySelector('img').remove();
        }
    })
}

var p1Name = function () {
    if(player1NameInputClass.value === player2Name) {
        generalMessage.textContent = `This name has already been taken!`;
        return;
    } else if(player1NameInputClass.value === '') {
        player1Name = "Player 1"
    } else {
        player1Name = player1NameInputClass.value;
        playingPlayer = player1Name;
    }
    displayScoreClass.textContent = `${player1Name} = ${player1Score}, ${player2Name} = ${player2Score}`;
    currentPlayerClass.textContent = `${playingPlayer} is playing`;
}

var p2Name = function () {
    if(player2NameInputClass.value === player1Name) {
        generalMessage.textContent = `This name has already been taken!`;
        return;
    } else if (player2NameInputClass.value === '') {
        player2Name = "Player 2"
    } else {
        player2Name = player2NameInputClass.value;
    }
    displayScoreClass.textContent = `${player1Name} = ${player1Score}, ${player2Name} = ${player2Score}`;
}

var handleP1AvatarClick = function (event) {
    var avatarClicked = event.target;
    avatarClicked.style.opacity = '0.3';
    player1Avatar = `avatar${avatarClicked.dataset.avatar}`;
    audioP1 = new Audio(`./sound/av${avatarClicked.dataset.avatar}.wav`);
    allAvatars.forEach(function(avatar){
        avatar.addEventListener('click', handleP2AvatarClick);
        avatar.removeEventListener('click', handleP1AvatarClick)
    });
}
   
var handleP2AvatarClick = function (event) {
    if(player2Avatar === 'circle') {
        var avatarClicked = event.target;
        if((`avatar${avatarClicked.dataset.avatar}`) === player1Avatar){
            return;
        } else {
            avatarClicked.style.opacity = '0.3';
            player2Avatar = `avatar${avatarClicked.dataset.avatar}`;
            audioP2 = new Audio(`./sound/av${avatarClicked.dataset.avatar}.wav`);
        }
    } return;
}


var resetEntries = function () {
    if(!counter) {
        audioResAv.play();
        player1Name = 'Player 1';
        player2Name = 'Player 2';
        player1Avatar = 'cross';
        player2Avatar = 'circle';
        player1NameInputClass.value = "";
        player2NameInputClass.value = "";
        numberGamesClass.value = null;
        numberOfGames = 1;
        imgP1 = 0;
        imgP2 = 0;
        allAvatars.forEach(function(avatar){
            avatar.addEventListener('click', handleP1AvatarClick);
            avatar.removeEventListener('click', handleP2AvatarClick)
        });
        cellClass.forEach(function(el) {
            el.style.opacity = 1;
        });
    }
}

allDivs.forEach(function(div){
    div.addEventListener('click', handleClick);
});

allAvatars.forEach(function(avatar){
    avatar.addEventListener('click', handleP1AvatarClick);
});

startBtn.addEventListener('click', startGame);
homeBtn.addEventListener('click', home);
resetBtn.addEventListener('click', resetGame);
submitGameBtn.addEventListener('click', handleNumGames);
resetEntriesBtn.addEventListener('click', resetEntries);

//===============================================================================
// Video

'use strict';


var picSize = 100;

var constraints = {
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
    var track = stream.getTracks()[0];  // if only one media track

    snap1.addEventListener("click", function() {
    audioCamera.play();
        if(counter === 0){
            context1.drawImage(video, 0, 0, picSize, picSize);
            imgP1 = canvas1.toDataURL();
        }
    });
    snap2.addEventListener("click", function() {
    audioCamera.play();
        if(counter === 0) {
            context2.drawImage(video, 0, 0, picSize, picSize);
            imgP2 = canvas2.toDataURL();
            track.stop();
        }
    });
}

context1 = canvas1.getContext('2d');
context2 = canvas2.getContext('2d');


personaliseAvBtn.addEventListener('click', init);


// // Draw image
// snap1.addEventListener("click", function() {
//     audioCamera.play();
//     if(counter === 0){
//         context1.drawImage(video, 0, 0, picSize, picSize);
//         imgP1 = canvas1.toDataURL();
//         }
// });
// snap2.addEventListener("click", function() {
//     audioCamera.play();
//     if(counter === 0) {
//         context2.drawImage(video, 0, 0, picSize, picSize);
//         imgP2 = canvas2.toDataURL();
//     }
// });

// var testBtn = document.querySelector('.testBtn');
// testBtn.addEventListener("click", stopMedia)

// function stopMedia () {
//     navigator.getUserMedia({audio: false, video: true},
//         function(stream) {
//             // can also use getAudioTracks() or getVideoTracks()
//             var track = stream.getTracks()[0];  // if only one media track
//             // ...
//             track.stop();
//         },
//         function(error){
//             console.log('getUserMedia() error', error);
//     });
        
// }

//===============================================================================
// Arrow key function

var keyboardTracking = 5;

document.onkeydown = checkKey;

function checkKey(e) {

    // e = e || window.event;

    if (e.keyCode == '38') {
        keyControlTracking -= 3;
        console.log(`key up`);
        // up arrow
    }
    else if (e.keyCode == '40') {
        keyControlTracking += 3;
        console.log(`key down`);
        // down arrow
    }
    else if (e.keyCode == '37') {
        keyControlTracking -= 1;
        console.log(`key left`);
       // left arrow
    }
    else if (e.keyCode == '39') {
        keyControlTracking += 1;
        console.log(`key right`);
       // right arrow
    }
    else if (e.keyCode == '13') {
        console.log(`key enter`);
       // enter
    }
}
