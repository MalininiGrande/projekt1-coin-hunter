// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let monster = document.querySelector("#panacek");
let coin = document.querySelector("#mince");
let x = (window.innerHeight / 2);
let y = (window.innerWidth / 2);
let change = 30;


function move(event) {
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


function avoidEdgeY() {
	if (y < 0) {
			    y = window.innerWidth - 80;
			  } else if (y > window.innerWidth - 80) {
			    y = 0;
			  }
}

function avoidEdgeX() {
	if (x < 0) {
			    x = window.innerHeight - 100;
			  } else if (x > window.innerHeight - 120) {
			    x = 0;
			  }
}


const getRandom = (min, max) => Math.floor(Math.random()*(max-min+1)+min);

function setInterval() {
   coin.style.left= getRandom(0, window.innerWidth)+'px'; 
   coin.style.top = getRandom(0, window.innerHeight)+'px'; 
    
}


let audio = document.getElementById("audio");
audio.src = URL.createObjectURL("zvuky/hudba.mp3");
audio.load();
audio.play();






// function getPosition (){
// 	let coinX = 1;
// 	let coinY = 1;
// 	let randomX = Math.floor(Math.random() * coinX);
// 	let randomY = Math.floor(Math.random()* coinY);
// 	return [randomX, randomY];

// }

// function loadCoin () {
// 	let xy = getPosition();
// 	coin.style.top = xy[0] + 'px';
// 	coin.style.left = xy[1] + 'px';
// }




