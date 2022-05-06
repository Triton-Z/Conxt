//variable storage
var x = 1;
var y = 1;
var characterType = "0";
var backgroundTxt = document.getElementsByClassName("textCharacters");
var player = document.getElementById("x"+x+"y"+y);
var removeTxt = document.getElementById("x"+x+"y"+y);
var moveUp = false;
var moveRight = false;
var moveDown = false;
var moveLeft = false;

function move (direction){
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
} else if (direction==4) {
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


window.onload = function(){
       
	window.onkeydown= function(number){
	   if(number.keyCode === 38)
       {
           //up
           remove();
	   move(1);
       };   
	   if(number.keyCode === 39)
       {
           //right
           remove();
	   move(2);
       };
	   if(number.keyCode === 40)
       {
           //down
           remove();
	   move(3);
       };   
	   if(number.keyCode === 37)
       {
           //left
           remove();
	   move(4);
       };
    };	
	
	
	
	
	
	
	/**
	window.onkeydown= function(number){
	   if(number.keyCode === 38)
       {
           //up
           remove();
	   move(1);
       };   
	   if(number.keyCode === 39)
       {
           //right
           remove();
	   move(2);
       };
	   if(number.keyCode === 40)
       {
           //down
           remove();
	   move(3);
       };   
	   if(number.keyCode === 37)
       {
           //left
           remove();
	   move(4);
       };
    };
    **/
};
