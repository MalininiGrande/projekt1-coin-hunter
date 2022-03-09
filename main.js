// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let monster = document.querySelector("#panacek");
let coin = document.querySelector("#mince");
// monster souradnice
let x = (window.innerHeight / 2);
let y = (window.innerWidth / 2);
let monsterWidth = 30;
let monsterHeight = 50;   

// coin souradnice

let randomX = 50;
let randomY = 50;
let coinWidth = 50;
let coinHeight = 50;
  
let change = 30;

let points = document.querySelector(".points");
let score = 1;



function move(event) {
	console.log ("move")
	catchCoin();
	if (event.keyCode === 40){
			console.log ("Down");
			x = x + change; 
			y = y;
			monster.style.left = y + "px";
			monster.style.top = x + "px";

			  } else if (event.keyCode === 38){
				console.log ("Up");
				x = x - change; 
				y = y;
				monster.style.left = y + "px";
				monster.style.top = x + "px";
				monster.src = 'obrazky/panacek-nahoru.png';

			  } else if (event.keyCode === 37){
				console.log ("Left");
				x = x; 
				y = y - change;
				monster.style.left = y + "px";
				monster.style.top = x + "px";
				monster.src = 'obrazky/panacek-vlevo.png';

			  } else if (event.keyCode === 39){
				console.log ("Right");
				x = x; 
				y = y + change;
				monster.style.left = y + "px";
				monster.style.top = x + "px";
				monster.src = 'obrazky/panacek-vpravo.png';
			}		
			 
}


// monster se vraci  na obrayovku na druhou stranu
function avoidEdgeY() {
	if (y < 0) {
			    y = window.innerWidth - monsterWidth;
			  } else if (y > window.innerWidth) {
			    y = 0 + monsterWidth;
			  }
}

function avoidEdgeX() {
	if (x < 0) {
			    x = window.innerHeight - monsterHeight;
			  } else if (x > window.innerHeight) {
			    x = 0 + monsterHeight;
			  }
}



function coinPosition (){
	randomX = Math.floor(Math.random() * window.innerHeight - coinHeight);
	randomY = Math.floor(Math.random()* window.innerWidth - coinWidth);
	coin.style.top = randomX + 'px';
	coin.style.left = randomY + 'px';
}




function win() {
	if (score >= 6) {
		document.getElementById("fanfara").play();
		alert("You rarely win, but sometimes you do.")
	}
}


function catchCoin() {
	console.log (x, y);
	console.log (randomX, randomY);
	if (!( x + monsterWidth < randomX || randomX + coinWidth < x || y + monsterHeight < randomY || randomY + coinHeight < y)) {
		document.getElementById("zvukMince").play();
		coinPosition();
		points.innerHTML = score++;
		win();
	
	}
}


let audio = document.getElementById("audio");
audio.load();
audio.play();

// aletrnativa coin position

// function getRandom(min, max) {
// 	return Math.floor(Math.random()*(max-min)+min);
// }

// function setInterval() {
//    coin.style.left= getRandom(0, window.innerWidth)+'px'; 
//    coin.style.top = getRandom(0, window.innerHeight)+'px'; 
    
// }