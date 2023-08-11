
function createItemImg(array) {
    return array
      .map(
        ({ id, name, url, price }) => `
      <li class="list-item js-list-item" data-id = '${id}'>
          <img class="img" src="${url}" alt="${name}">
          <h2 class="title">${name}</h2>
          <p class="js-price">${price} грн.</p>
          <button class="btn js-btn">Add to favorite</button>
      </li>`
      )
      .join('');
    }

  export {createItemImg};