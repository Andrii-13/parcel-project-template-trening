!function(){function e(e){return e&&e.__esModule?e.default:e}var t;t=JSON.parse('[{"id":1,"name":"rock","price":10,"url":"https://img.freepik.com/free-photo/idyllic-shot-of-a-huge-mountain-covered-in-vegetation-with-a-body-of-water-at-its-base_181624-21444.jpg?w=740&t=st=1691761118~exp=1691761718~hmac=4ee2ca1237015c9a4943324e29e0d5dedd222f4b8ac155d702771a8bce236f3d"},{"id":2,"name":"city","price":8,"url":"https://img.freepik.com/free-photo/landscape-of-cudillero-surrounded-by-hills-and-sea-under-the-sunlight-in-spain_181624-15839.jpg?w=740&t=st=1691761881~exp=1691762481~hmac=cc5d7e54d8ec9dcc99e754defbca7212eb6b309c26f378aefd008051571b0deb"},{"id":3,"name":"balloon","price":6,"url":"https://img.freepik.com/free-photo/landscape-of-morning-fog-and-mountains-with-hot-air-balloons-at-sunrise_335224-794.jpg?w=740&t=st=1691761954~exp=1691762554~hmac=b64082a5f9e3863a127cf7806d5f421e4dcefe41241ea2fa1f7474996c83031b"},{"id":4,"name":"tree","price":3,"url":"https://img.freepik.com/free-photo/lavender-field-at-sunset-near-valensole_268835-3910.jpg?w=740&t=st=1691762227~exp=1691762827~hmac=c42301dfcf318ff3f66a84910619a5fc36da908aeb35585e02de37374900f24c"}]');var a;a=JSON.parse('{"LS_PICTURES":"Favorite pictures"}');var i=[],n={list:document.querySelector(".js-list")};n.list.insertAdjacentHTML("beforeend",e(t).map((function(e){var t=e.id,a=e.name,i=e.url,n=e.price;return'\n      <li class="list-item js-list-item" data-id = \''.concat(t,'\'>\n          <img class="img" src="').concat(i,'" alt="').concat(a,'">\n          <h2 class="title">').concat(a,'</h2>\n          <p class="js-price">').concat(n,' грн.</p>\n          <button class="btn js-btn">Add to favorite</button>\n      </li>')})).join("")),n.list.addEventListener("click",(function(n){if(!n.target.classList.contains("js-btn"))return;var c=n.target.closest(".js-list-item"),s=Number(c.dataset.id),r=e(t).find((function(e){return e.id===s})),o=i.findIndex((function(e){return e.id===s}));-1!==o?i[o].quantity+=1:(r.quantity=1,i.push(r));localStorage.setItem(e(a).LS_PICTURES,JSON.stringify(i))}))}();
//# sourceMappingURL=index.c39939ae.js.map
