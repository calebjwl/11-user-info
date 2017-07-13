import 'whatwg-fetch';

import info from './user-info';

const pictureEl = document.querySelector('.avatar_img');
pictureEl.src = info.results[0].picture.large;

const nameEl = document.querySelector('.row__text-name');
nameEl.innerText = info.results[0].name.first + " " + info.results[0].name.last;

const emailEl = document.querySelector('.row__text-email');
emailEl.innerText = info.results[0].email;

const phoneEl = document.querySelector('.row__text-phone');
phoneEl.innerText = info.results[0].phone;

const locationEl = document.querySelector('.row__text-location');
locationEl.innerText = info.results[0].location.city + ", " + info.results[0].location.state;
