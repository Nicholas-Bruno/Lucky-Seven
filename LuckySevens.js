function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function playGame() {
	var startingBet = document.getElementById('bet').value;

      if (startingBet <= 0){
	  alert("You can't bet nothing!")
	 }
      var gameMoney = startingBet;
      var die1;
      var die2;
      var diceSum;
      var rollsNumber = 0;
      var moneyMax = 0;
      var rollsAtMax = 0;
      var roll = 0;

      while (gameMoney > 0 ) {
       roll++;
       die1 = rollDice();
       die2 = rollDice();
       diceSum = die1 + die2;
       rollsNumber++;
       if (diceSum !== 7) {
        gameMoney = gameMoney - 1;
       } 
	   else {
        if (diceSum === 7) {
        	
         gameMoney = gameMoney + 4;
         
         if (gameMoney > moneyMax) {
           moneyMax = gameMoney;
          rollsAtMax = rollsNumber;
          }
         }
        }
	  }
	document.getElementById('playButton').innerHTML = 'Play again?';
	document.getElementById('results').style.display = "inline-table";
	document.getElementById('startingBet').innerHTML = startingBet;
	document.getElementById('rollsNumber').innerHTML = rollsNumber;
	document.getElementById('moneyMax').innerHTML = moneyMax;
	document.getElementById('rollsAtMax').innerHTML = rollsAtMax;
}

