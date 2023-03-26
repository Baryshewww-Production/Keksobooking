// Функция, которая возвращает целое положительное число из заданного диапазона
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция, которая возвращает положительное число с плавающей точкой
const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

// Функция, которая возвращает случайный элемент из переданного массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Функция, которая возвращает новый массив случайной длины, взятой из длины переданного в функцию
const createRandomArray = (values) => {
  const features = new Array(getRandomPositiveInteger(1, values.length));
  for (let i = 0; i < features.length; i++) {features[i] = values[i];}
  return features;
};

// Склонение существительных после числительного
const numDecline = (n, form1, form2, form3) => {
  n = Math.abs(n) % 100;
  // console.log(n);
  const n1 = n % 10;
  // console.log(n1);
  if (n > 10 && n < 20) {
    return form3;
  }
  if (n1 > 1 && n1 < 5) {
    return form2;
  }
  if (n1 === 1) {
    return form1;
  }
  return form3;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

// Показ ошибки на всей странице
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.width = '300px';
  alertContainer.style.right = '50%';
  alertContainer.style.transform = 'translateX(50%)';
  alertContainer.style.top = '55px';

  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '12px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = '#ffaa99';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 3000);
};

export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomArrayElement,
  createRandomArray,
  numDecline,
  isEscapeKey,
  showAlert,
};
