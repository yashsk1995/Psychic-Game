 // Creates an array that lists out all of the options (Rock, Paper, or Scissors).
 var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];

 // Creating variables to hold the number of wins, losses, and ties. They start at 0.
 var wins = 0;
 var losses = 0;
 var left = 9;
 var guesssofar=[0];
// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

 

 


 
 document.onkeyup = function(event) {

   
   var userGuess = event.key;
   console.log(computerGuess);
//    for (i=0;i < guesssofar.length -1 ; i++ )
//    {
//        if (guesssofar[i]===userGuess)
//        {
//            alert("Its duplicate");
//        }
//        else
//        {
//         guesssofar.push(userGuess);
//        }
//    }
   
      
   if (userGuess == computerGuess)
        {
            wins++;
            left=9;
            computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
            console.log(computerGuess);
        }
        else{
                        left--;
                        if(left == 0)
                            {       losses++;
                                    left=9;
                                    guesssofar=[];
                            }
                        else{

                            }
                                
            }

        


     
     document.querySelector('#user1').innerHTML ="User Guess : "+ userGuess;
     document.querySelector('#win1').innerHTML ="Win : " + wins;
     document.querySelector('#loss1').innerHTML ="Lost :" +losses;
     document.querySelector('#left1').innerHTML ="Guesses Left : " + left;
     document.querySelector('#guess1').innerHTML ="Guesses so far: "+ guesssofar.join(',');
  
   }

