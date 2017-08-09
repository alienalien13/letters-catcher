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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);


window.onload = function(){

	var canvas = document.getElementById('cnv'),
		context = canvas.getContext('2d'),
		scoreDiv = document.getElementById('score')

	function Rect(x, y, w, h, dx, dy, letter) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.dx = dx;
		this.dy = dy;
		this.letter = letter;
	}

	var rects = [],
		score = 0;

	scoreDiv.innerText = score;

	function addRect(){

		var rand = Math.random() * (60 - 30) + 30,
			randX = Math.random() * 340,
			letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

		/** 
			*new Rect with random posX,
			*posY = 0,
			*random weight=height,
			*0 - change speed x,
			*1 - change speed y,
			*random letter 
		**/
		var rect = new Rect(randX, 0, rand, rand, 0, 1, letters[ Math.floor( Math.random() * 10 ) ]);

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

			if(rect.y > 380) { //if rect falls down
				rects.splice(i, 1);
				score--;
				scoreDiv.innerText = score;
			}

			context.strokeRect(rect.x, rect.y, rect.w, rect.h);
			context.font="20px Georgia";
			context.fillText(rect.letter, rect.x + (rect.w / 2), rect.y + (rect.h / 2))
			context.lineWidth = .5;
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
		}, 500 )

		//draw actuall array in canvas every 30 msec
		var time2 = setInterval(function(){
			draw();
			if (buttonState) clearInterval(time2)
		}, 30) 

	})


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
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);