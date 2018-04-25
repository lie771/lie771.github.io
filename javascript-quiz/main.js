//1
var myName = "emily";
var integer = 12;
var favoriteNumber = '12';
var x=5;
Boolean(x);
var spellOutArray = ["e", "m", "i", "l", "y"];
var multipleData = ["hungry", 15, {hello:"apple"}]
var myFullName = "emily" + "li";
var hundred = 50 + 50;

//2
var firstItem = spellOutArray[0]; // 'e'
lastItem = spellOutArray = spellOutArray[spellOutArray.length - 1]; // 'y'

//3
var word = "supercalifragilisticexpialidocious"
var lengthWord = word.length;

//4
var firstName = "emily";
var lastName = "li";
firstName.length == lastName.length;

//5
if ( students = 14 ) {
	comment = "All students are here!";
} else if (students < 14) { 
	comment = "not everyone is here sad";
}

//6 
var spellOutArray = ["e", "m", "i", "l", "y"];
for ( var i = 0; i < spellOutArray.length; i++ ) {
  console.log("give me the letter..." + spellOutArray[i], i);
}


//7 NOOOOOOOOO
var date = new Date;
var hour = date.getHours();
if ( hour > 19 && hour < 21.5) {
	console.log("jquery story time with dylan!");
}

//8 NOOOOOOO
var date = new Date; //current day and time
var day = date.getDay();
	if (day == 1 && date) {
		console.log("5 more days till the weekend");
	} else if ( day == 2 && date) {
		console.log("4 more days ");
	}
	else if ( day == 3 && date) {
		console.log("it's hump day!");
	}
	else if ( day == 4 && date) {
		console.log("almost friday funday");
	}
	else if ( day == 5 && date) {
		console.log("thank god is friday");
	}
	else if ( day == 6 && date) {
		console.log("woop woop! today is chill day");
	}
	else if ( day == 0 && date) {
		console.log("oh gosh, I have so much homework left");
	}

//9
var favFood = ["salad", "salmon sushi", "matcha latte"];
var favAnimal = ["doggo", "guinea pigs", "beavers"];
var favPlaces = ["New York", "Toronto", "Hong Kong"];
var favPokemon = ["never played it", "what's pokemon", "the yellow thing?"];

//10
var whatDoesEmilyLike = ["favFood", "favAnimal", "favPlaces", "favPokemon"];

//11 
for ( var i = 0; i < whatDoesEmilyLike.length; i++ ) {
  console.log("what's my..." + whatDoesEmilyLike[i], i);
}

//12 NOOOOO

for ( var i = 0; i < favFood.length; i++ ) {
  console.log(whatDoesEmilyLike, favFood[i], i);
}
for ( var i = 0; i < favAnimal.length; i++ ) {
  console.log(whatDoesEmilyLike, favAnimal[i], i);
}
for ( var i = 0; i < favPlaces.length; i++ ) {
  console.log(whatDoesEmilyLike, favPlaces[i], i);
}
for ( var i = 0; i < favPokemon.length; i++ ) {
  console.log(whatDoesEmilyLike, favPokemon[i], i);
}

