
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
// var p1Sound = audioP1;
// var p2Sound = audioP2;
var nilGame = 0;

var allDivs = document.querySelectorAll('.box');
var allAvatars = document.querySelectorAll('.cell');
var resetBtn = document.querySelector('.resetBtn');
var submitGameBtn = document.querySelector('.submitGames');
var submitP1Btn = document.querySelector('.submitP1Name');
var submitP2Btn = document.querySelector('.submitP2Name');
var selectP1AvatarBtn = document.querySelector('.p1Select');
var selectP2AvatarBtn = document.querySelector('.p2Select');
var resetAvatarBtn = document.querySelector('.resetAvatar');

// var audio = new Audio('audio_file.mp3');
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

// This function handles everything when a winner wins 
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
    if ((boxClicked.classList.contains(player1Avatar)) || (boxClicked.classList.contains(player2Avatar))) {
        console.log('already clicked')
        document.querySelector('.generalMessage').textContent = `This cell is already selected!`;
        return;
    }
    if(playingPlayer === player1Name) {
        boxClicked.classList.add(player1Avatar)
        counter++;
        audioP1.play();
        checkWinner();
        playingPlayer = player2Name;
        document.querySelector('.currentPlayer').textContent = `${playingPlayer} is playing`;
    } else {
        boxClicked.classList.add(player2Avatar)
        counter++;
        audioP2.play();
        checkWinner();
        playingPlayer = player1Name;
        document.querySelector('.currentPlayer').textContent = `${playingPlayer} is playing`;
    }
    // if(counter === 9 && winner === null) {
    //     nilGame = 1;
    // }
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
// Video trials

document.addEventListener('DOMContentLoaded', function () {

    // References to all the element we will need.
    var video = document.querySelector('#camera-stream'),
        image = document.querySelector('#snap'),
        start_camera = document.querySelector('#start-camera'),
        controls = document.querySelector('.controls'),
        take_photo_btn = document.querySelector('#take-photo'),
        delete_photo_btn = document.querySelector('#delete-photo'),
        download_photo_btn = document.querySelector('#download-photo'),
        error_message = document.querySelector('#error-message');


    // The getUserMedia interface is used for handling camera input.
    // Some browsers need a prefix so here we're covering all the options
    navigator.getMedia = ( navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);


    if(!navigator.getMedia){
        displayErrorMessage("Your browser doesn't have support for the navigator.getUserMedia interface.");
    }
    else{

        // Request the camera.
        navigator.getMedia(
            {
                video: true
            },
            // Success Callback
            function(stream){

                // Create an object URL for the video stream and
                // set it as src of our HTLM video element.
                video.src = window.URL.createObjectURL(stream);

                // Play the video element to start the stream.
                video.play();
                video.onplay = function() {
                    showVideo();
                };
         
            },
            // Error Callback
            function(err){
                displayErrorMessage("There was an error with accessing the camera stream: " + err.name, err);
            }
        );

    }



    // Mobile browsers cannot play video without user input,
    // so here we're using a button to start it manually.
    start_camera.addEventListener("click", function(e){

        e.preventDefault();

        // Start video playback manually.
        video.play();
        showVideo();

    });


    take_photo_btn.addEventListener("click", function(e){

        e.preventDefault();

        var snap = takeSnapshot();

        // Show image. 
        image.setAttribute('src', snap);
        image.classList.add("visible");

        // Enable delete and save buttons
        delete_photo_btn.classList.remove("disabled");
        download_photo_btn.classList.remove("disabled");

        // Set the href attribute of the download button to the snap url.
        download_photo_btn.href = snap;

        // Pause video playback of stream.
        video.pause();

    });


    delete_photo_btn.addEventListener("click", function(e){

        e.preventDefault();

        // Hide image.
        image.setAttribute('src', "");
        image.classList.remove("visible");

        // Disable delete and save buttons
        delete_photo_btn.classList.add("disabled");
        download_photo_btn.classList.add("disabled");

        // Resume playback of stream.
        video.play();

    });


  
    function showVideo(){
        // Display the video stream and the controls.

        hideUI();
        video.classList.add("visible");
        controls.classList.add("visible");
    }


    function takeSnapshot(){
        // Here we're using a trick that involves a hidden canvas element.  

        var hidden_canvas = document.querySelector('canvas'),
            context = hidden_canvas.getContext('2d');

        var width = video.videoWidth,
            height = video.videoHeight;

        if (width && height) {

            // Setup a canvas with the same dimensions as the video.
            hidden_canvas.width = width;
            hidden_canvas.height = height;

            // Make a copy of the current frame in the video on the canvas.
            context.drawImage(video, 0, 0, width, height);

            // Turn the canvas image into a dataURL that can be used as a src for our photo.
            return hidden_canvas.toDataURL('image/png');
        }
    }


    function displayErrorMessage(error_msg, error){
        error = error || "";
        if(error){
            console.error(error);
        }

        error_message.innerText = error_msg;

        hideUI();
        error_message.classList.add("visible");
    }

   
    function hideUI(){
        // Helper function for clearing the app UI.

        controls.classList.remove("visible");
        start_camera.classList.remove("visible");
        video.classList.remove("visible");
        snap.classList.remove("visible");
        error_message.classList.remove("visible");
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
