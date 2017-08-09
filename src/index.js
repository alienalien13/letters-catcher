import './equalize.min.css'
import './style.css'

window.onload = function(){

	var canvas = document.getElementById('cnv'),
		context = canvas.getContext('2d'),
		scoreDiv = document.getElementById('score')

	// x pos, y pos, width, height, speed change x, - - y, the letter inside
	function Rect(x, y, w, h, dx, dy, letter, randColor1, randColor2, randColor3) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.dx = dx;
		this.dy = dy;
		this.letter = letter,
		this.randColor1 = randColor1,
		this.randColor2 = randColor2,
		this.randColor3 = randColor3;
	}

	var rects = [],
		score = 0;

	scoreDiv.innerText = score;

	function addRect(){

		var rand = Math.random() * (60 - 30) + 30,
			randX = Math.random() * 380,
			randSpeedY = Math.random() * 1.8 + 0.3,
			letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
			randColor1 = ( Math.floor( Math.random() * (10 - 1.0001) ) + 1 ) || letters[ Math.floor( Math.random() * 6 ) ],
			randColor2 = ( Math.floor( Math.random() * (10 - 1.0001) ) + 1 ) || letters[ Math.floor( Math.random() * 6 ) ],
			randColor3 = ( Math.floor( Math.random() * (10 - 1.0001) ) + 1 ) || letters[ Math.floor( Math.random() * 6 ) ];
		/** 
			*1: new Rect with random posX,
			*2: posY = 0,
			*3, 4: random weight=height,
			*5: 0 - change speed x,
			*6: 1 - change speed y,
			*7: random letter 
		**/
		var rect = new Rect(randX, 0, rand, rand, 0, randSpeedY, letters[ Math.floor( Math.random() * 10 ) ], randColor1, randColor2, randColor3);

		//add new rect to the rects array
		rects.push(rect);
	}

	//draw actuall rects array
	function draw(){
		$('#score').css('animation', '');
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.beginPath();

		for(var i=0; i<rects.length; i++){

			var rect = rects[i];
			rect.x += rect.dx;
			rect.y += rect.dy;

			if(rect.y > 399) { //if rect falls down
				rects.splice(i, 1);
				score--;
				scoreDiv.innerText = score;
				$('#score').css('animation', 'ouch linear 1s');
			}

			context.font= rect.w - 11 + "px Georgia";
			context.fillStyle = (('#' + rect.randColor1) + rect.randColor2) + rect.randColor3;
			context.fillText(rect.letter, rect.x, rect.y)
			context.fill();
			context.stroke();

		}
	}
	
	//Click Start handler. Run addRect time. Run draw timer.
	var startButton = document.getElementById('start'),
		buttonState = true

	startButton.addEventListener('click', ()=>{

		if(buttonState) {buttonState = false}
		else {buttonState = true}
		
		var time1 = setInterval(function(){
			addRect();
			if (buttonState) clearInterval(time1)
		}, 800 )

		//draw actuall array in canvas every 30 msec
		var time2 = setInterval(function(){
			draw();
			if (buttonState) clearInterval(time2)
		}, 30) 

	})

	//press keybord handler
	function getChar(event){

		if (event.which == null){
			if (event.keyCode < 32) return null;
			return String.fromCharCode(event.keyCode)
		}

		if (event.which != 0 && event.charCode != 0){
			if (event.which < 32) return null;
			return String.fromCharCode(event.which);
		}
		return null;
	}

	function charCompare(char){
		
		var iToRemove = []; //array of indexes what script has to remove from rects
		var amount = 0; //amounts keypress letters

		for(let i=0; i<rects.length; i++){

			if(rects[i].letter.toLowerCase() === char) {
				amount++

				//because of splice, indexes becomes less on 1
				//so each next value on iToRemove has to decrease at 1
				//'+1 - amount' in the row below fix it
				iToRemove.push(i + 1 - amount)
			}

		}
		if(amount > 1) {

			score++;
			scoreDiv.innerText = score;
			$('#score').css('animation', 'yeah linear 1s');

			for(let i=0; i<iToRemove.length; i++){

				rects.splice(iToRemove[i], 1);

			}
			
		}
	}

	document.onkeypress = function(){
		charCompare(getChar(event))
	}

}