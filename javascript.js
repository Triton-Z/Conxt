//variable storage
var x = 1;
var y = 1;
var characterType = "0";
var backgroundTxt = document.getElementsByClassName("textCharacters");
var player = document.getElementById("x"+x+"y"+y);
var removeTxt = document.getElementById("x"+x+"y"+y);

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

function remove(direction){

if (direction==1) {
	//remove up
	removeTxt = document.getElementById("x"+x+"y"+y+1);
	removeTxt.innerHTML = "#";
	} else if (direction==2) {
	//remove right
	removeTxt = document.getElementById("x"+x+1+"y"+y);
	removeTxt.innerHTML = "#";	
	} else if (direction==3) {
	//remove down
	removeTxt = document.getElementById("x"+x+"y"+y-1);
	removeTxT.innerHTML = "#";	
	} else if (direction==4) {
	//remove left
	removeTxt = document.getElementById("x"+x-1+"y"+y);
	removeTxt.innerHTML = "#";	
	}
}

window.onload = function(){
       window.onkeydown= function(number){
	   if(number.keyCode === 38)
       {
           //up
           move(1);
	   remove(3);
       };   
	   if(number.keyCode === 39)
       {
           //right
           move(2);
	   remove(4);
       };
	   if(number.keyCode === 40)
       {
           //down
           move(3);
           remove(1);
       };   
	   if(number.keyCode === 37)
       {
           //left
           move(4);
	   remove(2);
       };
    };
};

