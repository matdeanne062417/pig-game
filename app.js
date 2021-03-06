/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores       = [0,0];
let roundScore   = 0;
let activePlayer = 0;
let gamePlaying = true;
document.getElementById('score-0').textContent ='0';
document.getElementById('score-1').textContent ='0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent ='0';

document.querySelector('.dice').style.display = 'none';
document.querySelector('.dice2').style.display = 'none';
document.querySelector('#name-0').textContent = 'Player 1';
document.querySelector('#name-1').textContent = 'Player 2';

document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');
const roller = document.querySelector('.btn-roll');
const holder = document.querySelector('.btn-hold');
const newGame = document.querySelector('.btn-new');

// for new game button
newGame.addEventListener('click', function() {
	location.reload();
});

//roll dice button
roller.addEventListener('click', function() {

	if (gamePlaying){
	var dice = Math.floor(Math.random()*6) + 1;
	var dice2 = Math.floor(Math.random()*6) + 1;
 	var diceDom  = document.querySelector('.dice');
 	var diceDom2  = document.querySelector('.dice2');

	 // for roll dice image
 	diceDom.style.display = 'block';
 	diceDom2.style.display = 'block';
 	diceDom.src = 'dice-' + dice + '.png';
 	diceDom2.src = 'dice-' + dice2 + '.png';

 	if(dice !== 1 && dice2 !==1){
 		//add score
 		roundScore += dice + dice2;
 		document.querySelector('#current-' + activePlayer).textContent = roundScore;
 	}else{ 
 		//nextplayer
		 nextPlayer();
	}
	}

	});

// hold button
holder.addEventListener('click', function() { 
	// add score to global if hold button were to press
	if(gamePlaying) {
		scores[activePlayer] += roundScore;
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
		
		// declares winner
		if(scores[activePlayer] >= 100) {
    		document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    		document.querySelector('.dice').style.display = 'none';
    		document.querySelector('.dice2').style.display = 'none';
    		document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
			} else {
			nextPlayer()
		}
    }	
});

// next player function
function nextPlayer() {
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;

	// determines whose player is turn 
	document.querySelector('#current-0').textContent = '0';
	document.querySelector('#current-1').textContent = '0';

	//displays which player is active
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.querySelector('.dice').style.display = 'none';
	document.querySelector('.dice2').style.display = 'none';
}



	
	
