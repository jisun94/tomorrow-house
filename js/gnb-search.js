const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');

gnbSearchInput.addEventListener('focus', function () {
  gnbSearchHistory.classList.add('is-active');
});
