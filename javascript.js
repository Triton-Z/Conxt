//variable storage
var x = 1;
var y = 1;
var backgroundTxt = document.getElementsByClassName("textCharacters");
var player = document.getElementById("x"+x+"y"+y);

function move (direction){
player = document.getElementById("x"+x+"y"+y);
player.innerHTML="#";
//1 is up
//2 is right
//3 is down
//4 is left

if (direction==1) {
y++;
} else if (direction==2) {
x++;
} else if (direction==3) {
y=y-1;
} else if (direction = 4) {
x=x-1;
}


} //function ending, don't get confused


function replaceContent() {
for (var i = 0; i<backgroundTxt.length; i++) {
backgroundTxt[i].innerHTML = document.getElementById("inputField").value;
  }
}
