import {adTypesToPrice} from './data.js';
import {adPrice, pristine} from './form-validator.js';

const MAX_PRICE_FOR_NIGHT = 100000;

const sliderPrice = document.querySelector('.ad-form__slider');
const adType = document.querySelector('#type');
const resetButton = document.querySelector('.ad-form__reset');

noUiSlider.create(sliderPrice, {
  range: {
    min: adTypesToPrice[adType.value],
    max: MAX_PRICE_FOR_NIGHT,
  },
  start: adTypesToPrice[adType.value],
  step: 100,
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

sliderPrice.noUiSlider.on('slide', () => {
  adPrice.value = sliderPrice.noUiSlider.get();
  pristine.validate(adPrice);
});

adType.addEventListener('change', () => {
  sliderPrice.noUiSlider.updateOptions({
    range: {
      min: adTypesToPrice[adType.value],
      max: MAX_PRICE_FOR_NIGHT,
    },
    start: adTypesToPrice[adType.value],
  });
});

resetButton.addEventListener('click', () => {
  sliderPrice.noUiSlider.reset();
});
