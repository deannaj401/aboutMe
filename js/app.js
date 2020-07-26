'use strict';



var userName = prompt('What is your name?');
// console.log("Hello " + userName + " Nice to meet you! Now let'\s see how much you know about me" );
alert('Hello ' + userName + ' Nice to meet you! Now we can see how much you know about me');


var rightAnswer = 0;
//this is the variable to count correct answers

var myPets = prompt('Do I have any pets?').toLowerCase();


if (myPets === 'yes') {
  // console.log('That is correct! I have 3 dogs and 2 cats');
  alert('That is correct! I have 3 dogs and 2 cats');
  rightAnswer++;
} else if (myPets === 'no') {
  // console.log('Actually I have 3 dogs and 2 cats');
  alert('Actually I have 3 dogs and 2 cats');
}



var playMusic = prompt('Do I play any musical intruments?').toLowerCase();


if (playMusic === 'yes') {
  // console.log('That is right! I play piano and guitar');
  alert('That is right! I play piano and guitar');
  rightAnswer++;
} else if (playMusic === 'no') {
  // console.log('The truth is I play piano and guitar');
  alert('The truth is I play piano and guitar');

}

var visitParis = prompt('Have I ever been to Paris?').toLowerCase();


if (visitParis === 'yes') {
  // console.log('Sadly that is not correct. But maybe someday');
  alert('Sadly that is not correct. But maybe someday');
} else if (visitParis === 'no') {
  // console.log('Unfortunately that is correct. But maybe someday');
  alert('Unfortunately that is correct. But maybe someday');
  rightAnswer++;

}


var chzBrgr = prompt('Have I ever driven 14 hours for a cheeseburger?').toLowerCase();


if (chzBrgr === 'yes') {
  // console.log('Yep I did that. In and Out Burgers are the best!');
  alert('Yep I did that. In and Out Burgers are the best!');
  rightAnswer++;
} else if (chzBrgr === 'no') {
  // console.log('I really did that. Totally worth it too');
  alert('I really did that. Totally worth it too');
}


var winLott = prompt('Have I ever won the Lottery?').toLowerCase();


if (winLott === 'yes') {
  // console.log('No I did not. But you will feel like YOU won the lottery if you hire me!');
  alert('No I did not. But you will feel like YOU won the lottery if you hire me!');

} else if (winLott === 'no') {
  // console.log('That is correct.But you will feel like YOU won the lottery if you hire me!');
  alert('That is correct.But you will feel like YOU won the lottery if you hire me!');
  rightAnswer++;

}


var fourTries = 0;
//this is counting the number of tries for a correct answer

while (fourTries < 4) {
//The while loop runs while the variable is less than four

  var guessNum = prompt('Guess a number between 1 and 10');

  if (guessNum === '7') {
    alert('Correct! Lucky number 7');
    rightAnswer++;
    break;
    //if the user guesses the correct answer which is 7 then the loop ends
  } else if (guessNum > 7) {
    alert('Nope! too high!');
  } else if (guessNum < 7) {
    alert('Nope! too low!');
  }
  if (fourTries === 3) {
    alert('Nope you are out of tries. It was 7');
  }
  fourTries++;
  //this adds another user guess
}

var favFood = ['steak', 'ice cream', 'tacos', 'cake', 'onion rings', 'pudding'];
var notFav = true;
// either a food will be a favorite or a not favorite. so if notFav is = true then user is incorrect

// This for loop loops through the question 6 times giving the user 6 chances to answer correctly
for (var j = 0; j < 6; j++) {
  var whatFood = prompt('What is one of my favorite foods? You have 6 guesses');


  for (var i = 0; i < favFood.length; i++) {
    if (whatFood.toLowerCase() === favFood[i]) {
      alert('Yes that is correct');
      rightAnswer++;
      // since it is a favorite food then not a favorite is fase
      notFav = false;
      break;
      //since the user got a correct answer then the loop is finished.
    }
  } // if any answer is correct then notFav false because it is a favorite food. If the answer is incorrect than notFav will be = true because it is not a favorite food.

  if (notFav === true) {
    alert('No that is not correct try again');

  }
}
alert('My favorite foods are Steak, Tacos, Ice Cream, Onion Rings, Pudding and Cake');


alert( 'you got ' + rightAnswer + ' questions correct about me!');
// console.log('Thanks for playing ' + userName + ' Check out my page for even more fun facts about me');
alert('Thanks for playing ' + userName + ' Check out my page for even more fun facts about me');

