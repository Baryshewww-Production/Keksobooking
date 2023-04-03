// Склонение существительных после числительного
const getWordEnd = (n, form1, form2, form3) => {
  n = Math.abs(n) % 100;
  const n1 = n % 10;
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

// Функция для проверки клавиши Escape
const getIsEscape = (evt) => evt.key === 'Escape';

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
  }, 2000);
};

// Функция debounce - устранение дребезга
const debounce = (callback, timeoutDelay = 500) => {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с SetTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
  // Таким образом цикл "поставить таймаут - удалить таймаут" будет выполняться,
  // пока действие совершается чаще, чем переданная задержка timeoutDelay
};

export {
  getWordEnd,
  getIsEscape,
  showAlert,
  debounce,
};
