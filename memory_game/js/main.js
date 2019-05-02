console.log("Up and running!");


var cards = ["queen", "queen", "king","king"];
var cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}

function flipCard(cardId){
console.log("User flipped" + " " + cards[cardId]);
if (cardsInPlay.length === 2) {
	checkForMatch()
}
{if (cardsInPlay[0] === cardsInPlay[2]) 
	{alert("You found a match"); }
else { alert ("Sorry try again"); }
} 
}
flipCard(0);
/*var CardOne = [0];
cardsInPlay.push('cardOne');
console.log("User flipped" + cardOne");*/

/*var CardTwo =[2]
cardsInPlay.push('cardTwo');
console.log("User flipped" + cardTwo);
*/

