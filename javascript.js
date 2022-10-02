let list = document.querySelector('.todo-list');
let items = list.children;
let emptyMessage = document.querySelector('.empty-message');
let newItemForm = document.querySelector('.todo-form');
let inputValue = document.querySelector('.todo-form-input');
let taskTemplate = document.querySelector('#task-template').content;
let newItemTemplate = taskTemplate.querySelector('.todo-list-item');

let addCheckItem = function () {
  if (items.length === 0) {
    emptyMessage.classList.remove('hidden');
  } else {
    emptyMessage.classList.add('hidden');
  }
};

let addHandler = function (item) {
  let checkbox = item.querySelector('.todo-list-input');
  checkbox.addEventListener('change', function () {
    item.remove();
    addCheckItem();
  });
};

for (let i = 0; i < items.length; i++) {
  addHandler(items[i]);
}

newItemForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  let taskText = inputValue.value;
  let task = newItemTemplate.cloneNode(true);
  let taskDesk = task.querySelector('span');
  taskDesk.textContent = taskText;

  addHandler(task);
  list.appendChild(task);
  addCheckItem();
  inputValue.value = '';
});

// var chat = document.querySelector('.chat-content')
// var sendMessage = document.querySelector('.chat-form');

// var template = document.querySelector('#message-template').content;
// var templateChat = template.querySelector('.chat-message');
// var input = document.querySelector('.chat-form-input');
// // var delete = document.querySelector(.'chat-message-button');

// var addHandler = function(item) {
//   var close = item.querySelector('.chat-message-button');
//   close.addEventListener('click', function() {
//     item.remove();
//     console.log('111111')
//     })
//   }

// sendMessage.addEventListener('submit', function (evt) {
//   evt.preventDefault();
//   var inputText = input.value;
//   var message = templateChat.cloneNode(true);
//   var messageText = message.querySelector('.chat-message-text');
//   messageText.textContent = inputText;
//   chat.appendChild(message)
//   addHandler(message)
//   input.value = '';

//   })

/* 

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).
    
- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.


*/

/* 

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).
    
- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.


*/

// var chatContainer = document.querySelector('.chat-content');
// var messages = chatContainer.children;
// var form = document.querySelector('.chat-form');
// var formInput = document.querySelector('.chat-form-input');
// var template = document.querySelector('template').content;
// var newMessageTemplate = template.querySelector('div');
// form.addEventListener('submit', function (evt) {
//   evt.preventDefault();
//   var newMessageText = formInput.value;
//   var newMessage = newMessageTemplate.cloneNode(true);
//   newMessage.children[1].textContent = newMessageText;
//   chatContainer.appendChild(newMessage);
//   formInput.value = '';
//   var close = newMessage.querySelector('.chat-message-button');
//   close.addEventListener('click', function () {
//     newMessage.remove();
//   });
// });

// var list = document.querySelector('.todo-list');
// var items = list.children;
// var emptyListMessage = document.querySelector('.empty-tasks');
// var newItemForm = document.querySelector('.add-form');
// var newItemTitle = newItemForm.querySelector('.add-form-input');
// var taskTemplate = document.querySelector('#task-template').content;
// var newItemTemplate = taskTemplate.querySelector('.todo-list-item');

// var toggleEmptyListMessage = function () {
//   if (items.length === 0) {
//     emptyListMessage.classList.remove('hidden');
//   }
// };

// var addCheckHandler = function (item) {
//   var checkbox = item.querySelector('.todo-list-input');
//   checkbox.addEventListener('change', function () {
//     item.remove();
//     toggleEmptyListMessage();
//   });
// };

// for (var i = 0; i < items.length; i++) {
//   addCheckHandler(items[i]);
// }

// newItemForm.addEventListener('submit', function (evt) {
//   evt.preventDefault();

//   var taskText = newItemTitle.value;
//   var task = newItemTemplate.cloneNode(true);
//   var taskDescription = task.querySelector('span');
//   taskDescription.textContent = taskText;
//   addCheckHandler(task);

//   list.appendChild(task);
// });
