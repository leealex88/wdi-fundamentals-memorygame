//console.log("Up and running!");
//
/*
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay=[];

var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}


var flipCard = function(cardId){
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped" + " " + cards[cardId]);
	if (cardsInPlay.length === 2) {

}
flipCard(0)
flipCard(2)
*/
/*var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);*/
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{   rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{   rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var cardsInPlay=[];

var checkForMatch = function(){
if (cardsInPlay[0] === cardsInPlay[1]){
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
};
};


var flipCard = function(cardId){
	cardsInPlay.push(cards[cardId].rank)
	console.log("User flipped" + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	if (cardsInPlay.length === 2) {
	
		checkForMatch();
};
};
flipCard(0)
flipCard(2)

