// if语句

var score = 75;    // Score
var msg = '';      // Message

function congratulate() {
    msg += 'Congratulations! ';
}

if (score >= 50) {
    congratulate();
    msg += 'Proceed to the next round.';
}

var el = document.getElementById('answer');
el.innerHTML = msg;
