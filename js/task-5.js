// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
// подставляет его текущее значение в span#name-output. 
// Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const InputRef = document.querySelector("#name-input");
const OutputRef = document.querySelector("#name-output");

InputRef.addEventListener("input", (event) => {
  event.target.value === ""
    ? (OutputRef.textContent = "незнакомец")
    : (OutputRef.textContent = event.target.value);
});