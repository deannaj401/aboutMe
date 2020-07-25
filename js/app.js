'use strict';



var userName = prompt('What is your name?');
// console.log("Hello " + userName + " Nice to meet you! Now let'\s see how much you know about me" );
alert("Hello " + userName + " Nice to meet you! Now let'\s see how much you know about me" );

var myPets = prompt('Do I have any pets?').toLowerCase();


if (myPets === 'yes') {
  // console.log('That is correct! I have 3 dogs and 2 cats');
  alert('That is correct! I have 3 dogs and 2 cats');
} else if (myPets === 'no') {
  // console.log('Actually I have 3 dogs and 2 cats');
  alert('Actually I have 3 dogs and 2 cats');
  
}

var playMusic = prompt('Do I play any musical intruments?').toLowerCase();


if (playMusic === 'yes') {
  // console.log('That is right! I play piano and guitar');
  alert('That is right! I play piano and guitar');
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
  
}


var chzBrgr = prompt('Have I ever driven 14 hours for a cheeseburger?').toLowerCase();


if (chzBrgr === 'yes') {
  // console.log('Yep I did that. In and Out Burgers are the best!');
  alert('Yep I did that. In and Out Burgers are the best!');
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
}
// console.log('Thanks for playing ' + userName + ' Check out my page for even more fun facts about me');
alert('Thanks for playing ' + userName + ' Check out my page for even more fun facts about me');

