'use strict';
import './components/mdh-ball.js';
import './components/mdh-blackBall.js';
const gameScreen = document.querySelector('.js_gameScreen');
const counterHtml = document.querySelector('.js_counter');

let counter = 0;

const upCounter = (ev) => {
  counter = counter + ev.target.value;
  counterHtml.textContent = `Puntos: ${counter}`;
};

gameScreen.addEventListener('clickedBall', upCounter);

const createStandardBall = () => {
  let standardBall = document.createElement('mdh-ball');
  gameScreen.appendChild(standardBall);
};

const createBlackBall = () => {
  let blackBall = document.createElement('mdh-blackball');
  gameScreen.appendChild(blackBall);
};

setInterval(createStandardBall, 1000);
setInterval(createBlackBall, 500);
