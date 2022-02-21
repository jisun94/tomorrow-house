const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');
const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');
const deleteAllButton = gnbSearchHistory.querySelector(
  '.search-history-header button'
);

const deleteButtonList =
  gnbSearchHistoryList.querySelectorAll('.delete-button');

function close() {
  gnbSearchHistory.classList.remove('is-active');
  window.removeEventListener('click', closeGnbSearchHistory);
}

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    close();
  }
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length === 0) {
    return;
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistory);
  }
  gnbSearchHistory.classList.add('is-active');
}

function deleteAllSearchHistory() {
  gnbSearchHistoryList.innerHTML = '';
  close();
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);

deleteAllButton.addEventListener('click', deleteAllSearchHistory);

function deleteSearhHistoryItem(e) {
  e.stopPropagation();
  const item = this.parentNode;
  gnbSearchHistoryList.removeChild(item);

  if (gnbSearchHistoryList.children.length === 0) {
    close();
  }
}

deleteButtonList.forEach((button) => {
  button.addEventListener('click', deleteSearhHistoryItem);
});
