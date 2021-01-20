// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
// и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании
//  ползунка будет меняться размер текста.



const fontSizeRef = document.querySelector("#font-size-control");
console.dir(fontSizeRef);
const spanTextRef = document.querySelector("#text");
console.log(spanTextRef);

fontSizeRef.addEventListener("input", (event) => {
  spanTextRef.style.fontSize = `${event.target.value}px`;
});