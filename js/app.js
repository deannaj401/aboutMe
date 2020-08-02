'use strict';

var userName;
function getName() {
  userName = prompt('What is your name?');

  alert('Hello ' + userName + ' Nice to meet you! Now we can see how much you know about me');
}
getName();

var rightAnswer = 0;
function getPets() {
  var myPets = prompt('Do I have any pets?').toLowerCase();


  if (myPets === 'yes' || myPets === 'y') {

    alert('That is correct! I have 3 dogs and 2 cats');
    rightAnswer++;
  } else if (myPets === 'no' || myPets === 'n') {

    alert('Actually I have 3 dogs and 2 cats');
  }
}
getPets();

function getMusic() {
  var playMusic = prompt('Do I play any musical instruments?').toLowerCase();


  if (playMusic === 'yes' || playMusic === 'y') {

    alert('That is right! I play piano and guitar');
    rightAnswer++;
  } else if (playMusic === 'no' || playMusic === 'n') {

    alert('The truth is I play piano and guitar');

  }
}
getMusic();

function getParis() {
  var visitParis = prompt('Have I ever been to Paris?').toLowerCase();


  if (visitParis === 'yes' || visitParis === 'y') {

    alert('Sadly that is not correct. But maybe someday');
  } else if (visitParis === 'no' || visitParis === 'n') {

    alert('Unfortunately that is correct. But maybe someday');
    rightAnswer++;

  }
}
getParis();

function getBurger() {
  var chzBrgr = prompt('Have I ever driven 14 hours for a cheeseburger?').toLowerCase();


  if (chzBrgr === 'yes' || chzBrgr === 'y') {

    alert('Yep I did that. In and Out Burgers are the best!');
    rightAnswer++;
  } else if (chzBrgr === 'no' || chzBrgr === 'n') {

    alert('I really did that. Totally worth it too');
  }
}
getBurger();

function getLott() {
  var winLott = prompt('Have I ever won the Lottery?').toLowerCase();


  if (winLott === 'yes' || winLott === 'y') {

    alert('No I did not. But you will feel like YOU won the lottery if you hire me!');

  } else if (winLott === 'no' || winLott === 'n') {

    alert('That is correct.But you will feel like YOU won the lottery if you hire me!');
    rightAnswer++;

  }
}
getLott();

function getNumber() {
  var fourTries = 0;


  while (fourTries < 4) {


    var guessNum = prompt('Guess a number between 1 and 10');

    if (guessNum === '7') {
      alert('Correct! Lucky number 7');
      rightAnswer++;
      break;

    } else if (guessNum > 7) {
      alert('Nope! too high!');
    } else if (guessNum < 7) {
      alert('Nope! too low!');
    }
    if (fourTries === 3) {
      alert('Nope you are out of tries. It was 7');
    }
    fourTries++;

  }
}
getNumber();

function getFood() {
  var favFood = ['steak', 'ice cream', 'tacos', 'cake', 'onion rings', 'pudding'];
  var correctAnswer = false;

  var attempts = 6;


  var whatFood = prompt('What is one of my favorite foods? You have 6 guesses').toLowerCase();

  while (attempts > 0 && !correctAnswer) {
    attempts--;

    for (var i = 0; i < favFood.length; i++) {
      if (whatFood === favFood[i]) {
        alert('Yes that is correct');
        rightAnswer++;


        correctAnswer = true;


      }
    }

    if (correctAnswer === false) {
      whatFood = prompt('No that is not correct try again').toLowerCase();

    }
  }
  alert('My favorite foods are Steak, Tacos, Ice Cream, Onion Rings, Pudding and Cake');
}
getFood();

alert('you got ' + rightAnswer + ' questions correct about me!');

alert('Thanks for playing ' + userName + ' Check out my page for even more fun facts about me');

