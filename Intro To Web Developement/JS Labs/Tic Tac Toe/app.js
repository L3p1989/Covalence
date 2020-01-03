var rows = document.querySelectorAll(".row");
var msg = document.getElementById("message");
var markers = ["X", "O"];
var turn = 0;
var moveCount = 0;
var players = ["O", "X"];

//display who's turn it is at the top of the board
msg.textContent = markers[turn] + "'s turn";

//add a click listener for each row on the board
rows.forEach(function(row) {
  row.addEventListener("click", rowClicked);
});

//create event listener function rowClicked
function rowClicked(e) {
  //if checkWin returns true for player "X" or player "O"
  if (checkWin("X") || checkWin("O") == true) {
    //display message "Congratulations "X/O"! You are the winner!"
    return (msg.textContent =
      "Congratulations " + players[turn] + "! You are the winner!");
    //if event target has already been marked
  } else if (!(e.target.textContent == "")) {
    //display message "X/O that operation is not allowed!"
    return (msg.textContent =
      markers[turn] + " that operation is not allowed!");
    //otherwise mark event target and progress turn
  } else e.target.textContent = markers[turn];
  ++moveCount;
  //display message "X/O's turn"
  msg.textContent = markers[turn] + "'s turn";
  //if turn is 0
  if (turn == 0) {
    //turn is now 1
    turn = 1;
    //otherwise turn is now 0
  } else turn = 0;
  //display message "X/O's turn"
  msg.textContent = markers[turn] + "'s turn";
  //run another checkWin to verify
  if (checkWin("X") || checkWin("O") == true) {
    return (msg.textContent =
      "Congratulations " + players[turn] + "! You are the winner!");
  } else if (moveCount == 9 && checkWin("X", "O") == false) {
    return (msg.textContent = "Draw!");
  }
}

//create function checkWin
function checkWin(move) {
  //result of checkWin is false
  var result = false;
  //if checkRow result returns true on any of the combined rows
  if (
    checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(3, 5, 7, move)
  ) {
    //checkWin result is true
    result = true;
  }
  return result;
}

//create function checkRow
function checkRow(a, b, c, move) {
  //result of checkRow is false
  var result = false;
  //if getTile content matches for 3 tiles
  if (getTile(a) == move && getTile(b) == move && getTile(c) == move) {
    //checkRow result is true
    result = true;
  }
  return result;
}

//create function getTile
function getTile(number) {
  //return text content of selected element by id "t(number)"
  return document.getElementById("t" + number).textContent;
}
