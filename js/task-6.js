// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.


const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', () => {
  inputRef.classList.add('invalid');
  if (inputRef.value.length === +inputRef.dataset.length) {
    inputRef.classList.remove('invalid');
    inputRef.classList.add('valid');
  }
});
