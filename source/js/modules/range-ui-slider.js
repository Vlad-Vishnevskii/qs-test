import noUiSlider from 'nouislider';

const initUiSlider = () => {
  const slider = document.querySelector('[data-range-slider="price"]');
  const inputStart = document.querySelector('.range-slider__input-field--start input');
  const inputEnd = document.querySelector('.range-slider__input-field--end input');

  noUiSlider.create(slider, {
    cssPrefix: 'ui-slider__',
    step: 1,
    start: [0, 100],
    handleAttributes: [
      {'aria-label': 'Начало диапазона'},
      {'aria-label': 'Конец диапазона'}
    ],
    connect: true,
    range: {
      'min': 0,
      'max': 100,
    },
    format: {
      to: (value) => {
        return String(Math.round(value)).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      },
      from: (value) => {
        return Number(String(value).replace(/(\d)\s+(?=\d)/g, '$1'));
      },
    },
  });

  slider.noUiSlider.on('update', function (values, handle) {
    if (!handle) {
      inputStart.value = values[handle];
    } else {
      inputEnd.value = values[handle];
    }
  });

  document.addEventListener('change', (evt) => {
    if (evt.target === inputStart || evt.target === inputEnd) {
      slider.noUiSlider.set([inputStart.value, inputEnd.value]);
    }
  });
};

export {initUiSlider};

