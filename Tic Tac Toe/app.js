let chanceX = true;
let chanceY = true;
let winner = false;

let TButtons = {
    'button-1': false,
    'button-2': false,
    'button-3': false,
    'button-4': false,
    'button-5': false,
    'button-6': false,
    'button-7': false,
    'button-8': false,
    'button-9': false
};

function Winner() {
    if ((document.getElementById('item-1').innerHTML === 'X' && document.getElementById('item-2').innerHTML === 'X' && document.getElementById('item-3').innerHTML === 'X') || (document.getElementById('item-1').innerHTML === 'X' && document.getElementById('item-4').innerHTML === 'X' && document.getElementById('item-7').innerHTML === 'X') || (document.getElementById('item-2').innerHTML === 'X' && document.getElementById('item-5').innerHTML === 'X' && document.getElementById('item-8').innerHTML === 'X') || (document.getElementById('item-4').innerHTML === 'X' && document.getElementById('item-5').innerHTML === 'X' && document.getElementById('item-6').innerHTML === 'X') || (document.getElementById('item-7').innerHTML === 'X' && document.getElementById('item-8').innerHTML === 'X' && document.getElementById('item-9').innerHTML === 'X') || (document.getElementById('item-3').innerHTML === 'X' && document.getElementById('item-6').innerHTML === 'X' && document.getElementById('item-9').innerHTML === 'X') || (document.getElementById('item-1').innerHTML === 'X' && document.getElementById('item-5').innerHTML === 'X' && document.getElementById('item-9').innerHTML === 'X') || (document.getElementById('item-3').innerHTML === 'X' && document.getElementById('item-5').innerHTML === 'X' && document.getElementById('item-7').innerHTML === 'X')) {
        TButtons = {
            'button-1': false,
            'button-2': false,
            'button-3': false,
            'button-4': false,
            'button-5': false,
            'button-6': false,
            'button-7': false,
            'button-8': false,
            'button-9': false
        };

        Array.from(button).forEach(element => {
            element.innerHTML = null;
        });

        chanceX = true;
        chanceY = true;

        alert("X Wins!");
    }
    else if ((document.getElementById('item-1').innerHTML === 'O' && document.getElementById('item-2').innerHTML === 'O' && document.getElementById('item-3').innerHTML === 'O') || (document.getElementById('item-1').innerHTML === 'O' && document.getElementById('item-4').innerHTML === 'O' && document.getElementById('item-7').innerHTML === 'O') || (document.getElementById('item-2').innerHTML === 'O' && document.getElementById('item-5').innerHTML === 'O' && document.getElementById('item-8').innerHTML === 'O') || (document.getElementById('item-4').innerHTML === 'O' && document.getElementById('item-5').innerHTML === 'O' && document.getElementById('item-6').innerHTML === 'O') || (document.getElementById('item-7').innerHTML === 'O' && document.getElementById('item-8').innerHTML === 'O' && document.getElementById('item-9').innerHTML === 'O') || (document.getElementById('item-3').innerHTML === 'O' && document.getElementById('item-6').innerHTML === 'O' && document.getElementById('item-9').innerHTML === 'O') || (document.getElementById('item-1').innerHTML === 'O' && document.getElementById('item-5').innerHTML === 'O' && document.getElementById('item-9').innerHTML === 'O') || (document.getElementById('item-3').innerHTML === 'O' && document.getElementById('item-5').innerHTML === 'O' && document.getElementById('item-7').innerHTML === 'O')) {
        TButtons = {
            'button-1': false,
            'button-2': false,
            'button-3': false,
            'button-4': false,
            'button-5': false,
            'button-6': false,
            'button-7': false,
            'button-8': false,
            'button-9': false
        };

        Array.from(button).forEach(element => {
            element.innerHTML = null;
        });

        chanceX = true;
        chanceY = true;

        alert("O Wins!");
    }
}

let button = document.getElementsByClassName('item');
Array.from(button).forEach((element, index) => {
    element.addEventListener('click', function (e) {
        if (chanceX && !TButtons[`button-${index}`]) {
            element.innerHTML = 'X';
            chanceX = false;
            chanceY = true
            TButtons[`button-${index}`] = true;
        }
        else if (chanceY && !TButtons[`button-${index}`]) {
            element.innerHTML = 'O';
            chanceY = false;
            chanceX = true;
            TButtons[`button-${index}`] = true;
        }
        else {
            alert("Alrady Ticked!");
        }

        Winner();
    })
});