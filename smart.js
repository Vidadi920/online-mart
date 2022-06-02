let cart = [];

let card = [];

window.onload = () => {
  getData();
  checkard();
  showMiniCart();
};
const productURL = 'https://dh.cubicle.53xapps.com/products';
let product = [];
let products = [];
async function getData() {
  await axios.get(productURL).then((response) => {
    products = response.data;
    product = products.filter((item) => item.category == 1);

    render(product);
  });
  console.log(product);
}
const but = document.querySelectorAll('.btn');

export function render(list) {
  const blocks = document.querySelector('.blocks');
  const fragment = document.createDocumentFragment();
  for (let prod of list) {
    const block = document.createElement('div');
    block.className = 'placeholder-glow block shadow rounded text-center ';
    block.innerHTML = '';
    blocks.appendChild(block);
    const html = `
        <div data-id = ${prod.id} class="card">
        <img class="rounded user-img" src="${prod.photo}" alt="">
        <p class="">
        <span class ="card-title"><h3>Товар:${prod.title}</h3></span>
        </p>
        <p class="prod-prise">
        <span class="prod-price"><h4>Цена:${prod.price} Рублей</h4></span>
        </p>
        <p class="prod-counter"></p>
        
        <button type="button"  data-id ='${prod.id}' data-name=${prod.title} data-price=${prod.price}  class="btn btn-danger">В корзину</button>
      
         </div> </div>`;

    block.innerHTML = html;
    fragment.appendChild(block);
  }
  blocks.appendChild(fragment);

  const but = document.querySelectorAll('.btn');

  but.forEach((el) => {
    el.addEventListener('click', setAt);
  });

  const butDel = document.querySelectorAll('.delete_but');
  butDel.forEach((el1) => {
    el1.addEventListener('click', deleteItem);
  });
}

export function setAt() {
  let bask = {
    price: this.getAttribute('data-price'),
    name: this.getAttribute('data-name'),
    id: this.getAttribute('data-id'),
    count: 1,
  };

  cart.push(bask);

  window.localStorage.setItem('cart', JSON.stringify(cart));
  console.log(cart);
  showMiniCart();
  alert('Товар в кoрзинe!');
}

export function checkard() {
  if (localStorage.getItem('cart') != null) {
    JSON.parse(localStorage.getItem('cart'));
  }
}

export function showMiniCart() {
  for (let poss in cart) {
    card.push(cart[poss]);
  }
}
