// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/


// sem začni psát svůj program

let monster = document.querySelector("#panacek");
let x = 300;
let y = 700;
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

			  } else if (event.keyCode === 37){
				console.log ("Left");
				x = x; 
				y = y - change;
				monster.style.left = y + "px";
				monster.style.top = x + "px";

			  } else if (event.keyCode === 39){
				console.log ("Right");
				x = x; 
				y = y + change;
				monster.style.left = y + "px";
				monster.style.top = x + "px";
			  }
}

function avoidEdgeY() {
	if (y < 0) {
			    y = 1350;
			  } else if (y > 1350) {
			    y = 0;
			  }
}

function avoidEdgeX() {
	if (x < 0) {
			    x = 650;
			  } else if (x > 650) {
			    x = 0;
			  }
}


