// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов 
// используй document.createElement().

const ingredients = [
    "Картошка",
    "Грибы",
    "Чеснок",
    "Помидоры",
    "Зелень",
    "Приправы",
  ];
  


  const result = ingredients.map((ingredient) => {
    let listElement = document.createElement("li");
    listElement.textContent = ingredient;
    return listElement;
  });
  
  const ulEl = document.getElementById("ingredients");
  ulEl.append(...result);
  console.log(ulEl);
