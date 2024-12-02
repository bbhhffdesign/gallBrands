document.addEventListener('DOMContentLoaded', function () {
    const selectTitle = document.querySelector('.select__title');
    const selectItems = document.querySelector('.select__items');
    const items = document.querySelectorAll('.item');
  

    selectTitle.addEventListener('click', function () {
      selectItems.style.display = selectItems.style.display === 'block' ? 'none' : 'block';
    });
  
    items.forEach(item => {
      item.addEventListener('click', function () {
        const selectedValue = item.getAttribute('data-value');
        const selectedText = item.textContent;
        selectTitle.textContent = selectedText;
        selectItems.style.display = 'none';
      });
    });
  
    document.addEventListener('click', function (e) {
      if (!selectTitle.contains(e.target) && !selectItems.contains(e.target)) {
        selectItems.style.display = 'none';
      }
    });
  });