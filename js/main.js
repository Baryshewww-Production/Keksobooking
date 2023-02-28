import {createPopup} from './generate.js';
import {getInactiveFormStatus, getActiveFormStatus} from './form.js';
import {createAds} from './data.js';

const COUNT_OF_ADS = 10;

//Записываю в переменную массив всех сгенерированных объектов с данными
const similarAds = createAds(COUNT_OF_ADS);

getInactiveFormStatus();

setTimeout(getActiveFormStatus, 2000);

document.querySelector('#map-canvas').append(createPopup(similarAds[5]));
