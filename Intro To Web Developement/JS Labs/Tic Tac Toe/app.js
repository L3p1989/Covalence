var rows = document.querySelectorAll('.row');
var msg = document.getElementById('message');
var markers = ['X', 'O'];
var turn = 0;
var moveCount = 0;
var players = ['O', 'X']

msg.textContent = markers[turn] + "'s turn"

rows.forEach(function (row) {
    row.addEventListener('click', rowClicked);
});

function rowClicked(e) {
    if (checkWin('X') || checkWin('O') == true) {
        return msg.textContent = 'Congratulations ' + players[turn] + '! You are the winner!'
    } else if (!(e.target.textContent == '')) {
        return msg.textContent = markers[turn] + ' that operation is not allowed!';
    } else e.target.textContent = markers[turn]; ++moveCount;
    msg.textContent = markers[turn] + "'s turn";
    if (turn == 0) {
        turn = 1;
    } else turn = 0;
    msg.textContent = markers[turn] + "'s turn";
    console.log(moveCount);
    if (checkWin('X') || checkWin('O') == true) {
        return msg.textContent = 'Congratulations ' + players[turn] + '! You are the winner!'
    } else if (moveCount == 9 && checkWin('X', 'O') == false) {
       return msg.textContent = 'Draw!'
    }
}

function checkWin(move) {
    var result = false;
    if (checkRow(1, 2, 3, move) ||
        checkRow(4, 5, 6, move) ||
        checkRow(7, 8, 9, move) ||
        checkRow(1, 4, 7, move) ||
        checkRow(2, 5, 8, move) ||
        checkRow(3, 6, 9, move) ||
        checkRow(1, 5, 9, move) ||
        checkRow(3, 5, 7, move)) {
        result = true;
    } return result;
}

function checkRow(a, b, c, move) {
    var result = false;
    if (getTile(a) == move && getTile(b) == move && getTile(c) == move) {
        result = true
    } return result
}

function getTile(number) {
    return document.getElementById('t' + number).textContent
}