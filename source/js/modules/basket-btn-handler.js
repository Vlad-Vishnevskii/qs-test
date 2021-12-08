const basketBtn = document.querySelector('[data-tab="basket-btn"]');
const counterBtn = document.querySelector('.basket-button-counter');

const onBasketBtnClick = (evt) => {
  if (evt.target.closest('[data-tab="basket-btn"]')) {
    const container = evt.target.closest('.equipment-description__item');
    const currentBasketBtn = container.querySelector('[data-tab="basket-btn"]');
    const currentCounterBtn = container.querySelector('.basket-button-counter');
    currentBasketBtn.classList.add('button--hidden');
    currentCounterBtn.classList.remove('button--hidden');
  }
};

const basketBtnHandler = () => {
  if (basketBtn && counterBtn) {
    document.addEventListener('click', onBasketBtnClick);
  }
};

export {basketBtnHandler};


