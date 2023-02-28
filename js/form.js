const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const adFormFieldsets = adForm.querySelectorAll('fieldset');
const mapFilterFieldsets = mapFilter.querySelectorAll('fieldset');
const mapFilterSelects = mapFilter.querySelectorAll('select');

const getInactiveFormStatus = () => {
  adForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');
  adFormFieldsets.forEach((item) => {item.disabled = true;});
  mapFilterSelects.forEach((item) => {item.disabled = true;});
  mapFilterFieldsets.forEach((item) => {item.disabled = true;});
};

const getActiveFormStatus = () => {
  adForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');
  adFormFieldsets.forEach((item) => {item.disabled = false;});
  mapFilterSelects.forEach((item) => {item.disabled = false;});
  mapFilterFieldsets.forEach((item) => {item.disabled = false;});
};

export {getInactiveFormStatus, getActiveFormStatus};
