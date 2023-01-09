'use strict';
import 'basic-ball/basic-ball.js';
import './components/mdh-blackBall.js';
import './components/mdh-extraBall.js';
const gameScreen = document.querySelector('.js_gameScreen');
const counterHtml = document.querySelector('.js_counter');

let counter = 0;

const upCounter = (ev) => {
  counter = counter + ev.detail.value;
  counterHtml.textContent = `Puntos: ${counter}`;
};

gameScreen.addEventListener('clickedBall', upCounter);

const createStandardBall = () => {
  let standardBall = document.createElement('basic-ball');
  gameScreen.appendChild(standardBall);
};

const createBlackBall = () => {
  let blackBall = document.createElement('mdh-blackball');
  gameScreen.appendChild(blackBall);
};
const createExtraBall = () => {
  let extraBall = document.createElement('mdh-extraball');
  gameScreen.appendChild(extraBall);
};

setInterval(createStandardBall, 1000);
setInterval(createBlackBall, 300);
setInterval(createExtraBall, 2000);
