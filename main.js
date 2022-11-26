'use strict';
import './components/mdh-ball.js';
const gameScreen = document.querySelector('.js_gameScreen');
const counterHtml = document.querySelector('.js_counter');

let counter = 0;

const upCounter = (ev) => {
  if (ev.target.className.includes('plusBall')) {
    counter = counter + 3;
  } else if (ev.target.className.includes('blackBall')) {
    counter = counter - 2;
  } else if (ev.target.className.includes('standardBall')) {
    counter = counter + 1;
  }
  counterHtml.textContent = 'Puntos: ' + counter;
};

const randomNum = (min, max) => {
  return ~~(Math.random() * (max + 1 - min)) + min;
};

const removeBall = (ev) => {
  gameScreen.removeChild(ev.target);
};

const handleClickBall = (ev) => {
  upCounter(ev);
  removeBall(ev);
};

const createstandardBall = () => {
  let standardBall = document.createElement('mdh-ball');
  standardBall.addEventListener('click', handleClickBall);
  standardBall.addEventListener('animationend', removeBall);
  standardBall.classList.add('standardBall');
  standardBall.style.backgroundColor =
    'rgb(' +
    randomNum(0, 255) +
    ',' +
    randomNum(0, 255) +
    ',' +
    randomNum(0, 255) +
    ')';
  standardBall.style.top = randomNum(20, 80) + '%';
  standardBall.style.left = randomNum(10, 80) + '%';
  gameScreen.appendChild(standardBall);
};

const createBlackBall = () => {
  let blackBall = document.createElement('mdh-ball');
  blackBall.addEventListener('click', handleClickBall);
  blackBall.addEventListener('animationend', removeBall);
  blackBall.classList.add('blackBall');
  blackBall.textContent = '💀';
  blackBall.style.backgroundColor = 'black';
  blackBall.style.top = randomNum(20, 80) + '%';
  blackBall.style.left = randomNum(10, 80) + '%';
  gameScreen.appendChild(blackBall);
};
const createPlusBall = () => {
  let plusBall = document.createElement('mdh-ball');
  plusBall.addEventListener('click', handleClickBall);
  plusBall.addEventListener('animationend', removeBall);
  plusBall.classList.add('plusBall');
  plusBall.style.backgroundColor = 'purple';
  plusBall.style.top = randomNum(20, 80) + '%';
  plusBall.style.left = randomNum(10, 80) + '%';
  gameScreen.appendChild(plusBall);
};

setInterval(createstandardBall, 500);
setInterval(createBlackBall, 800);
setInterval(createPlusBall, 2000);
