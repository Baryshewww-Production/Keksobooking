//Функция, которая возвращает целое положительное число из заданного диапазона
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция, которая возвращает положительное число с плавающей точкой
const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
};

//Функция, которая возвращает случайный элемент из переданного массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//Функция, которая возвращает новый массив случайной длины, взятой из длины переданного в функцию
const createRandomArray = (values) => {
  const features = new Array(getRandomPositiveInteger(1, values.length));
  for (let i = 0; i < features.length; i++) {features[i] = values[i];}
  return features;
};

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, createRandomArray};