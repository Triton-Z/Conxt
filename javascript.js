var x = 1;
var y = 1;
var backgroundTxt = document.getElementsByClassName("span");
var player = document.getElementById("x"+x+"y"+y);
function start (){
player = document.getElementById("x"+x+"y"+y);
player.innerHTML="#";
x++;
y++;
}

function replaceContent() {
for (var i = 0; i<backgroundTxt.length; i++) {
backgroundTxt[i].innerHTML = document.getElementById("inputField").value;
  }
}
