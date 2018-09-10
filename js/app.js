document.addEventListener('DOMContentLoaded', () => {

  // console.log('Yass');

  const form = document.querySelector('#form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
});

const handleFormSubmit = function (event) {
  event.preventDefault();

  const olympiansListItem = createOlympiansListItem(event.target);
  const olympiansList = document.querySelector('#olympians-list');
  olympiansList.appendChild(olympiansListItem);

  event.target.reset();
}

const createOlympiansListItem = function (form) {
  const olympiansListItem = document.createElement('li');
  olympiansListItem.classList.add('olympians-list-item');

  const greek_name = document.createElement('h3');
  greek_name.textContent = form.greek_name.value;
  olympiansListItem.appendChild(greek_name);

  const latin_name = document.createElement('h3');
  latin_name.textContent = form.latin_name.value;
  olympiansListItem.appendChild(latin_name);

  const dominion = document.createElement('p');
  dominion.textContent = form.dominion.value;
  olympiansListItem.appendChild(dominion);

    return olympiansListItem;
}

  const handleDeleteAllClick = function (event) {
    const olympiansList = document.querySelector('#olympians-list');
    olympiansList.innerHTML = '';
  }
