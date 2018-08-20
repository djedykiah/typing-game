window.addEventListener("load", init);
//Levels 
const levels = {
	easy: 5, 
	medium: 3, 
	hard: 1
} 
// to change level 
const currentLevel = levels.easy;
//Globals
let time = currentLevel;
let score = 0;
let isPlaying;


//DOM elements 
const wordInput = document.querySelector("#word-input");
const currentWord = document.querySelector("#current-word");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector("#time");
const message = document.querySelector("#message");
const seconds = document.querySelector("#seconds"); 
const btn = document.getElementById("startbtn");


const words = [
	"telephone",
	"chief",
	"flawless",
	"deer",
	"left",
	"destroy",
	"guitar",
	"pull",
	"dysfunctional",
	"arrest",
	"messy",
	"chop",
	"spoon",
	"tacit",
	"rescue",
	"immense",
	"chin",
	"recognise",
	"rain",
	"coach",
	"thunder",
	"dress",
	"spicy",
	"humorous"

]; 

// Initialize game
function init() { 
	seconds.innerHTML = currentLevel;
	// Load word from array 
	showWord(words);  
	// Start matching on word input 
	wordInput.addEventListener("input", startMatch);
	// Call countdown every second 
	setInterval(countdown, 1000);  
	//Check game status 
	setInterval(checkStatus, 50); 
} 

// Start match 
function startMatch () {
	if(matchWords() ) {
		isPlaying = true; 
		time = currentLevel + 1; 
		showWord(words); 
		wordInput.value = ""; 
		score++; 

	} 
	if(score === -1) {
		scoreDisplay.innerHTML = 0; 
	} else {
		scoreDisplay.innerHTML = score; 
	}
	

} 
//Match currentWord to wordInput 
function matchWords() {
	if(wordInput.value === currentWord.innerHTML) {
		message.innerHTML = "correct"; 
		return true;
	} else {
		message.innerHTML = ""; 
		return false; 

	}
}

// Pick & show random word 
function showWord(words) { 
	//generate random array index
	const randIndex = Math.floor(Math.random() * words.length);  
	// Output random word
	currentWord.innerHTML = words[randIndex]; 


} 

// Countdown timer 
function countdown() {
	// Make sure time  is not run out 
	if (time > 0) {
		//Decrement 
		time--; 

	} else if (time === 0){ 
		//Game is over
		isPlaying = false;
	} 

	timeDisplay.innerHTML = time;
} 

// Check game status 
function checkStatus () {
	if(!isPlaying && time === 0) {
		message.innerHTML = "game over"; 
		score = -1;
	}
}