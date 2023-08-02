import { renderPhoneIndicator } from './layout/index.js';
import { debounce, getNode, insertLast } from './lib/index.js';
import { getProductList } from './maindetail/async.js';

const searchInput = getNode('.search-form');
const productList = await getProductList();
const container = getNode('#container');
const productItem = getNode('.productWrapper');

const createItem = (obj, index) => {
  const template = `
    <li class="product__list p-4 border-t border-b data-index=${index}">
      <figure class="figure flex">
        <img
        src="/${obj.image.thumbnail_l}.webp"
        alt="/${obj.image.alt}"
        class="image h-16 w-16 rounded object-cover mt-4"
        />
        <figcaption class="list inline-block ml-4 mt-2">
          <h1 class="list-name text-xs py-1 font-bold text-ellipsis whitespace-nowrap">${obj.name}</h1>
          <p class="list-location text-xs text-gray-500">${obj.user.address}</p>
          <strong class="list-price font-bold text-xs">${obj.price}원</strong>
        </figcaption>
      </figure>
  </li>
`;
  return template;
};

const resetUL = (insertNode, template) => {
  const productItem = getNode('.productWrapper');
  productItem.remove();
  insertLast(insertNode, template);
};

const ulTemplate = `<ul class="productWrapper"></ul>`;

const handleInput = debounce(async (e) => {
  e.preventDefault();
  resetUL(container, ulTemplate);
  const inputText = e.target.value;
  const searchArr = productList.filter((el) => {
    if (el.name.includes(inputText)) {
      return el;
    }
  });
  if (inputText === '') {
    resetUL(container, ulTemplate);
    return;
  }
  searchArr.forEach((item, index) => {
    insertLast(getNode('.productWrapper'), createItem(item, index));
  });
});

const handlePage = (e) => {
  const target = e.target.closest('li');
  if (!target) return;
  console.log(target);
};

searchInput.addEventListener('input', handleInput);
getNode('.productWrapper').addEventListener('click', handlePage);
renderPhoneIndicator();
