//Создаю все необходимые массивы данных, с которыми буду потом работать с помощью функций
const ADS_NUMBERS = 10;
const ADS_TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECK_IN = ['12:00', '13:00', '14:00'];
const CHECK_OUT = ['12:00', '13:00', '14:00'];
const ADS_FEATURES = ['wifi', 'dishwasher', 'parking', 'dishwasher', 'elevator'];
const ADS_DESCRIPTION = [
  'Все окна на север',
  'Тихие соседи',
  'Южная сторона',
  'Панорамные окна',
  'Личный бассейн с пенной вечеринкой',
];
const ADS_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const ADS_TITLES = [
  'Просторное помещение',
  'Тихое, уютное место для двоих',
  'Светлое, просторное место',
  'Всё по фен шую, как вы ждали',
  'Вам захочется приехать сюда ещё раз',
];

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

//Создаю объект с номером пользователя
const createAuthor = (avatarNumber) => ({
  avatar: `img/avatars/user${avatarNumber}.png`,
});

//Создаю объект с параметрами помещения
const createOffer = (lat, ing) => ({
  title: getRandomArrayElement(ADS_TITLES),
  address: `${lat}, ${ing}`,
  price: getRandomPositiveInteger(1500, 7500),
  type: getRandomArrayElement(ADS_TYPES),
  rooms: getRandomPositiveInteger(1, 6),
  guests: getRandomPositiveInteger(1, 8),
  checkin: getRandomArrayElement(CHECK_IN),
  checkout: getRandomArrayElement(CHECK_OUT),
  features: createRandomArray(ADS_FEATURES),
  description: getRandomArrayElement(ADS_DESCRIPTION),
  photos: createRandomArray(ADS_PHOTOS),
});

//Создаю объект с локацией помещения
const createLocation = (lat, ing) => ({
  lat,
  ing,
});

//Создаю один общий объект включающий три предыдущих. Является наполнением объявления
const createAd = (avatarNumber) => {
  const lat = getRandomPositiveFloat(35.65000, 35.70000, 5);
  const ing = getRandomPositiveFloat(139.70000, 139.80000, 5);
  return {
    author: createAuthor(avatarNumber),
    offer: createOffer(lat, ing),
    location: createLocation(lat, ing),
  };
};

//Создаю массив которых состоит из объектов объявлений
const createAds = () => {
  const massiveAds = [];
  for (let i = 1; i < ADS_NUMBERS + 1; i++) {
    const avatarNumber = (i < 10) ? `0${i}` : `${i}`;
    massiveAds.push(createAd(avatarNumber));
  }
  return massiveAds;
};

console.log(createAds());
