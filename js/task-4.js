// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса


let counterValue = document.querySelector("#value");

const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const btnDecrementRef = document.querySelector('button[data-action="decrement"]');

let count = 0;
btnIncrementRef.addEventListener("click", (event) => {
  count += 1;
  counterValue.textContent = count;

  return counterValue;
});

btnDecrementRef.addEventListener("click", (event) => {
  count -= 1;
  counterValue.textContent = count;

  return counterValue;
});