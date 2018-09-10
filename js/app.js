const select = element => document.querySelector(element);
const create = element => document.createElement(element);

document.addEventListener('DOMContentLoaded', () => {

  // console.log('Yass');

  const form = select('#form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = select('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleFormSubmit = function (event) {
  event.preventDefault();

  const olympiansListItem = createOlympiansListItem(event.target);
  const olympiansList = select('#olympians-list');
  olympiansList.appendChild(olympiansListItem);

  event.target.reset();
}

const createOlympiansListItem = function (form) {
  const olympiansListItem = create('li');
  olympiansListItem.classList.add('olympians-list-item');

  const greek_name = create('h3');
  greek_name.textContent = form.greek_name.value;
  olympiansListItem.appendChild(greek_name);

  const latin_name = create('h3');
  latin_name.textContent = form.latin_name.value;
  olympiansListItem.appendChild(latin_name);

  const dominion = create('p');
  dominion.textContent = form.dominion.value;
  olympiansListItem.appendChild(dominion);

  return olympiansListItem;
}

const handleDeleteAllClick = function (event) {
  const olympiansList = select('#olympians-list');
  olympiansList.innerHTML = '';
}
