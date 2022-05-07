//variable storage
var x = 1;
var y = 1;
var characterType = "0";
var backgroundTxt = document.getElementsByClassName("textCharacters");
var player = document.getElementById("x"+x+"y"+y);
var removeTxt = document.getElementById("x"+x+"y"+y);
const moveList = [" ", " ", " ", " "];
function move (direction){
//1 is up
//2 is right
//3 is down
//4 is left

if (direction==1) {
y++;
}
if (direction==2) {
x++;
}
if (direction==3) {
y=y-1;
}
if (direction==4) {
x=x-1;
}

player = document.getElementById("x"+x+"y"+y);
player.innerHTML=characterType;
} //function ending, don't get confused


function replaceContent() {
for (var i = 0; i<backgroundTxt.length; i++) {
backgroundTxt[i].innerHTML = document.getElementById("inputField").value;
  }
}

function remove(){
removeTxt = document.getElementById("x"+x+"y"+y);
removeTxt.innerHTML = "-";
}

function removeList(){
moveList[0] = false;
moveList[1] = false;
moveList[2] = false;
moveList[3] = false;
}

window.onload = function(){
	window.onkeydown= function(number){
	   if(number.keyCode === 38 && moveList[0]!="true")
       {
           //up
           moveList[0] = "true";
       };   
	   if(number.keyCode === 39 && moveList[1]!="true")
       {
           //right
 	   moveList[1] = "true";
       };
	   if(number.keyCode === 40 && moveList[2]!="true")
       {
           //down
 	   moveList[2] = "true";
       };   
	   if(number.keyCode === 37 && moveList[3]!="true")
       {
           //left
  	   moveList[3] = "true";
       };
    };

if (moveList[0]== true)
{
   remove();
   move(1)
}
if (moveList[1]== true)
{
   remove();
   move(2)
}
if (moveList[2]== true)
{
   remove();
   move(3)
}
if (moveList[3]== true)
{
   remove();
   move(4)
}
setTimeout(removeList, 300);
};
