'use strict';

/*console.log(document.querySelector('.message').testContent);
 document.querySelector('.message').textContent = 'Correct Number!';
 console.log(document.querySelector('.message').testContent);

 document.querySelector('.number').textContent = 13;
 document.querySelector('.score').textContent = 10;

 document.querySelector('.guess').value = 23;
 console.log(document.querySelector('.guess').value);
 */
 document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

 });
 









