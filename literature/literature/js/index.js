// Контейнер для книг
let container = document.querySelector(`.list-group`);
// Поле ввода для поиска
let input = document.querySelector(`.form-control`);
// Фильтр по прочитанным
let select = document.querySelector(`.form-select`);

let books = [
  `«Преступление и наказание» Достоевский Ф.М.`,
  `«Евгений Онегин» Пушкин А.С.`,
  `«Тоска» Чехов А.П.`,
  `«Смерть чиновника» Чехов А.П.`,
  `«Герой нашего времени» Лермонтов М.Ю.`,
  `«Маскарад» Лермонтов М.Ю.`,
  `«Демон» Лермонтов М.Ю.`,
  `«Медный всадник» Пушкин А.С.`,
  `«Мёртвые души» Гоголь Н.В.`
];

let read = [
  false,
  true,
  false,
  false,
  false,
  false,
  false,
  true,
  false
];


// Нарисовать список
render();

// Поиск книги
input.addEventListener(`input`, searchByTitle);

// Фильтр книг по прочитанности
select.addEventListener(`input`, searchByRead);


/* Функции */

// Нарисовать все книги
function render() {
  container.innerHTML = ``;
  for(let i = 0; i < books.length; i++) {
    renderItem(i)
  }
}


// Нарисовать одну книгу
function renderItem(i) {
  let book = books[i]
  let isRead = read[i]
  let className = `book`
  if(isRead) {
    className += ` done`
  }
  
  container.innerHTML += `
  <li
  class="${className} list-group-item d-flex justify-content-between align-items-start"
>
  <div class="ms-2 me-auto">
    ${book}
  </div>
  <span class="badge bg-primary rounded-pill align-self-center">
   Done
  </span>
</li>`


  let template = `
    <li
      class="book list-group-item d-flex justify-content-between align-items-start"
    >
      <div class="ms-2 me-auto">
        Название автор
      </div>
      <span class="badge bg-primary rounded-pill align-self-center">
        Done
      </span>
    </li>
  `;
}


// Поиск по прочитанности
function searchByRead() {
  let option = select.value;
  container.innerHTML = ``
  for(let i = 0; i < books.length; i++) {
    let isRead = read[i];
    if(option == `all` || 
       option == `read` && isRead == true ||
       option == `unread` && isRead == false
    ) {
        renderItem(i)
   }
  };
}
// Поиск по названию
function searchByTitle() {
  let search = input.value.toLowerCase();
  container.innerHTML = ``;
  for(let i = 0; i < books.length; i++) {
    let title = books[i].toLocaleLowerCase();
    if(title.includes(search)) {
      renderItem(i)
    }
  }
}

