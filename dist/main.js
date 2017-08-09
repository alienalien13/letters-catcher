/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equalize_min_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__equalize_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__equalize_min_css__);



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
			randX = Math.random() * 390,
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
				$('#score').css('animation', 'ouch 1s')
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

			for(let i=0; i<iToRemove.length; i++){

				rects.splice(iToRemove[i], 1);

			}
			
		}
	}

	document.onkeypress = function(){
		charCompare(getChar(event))
	}

}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);