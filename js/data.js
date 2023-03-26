import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayElement, createRandomArray} from './util.js';

// Создаю все необходимые массивы данных, с которыми буду потом работать с помощью функций
const adsTypes = {
  PALACE: 'palace',
  FLAT: 'flat',
  HOUSE: 'house',
  BUNGALOW: 'bungalow',
  HOTEL: 'hotel',
};

const adTypesToReadable = {
  [adsTypes.PALACE]: 'Дворец',
  [adsTypes.FLAT]: 'Квартира',
  [adsTypes.HOUSE]: 'Дом',
  [adsTypes.BUNGALOW]: 'Бунгало',
  [adsTypes.HOTEL]: 'Отель',
};

const adTypesToPrice = {
  [adsTypes.PALACE]: 10000,
  [adsTypes.FLAT]: 1000,
  [adsTypes.HOUSE]: 5000,
  [adsTypes.BUNGALOW]: 0,
  [adsTypes.HOTEL]: 3000,
};

const CHECK_IN = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECK_OUT = [
  '12:00',
  '13:00',
  '14:00'
];

const ADS_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

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

// Создаю объект с номером пользователя
const createAuthor = (avatarNumber) => ({
  avatar: `img/avatars/user${avatarNumber}.png`,
});

// Создаю объект с параметрами помещения
const createOffer = (lat, lng) => ({
  title: getRandomArrayElement(ADS_TITLES),
  address: `${lat}, ${lng}`,
  price: getRandomPositiveInteger(1500, 7500),
  type: getRandomArrayElement(Object.values(adsTypes)),
  rooms: getRandomPositiveInteger(1, 6),
  guests: getRandomPositiveInteger(1, 8),
  checkin: getRandomArrayElement(CHECK_IN),
  checkout: getRandomArrayElement(CHECK_OUT),
  features: createRandomArray(ADS_FEATURES),
  description: getRandomArrayElement(ADS_DESCRIPTION),
  photos: createRandomArray(ADS_PHOTOS),
});

// Создаю объект с локацией помещения
const createLocation = (lat, lng) => ({
  lat,
  lng,
});

// Создаю один общий объект включающий три предыдущих. Является наполнением объявления
const createAd = (avatarNumber) => {
  const lat = getRandomPositiveFloat(35.65000, 35.70000, 5);
  const lng = getRandomPositiveFloat(139.70000, 139.80000, 5);
  return {
    author: createAuthor(avatarNumber),
    offer: createOffer(lat, lng),
    location: createLocation(lat, lng),
  };
};

// Создаю массив которых состоит из объектов объявлений
const createAds = (count) => {
  const massiveAds = [];
  for (let i = 1; i < count + 1; i++) {
    const avatarNumber = (i < 10) ? `0${i}` : `${i}`;
    massiveAds.push(createAd(avatarNumber));
  }
  return massiveAds;
};

export {createAds, adsTypes, adTypesToReadable, adTypesToPrice};
