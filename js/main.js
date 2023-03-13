import {createPopup} from './generate.js';
// import {toggleFormDisabled} from './form-switcher.js';
import {createAds} from './data.js';
import {validateAdForm} from './form-validator.js';


const COUNT_OF_ADS = 10;

//Записываю в переменную массив всех сгенерированных объектов с данными
const similarAds = createAds(COUNT_OF_ADS);

document.querySelector('#map-canvas').append(createPopup(similarAds[5]));

validateAdForm();
