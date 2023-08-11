// import { helloMassage, goodbuyMassage, sum } from '../js/import';
// console.log(helloMassage);
// console.log(goodbuyMassage);

// sum(5,7);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// import { moveJSON,move } from "../js/jsonpractice";

// console.log(typeof moveJSON, moveJSON);
// console.log(typeof move, move);

// const jsonParse = JSON.parse('{"name":"Terminator","time":3,"isHorror":false}')

// console.log(jsonParse);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// local storedge --------------

// const names = ['Ann', 'Brad', 'Tommy'];

// const keys = {
//     name: 'Array of names'
// };

// localStorage.setItem(keys.name, JSON.stringify(names));
// localStorage.removeItem(keys.name);
// localStorage.getItem(names);

// console.log('JSON.stringify(names) ', JSON.stringify(names));
// console.log('localStorage.getItem(keys.name); ', localStorage.getItem(keys.name));

// console.log(JSON.parse(localStorage.getItem(keys.name)));

// const btnLs = document.querySelector('.js-ls')

// btnLs.addEventListener('click', handlerAddLS);

// function handlerAddLS (){
//     localStorage.setItem(keys.name, JSON.stringify(names));
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import pictures from './images.json';
import { createItemImg } from './templates/templatesPLP';
import common from './common.json';
const picturesArr = [];
const selectors = {
  list: document.querySelector('.js-list'),
};

selectors.list.insertAdjacentHTML('beforeend', createItemImg(pictures));

selectors.list.addEventListener('click', handlerAddImg);

function handlerAddImg(e) {
  if (!e.target.classList.contains('js-btn')) {
    return;
  }

  const image = e.target.closest('.js-list-item');
  const imageId = Number(image.dataset.id);
  const currentPicture = pictures.find(({ id }) => id === imageId);

  const idx = picturesArr.findIndex(({ id }) => id === imageId); // якщо індекс =-1, то картинки ще не додавали, 
                                                                  // інакше повертаємо індекс в idx
  // console.log(imageId);
  if (idx !== -1) {                                               // перевіряємо на наявність картинки в масиві
    picturesArr[idx].quantity += 1;                               // якщо додавали, то малюнок отримав свій idx 
  } else {
    currentPicture.quantity = 1;
    picturesArr.push(currentPicture);
  }
  localStorage.setItem(common.LS_PICTURES, JSON.stringify(picturesArr));
 }
