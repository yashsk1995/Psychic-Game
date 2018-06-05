// setting alert for user to "press key to start game"
alert("Press Any Key To Start Game");

// array that contain all values that can be guess by computer
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

// Creating variables to hold the number of wins, losses, Guess left and array for holding values that guess by user
var wins = 0;
var losses = 0;
var left = 9;
var guesssofar = [];
// Randomly chooses a choice from the computerchoices array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// creating a function that run when user click any key
document.onkeyup = function (event) {
    // storing the key into userGuess which enter by user
    var userGuess = event.key;
    
    // console.log(computerGuess);
    // checking that user guess and computer guess are same or not
    if (userGuess == computerGuess) 
    // condition is true then run this group of statments
    {
        // win will be +1 if userchoice and computer choice is same
        wins++;
        // left will be set at 9 again
        left = 9;
        // computer will choice another word
        computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        // guesssofar array will set as blank
        guesssofar = [];
        // console.log(computerGuess);
    }
    else 
    // condition is false then run this group of statments
    {
        // checking that which key user enter is already press before or not
        if (guesssofar.indexOf(userGuess) > -1) {
            // displaying message to user that this choice is already you selected
            alert("Its duplicate");
        }
        else {
            // passing all value into guesssofar array that contain all vaule which enter by user
            guesssofar.push(userGuess);
            // left will be -1 from total guesses left
            left--;
            // once the left is became 0 
            if (left == 0) {
                // user losses will be increase by 1
                losses++;
                // left will be again set at 9
                left = 9;
                // guesssofar arra will be set as blank again
                guesssofar = [];

            }
            else {

            }
        }

    }

    // setting text and variable value inside of p tags ...
    document.querySelector('#user1').innerHTML = "User Guess: " + userGuess;
    document.querySelector('#win1').innerHTML = "Wins: " + wins;
    document.querySelector('#loss1').innerHTML = "Losses: " + losses;
    document.querySelector('#left1').innerHTML = "Guesses Left: " + left;
    document.querySelector('#guess1').innerHTML = "Your Guesses so far: " + guesssofar.join(',');

}

