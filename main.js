'use strict';
import './components/mdh-ball.js';
const gameScreem = document.querySelector('.js_gameScreen');
const counterHtml = document.querySelector('.js_counter');

let counter = 0;

const upCounter = (ev) => {
  if (ev.target.className.includes('plusBall')) {
    counter = counter + 3;
  } else if (ev.target.className.includes('blackBall')) {
    counter = counter - 2;
  } else if (ev.target.className.includes('standarBall')) {
    counter = counter + 1;
  }
  counterHtml.textContent = 'Puntos: ' + counter;
};

const randomNum = (min, max) => {
  return ~~(Math.random() * (max + 1 - min)) + min;
};

const removeBall = (ev) => {
  gameScreem.removeChild(ev.target);
};

const handleClickBall = (ev) => {
  upCounter(ev);
  removeBall(ev);
};

const createStandarBall = () => {
  let standarBall = document.createElement('mdh-ball');
  standarBall.addEventListener('click', handleClickBall);
  standarBall.classList.add('standarBall');
  standarBall.style.top = randomNum(20, 80) + '%';
  standarBall.style.left = randomNum(20, 80) + '%';
  gameScreem.appendChild(standarBall);
};

setInterval(createStandarBall, 1000);
