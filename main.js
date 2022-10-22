/****************dESIGN FOR THE MAIN PAGE********/
let para = document.querySelector('p');
para.style.color = 'black';
para.style.fontFamily = 'Josefin Sans';
para.style.fontSize = '30px';





/************************************************/


let number = Math.floor(Math.random() * 100) + 1;
let counter = 1;

let response = document.getElementById('response');  /**The paragraphe that i will change its value with wrong or right */
let guess_submit = document.getElementById('button');
let guess_fill = document.getElementById('guess_fill');


/** this function verify wether the user guessed the right number or not */

function checkguesser() {
    let guess = Number(guess_fill.value);
    
    let attempts = "Remaining attempts: " + counter + "/10";
    score.textContent = (attempts);

    if (guess === number) {
        response.style.backgroundColor = "green";
        response.textContent = ("Yepp, you got it !!");
        response.style.textAlign = "center";
        setgameover();
    }
    else if (counter === 10) {
        response.style.backgroundColor = "red";
        response.style.textAlign = "center";
        response.textContent='Ouups, you have exhausted all your chances';
        setgameover();
    }
    else {
        if (guess < number) {
            response.textContent = 'WRONG, last guess was too low!';
            response.style.textAlign = "center";
        }
        else if (guess > number) {
            response.textContent = 'WRONG, last guess was too high!';
            response.style.textAlign = "center";
        }
    }

    
    counter++;
    guess_fill.value = '';
    guess_fill.focus();
}



guess_submit.addEventListener('click', checkguesser);




let reset_button = document.createElement('button');
reset_button.textContent = 'Start new game';

function setgameover() {
    guess_fill.disabled = true;
    guess_submit.disabled = true;
    document.body.appendChild(reset_button);
    reset_button.addEventListener('click',resetgame);
}


function resetgame() {
    counter = 1;
    number = Math.floor(Math.random() * 100) + 1; 
    response.textContent = '';
    response.style.backgroundColor = 'transparent';
    reset_button.parentNode.removeChild(reset_button); 
    score.textContent = ("Remaining attempts:");
    guess_submit.disabled = false;
    guess_fill.disabled = false;

}


































































