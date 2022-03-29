var x = 1;
var y = 1;
var player = document.getElementById("x"+x+"y"+y);
function start (){
x++;
y++;
player = document.getElementById("x"+x+"y"+y);
player.innerHTML="#";
}
