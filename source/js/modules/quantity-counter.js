const basketCounter = document.querySelector('.basket-button-counter');


const onPlusClick = (evt) => {
  const parent = evt.target.closest('.basket-button-counter');
  if (parent && evt.target.closest('.basket-button-counter__plus')) {
    const basketCounterValue = parent.querySelector('.basket-button-counter__value');
    let result = Number(basketCounterValue.value);
    result += 1;
    basketCounterValue.value = result;
  }
};

const onMinusClick = (evt) => {
  const parent = evt.target.closest('.basket-button-counter');
  if (parent && evt.target.closest('.basket-button-counter__minus')) {
    const basketCounterValue = parent.querySelector('.basket-button-counter__value');
    let result = Number(basketCounterValue.value);
    if (result > 1) {
      result -= 1;
      basketCounterValue.value = result;
    }
  }
};

const quantityCounter = () => {
  if (basketCounter) {
    document.addEventListener('click', onPlusClick);
    document.addEventListener('click', onMinusClick);
  }
};

export {quantityCounter};


