var Top = 386, Left = 0;

var gameBoard = {
  player: document.querySelector(".player")
}
function keyUp() {
  if (Top == 53) {
    Top = 53;
    gameBoard.player.style.top = Top + "px";
  } else {
    Top -= 111;
    gameBoard.player.style.top = Top + "px";
  }
}
function keyDown() {
  if (Top == 386) {
    Top = 386;
    gameBoard.player.style.top = Top + "px";
  } else {
    Top += 111;
    gameBoard.player.style.top = Top + "px";
  }
}
function keyLeft() {
  if (Left == 0) {
    Left = 0;
    gameBoard.player.style.left = Left + "px";
  } else {
    Left -= 111;
    gameBoard.player.style.left = Left + "px";
  }
}
function keyRight() {
  if (Left == 222) {
    Left = 222;
    gameBoard.player.style.left = Left + "px";
  } else {
    Left += 111;
    gameBoard.player.style.left = Left + "px";
  }
}
