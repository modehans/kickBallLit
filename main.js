'use strict';
import './components/mdh-ball.js';
const gameScreen = document.querySelector('.js_gameScreen');
const counterHtml = document.querySelector('.js_counter');

let counter = 0;

const upCounter = (ev) => {
  counter = counter + ev.target.value;
  counterHtml.textContent = `Puntos: ${counter}`;
};

const removeBall = (ev) => {
  gameScreen.removeChild(ev.target);
};

const handleClickBall = (ev) => {
  upCounter(ev);
  removeBall(ev);
};

const createStandardBall = () => {
  let standardBall = document.createElement('mdh-ball');
  standardBall.addEventListener('click', handleClickBall);
  standardBall.addEventListener('animationend', removeBall);
  gameScreen.appendChild(standardBall);
};

setInterval(createStandardBall, 500);
